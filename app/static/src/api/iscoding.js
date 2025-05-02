const fetchIsCoding = () => {
  try {
    document.addEventListener("DOMContentLoaded", async () => {
      const codingStats = document.getElementById("coding-stats");
      codingStats.innerHTML = "fetching coding status...";

      const res = await fetch(`${window.env.API_URL}/iscoding`);

      const { message } = await res.json();
      codingStats.innerHTML =
        message === "not coding" ? "not coding right now" : "coding right now";
    });
  } catch (err) {
    document.getElementById("coding-stats").innerHTML = "not coding right now";
    return "Error fetching coding stats:", err;
  }
};

export default fetchIsCoding;
