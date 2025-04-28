import addProjects from "./src/projects.js"
import addWork from "./src/work.js"
import handelEnv from "./lib/env.js";
import {fetchCodingStats} from "./src/api.js";



async function main() {
	handelEnv();
	addProjects();
	addWork();
	//await fetchCodingStats();
}

main()
