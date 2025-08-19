import { NextResponse } from 'next/server';

interface WakaTimeStatsData {
  data: {
    human_readable_daily_average: string;
    human_readable_total_including_other_language: string;
    best_day: {
      date: string;
      text: string;
    };
    start: string;
    end: string;
  };
}

interface WakaTimeAllTimeData {
  data: {
    text: string;
  };
}

export async function GET() {
  const API_KEY = process.env.WAKATIME_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: 'WakaTime API key is not configured in environment variables.' },
      { status: 500 }
    );
  }

  try {
    const weeklyStatsEndpoint = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';
    const allTimeEndpoint = 'https://wakatime.com/api/v1/users/current/all_time_since_today';
    
    const encodedApiKey = Buffer.from(API_KEY).toString('base64');
    
    const fetchOptions = {
      headers: {
        'Authorization': `Basic ${encodedApiKey}`
      },
      next: { revalidate: 3600 } 
    };

    const [statsResponse, allTimeResponse] = await Promise.all([
      fetch(weeklyStatsEndpoint, fetchOptions),
      fetch(allTimeEndpoint, fetchOptions)
    ]);

    if (!statsResponse.ok || !allTimeResponse.ok) {
      // You can add more detailed error handling here if needed
      return NextResponse.json(
        { error: 'Failed to fetch data from one or more WakaTime endpoints.' },
        { status: 502 } // Bad Gateway, since our server failed to get data
      );
    }

    const [stats, allTimeData]: [WakaTimeStatsData, WakaTimeAllTimeData] = await Promise.all([
      statsResponse.json(),
      allTimeResponse.json()
    ]);

    const weeklyStats = stats.data;
    const allTimeStats = allTimeData.data;
    
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    
    const startDate = new Date(weeklyStats.start).toLocaleDateString('en-US', dateFormatOptions);
    const endDate = new Date(weeklyStats.end).toLocaleDateString('en-US', dateFormatOptions);
    const bestDayDate = new Date(weeklyStats.best_day.date).toLocaleDateString('en-US', dateFormatOptions);
    
    const formattedData = {
      startDate: startDate,
      endDate: endDate,
      dailyAverage: weeklyStats.human_readable_daily_average,
      weeklyTotal: weeklyStats.human_readable_total_including_other_language,
      bestDay: `${bestDayDate} (${weeklyStats.best_day.text})`,
      allTimeTotal: allTimeStats.text,
    };
    
    return NextResponse.json(formattedData, { status: 200 });

  } catch (error) {
    console.error("Error fetching WakaTime stats:", error);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
