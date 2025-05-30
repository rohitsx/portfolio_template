import { WAKATIME_API_KEY } from "$env/static/private";

export default async function getWakatime() {
	const res = await fetch(
		`https://api.wakatime.com/api/v1//users/current/all_time_since_today?api_key=${WAKATIME_API_KEY}`,
		{
			method: "GET",
		},
	);

	console.log(res);
}
