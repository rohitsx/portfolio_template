export async function load() {
	const res = await fetch("https://api.github.com/users/rohitsx/repos");
	const data = await res.json();
	console.log("data:", data);
	return { repos: data };
}
