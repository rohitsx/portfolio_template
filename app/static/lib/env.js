const handelEnv = () => {
  window.env = {
    API_URL:
      window.location.hostname === "localhost"
        ? "http://localhost:8000/api"
        : "https://devrohit.tech/api",
  };
};

export default handelEnv;
