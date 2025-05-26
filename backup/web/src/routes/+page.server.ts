// import type { PageServerLoad } from "./$types";
// import { WAKATIME_API_KEY } from "$env/static/private";
//
// export const load: PageServerLoad = async () => {
//   const apiKey = WAKATIME_API_KEY;
//
//   const headers = {
//     Authorization: `Bearer ${apiKey}`,
//     "Content-Type": "application/json",
//   };
//
//   async function isCoding() {
//     try {
//       const response = await fetch(
//         `https://wakatime.com/api/v1/users/current/stats`,
//         {
//           headers: headers,
//         },
//       );
//
//       console.log(response);
//       if (!response.ok) {
//         return { error: `Failed to fetch data: ${response.status}` };
//       }
//     } catch (error) {
//       console.error("Failed to fetch WakaTime data:", error);
//       return {
//         wakatimeData: null,
//         codingStatus: { status: false, error: "Failed to check coding status" },
//       };
//     }
//   }
//
//   isCoding();
// };
