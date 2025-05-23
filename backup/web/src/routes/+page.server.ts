// import type { PageServerLoad } from "./$types";
// import { WAKATIME_API_KEY } from "$env/static/private";
//
// export const load: PageServerLoad = async () => {
// 	const apiKey = WAKATIME_API_KEY;
//
// 	const authHeader = "Basic " + btoa(`${apiKey}:`);
// 	const headers = {
// 		Authorization: authHeader,
// 	};
//
// 	async function isCoding() {
// 		const today = new Date();
// 		const year = today.getFullYear();
// 		const month = (today.getMonth() + 1).toString().padStart(2, "0");
// 		const day = today.getDate().toString().padStart(2, "0");
// 		const isoToday = `${year}-${month}-${day}`;
//
// 		try {
// 			const response = await fetch(
// 				`https://wakatime.com/api/v1/users/current/heartbeats?date=${isoToday}`,
// 				{
// 					method: "GET",
// 					headers: headers,
// 				},
// 			);
//
// 			if (!response.ok) {
// 				return { error: `Failed to fetch data: ${response.status}` };
// 			}
//
// 			const data = (await response.json()).data;
// 			if (!data || data.length === 0) {
// 				return { status: false };
// 			}
//
// 			const latestHeartbeat = data[data.length - 1];
//
// 			const currentUtc = new Date();
// 			currentUtc.setSeconds(0);
// 			currentUtc.setMilliseconds(0);
//
// 			const apiTime = new Date(latestHeartbeat.created_at);
// 			apiTime.setSeconds(0);
// 			apiTime.setMilliseconds(0);
//
// 			const diffMinutes =
// 				(currentUtc.getTime() - apiTime.getTime()) / (1000 * 60); // Difference in minutes
//
// 			if (diffMinutes < 3) {
// 				return {
// 					status: true,
// 					language: latestHeartbeat.language,
// 					project: latestHeartbeat.project,
// 				};
// 			} else {
// 				return { status: false };
// 			}
// 		} catch (error) {
// 			console.error("Error in isCoding function:", error);
// 			return { error: `An unexpected error occurred: ${error}` };
// 		}
// 	}
//
// 	try {
// 		const wakatimeStatsRes = await fetch(
// 			"https://wakatime.com/api/v1/users/current/stats/last_7_days",
// 			{
// 				method: "GET",
// 				headers: headers,
// 			},
// 		);
//
// 		if (!wakatimeStatsRes.ok) {
// 			throw new Error("Failed to fetch WakaTime stats data from backend API");
// 		}
//
// 		const wakatimeData = await wakatimeStatsRes.json();
// 		const codingStatus = await isCoding();
//
// 		console.log({ wakatimeData, codingStatus });
//
// 		return {
// 			wakatimeData,
// 			codingStatus,
// 		};
// 	} catch (error) {
// 		console.error("Failed to fetch WakaTime data:", error);
// 		return {
// 			wakatimeData: null,
// 			codingStatus: { status: false, error: "Failed to check coding status" }, // Provide a default error status
// 		};
// 	}
// };
