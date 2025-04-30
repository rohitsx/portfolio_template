import fetchIsCoding from "./api/iscoding.js"
import getCodingStats from "./api/codingstats.js"

export default function runAllApis() {
	fetchIsCoding()
	getCodingStats()
}
