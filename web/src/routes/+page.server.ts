import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const fetchWakatimeData = async () => {
		const api = import.meta.env.VITE_API;

		const res = await fetch(`${api}/wakatime`);
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return await res.json();
	};
	return {
		wakatimeData: await fetchWakatimeData(),
	};
};
