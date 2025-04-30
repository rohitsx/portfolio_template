const handelEnv = () => {
	window.env = {
 API_URL: window.location.hostname === "localhost"
      ? "http://localhost:8000/api"   // development
      : "https://devrohit.tech/api" // production
  };
}

export default handelEnv;
