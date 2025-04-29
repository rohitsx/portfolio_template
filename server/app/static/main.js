import addProjects from "./src/projects.js"
import addWork from "./src/work.js"
import handelEnv from "./lib/env.js";
import runAllApis from "./src/api.js"



function main() {
	handelEnv();
	addProjects();
	addWork();
	runAllApis();
}

main()
