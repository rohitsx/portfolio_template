import { NextResponse } from "next/server";

export const GET = async () => {
  const token = process.env.GITHUB_TOKEN;

  const query = `
    {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const rawData = await response.json();
  const weeks =
    rawData.data.viewer.contributionsCollection.contributionCalendar.weeks;

  const allDays = weeks.flatMap((week: any) => week.contributionDays);

  const total =
    rawData.data.viewer.contributionsCollection.contributionCalendar
      .totalContributions;
  const thisWeek = weeks[weeks.length - 1].contributionDays.reduce(
    (sum: number, day: any) => sum + day.contributionCount,
    0,
  );
  const bestDay = Math.max(...allDays.map((day: any) => day.contributionCount));
  const average = Math.round(
    allDays.reduce((sum: number, day: any) => sum + day.contributionCount, 0) /
      allDays.length,
  );

  const commitGraph = allDays.map((day: any) => ({
    date: day.date,
    count: day.contributionCount,
  }));

  const structuredData = { total, thisWeek, bestDay, average, commitGraph };

  return NextResponse.json(structuredData);
};
