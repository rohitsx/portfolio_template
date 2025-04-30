
document.addEventListener("DOMContentLoaded", () => {
	window.env = {
 API_URL: window.location.hostname === "localhost"
      ? "http://localhost:8000/api"   // development
      : "https://devrohit.tech/api" // production
  };

document.getElementById('contact-form').addEventListener('submit', async function(e) {
		e.preventDefault();

		const name = e.target[0].value
		const email = e.target[1].value
		const whatsapp = e.target[2].value
		const message = e.target[3].value

		const res = await fetch(`${window.env.API_URL}/send-form-data`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, whatsapp, message }),
		});

		const data = await res.json();

		if (data.message === "success") alert('Message sent successfully! I\'ll get back to you within 30 minutes.');
		else alert("Server error. Please try a different method.")
		this.reset();

	});


})
