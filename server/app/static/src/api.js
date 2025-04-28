

const fetchCodingStats = () =>{

	try{

	const condingStats = document.getElementById("coding-stats");
document.addEventListener("DOMContentLoaded", async() => {


	condingStats.innerHTML = "fetching coding status..."

			const res = await fetch(`${window.env.API_URL}/iscoding`)

		const {message}= await res.json();
			condingStats.innerHTML =  message === "not coding" ? "not coding right now" :  "coding right now";
			

		})

	console.log(data);
	}catch(err){
		codingStats.innerHTML = "not coding right now";
		return("Error fetching coding stats:", err);
	}

}
export {fetchCodingStats};
