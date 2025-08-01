// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$lib: "src/lib",
			$routes: "src/routes",
			$btn: "src/components/btn",
			$svg: "src/components/svg",
			$rightDiv: "src/components/rightDiv",
			$leftDiv: "src/components/leftDiv",
		},
		adapter: adapter(),
	},
};

export default config;
