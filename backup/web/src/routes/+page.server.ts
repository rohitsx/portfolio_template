import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const fetchWakatimeData = async () => {
    const api = import.meta.env.VITE_API;

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
};
