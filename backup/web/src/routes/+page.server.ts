import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
<<<<<<< HEAD
  const fetchWakatimeData = async () => {
    const api = import.meta.env.VITE_API;
=======
	try {
		const authHeader = Buffer.from(`${apiKey}:`).toString("base64");
>>>>>>> fdedc6c (change date fromate in coding stats)

		try{
			    const res = await fetch(`${api}/wakatime`);
    if (!res.ok) {
      return "Failed to fetch data";
    }
    return await res.json();

		}catch{
      return "Failed to fetch data";
		}
  };
  return {
    wakatimeData: await fetchWakatimeData(),
  };
		const url = `https://wakatime.com/api/v1/users/current/heartbeats`;

		const response = await fetch(url, {
			method: "GET",
			headers,
		});

		const wakatimeData = await response.json();

		return {
			wakatimeData,
		};
	} catch (error) {
		console.error("Failed to fetch WakaTime data:", error);
		return {
			wakatimeData: null,
		};
	}
};
