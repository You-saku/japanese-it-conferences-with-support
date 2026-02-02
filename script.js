const currentTimeEl = document.getElementById("current-time");

const updateCurrentTime = () => {
  const now = new Date();
  currentTimeEl.textContent = now.toLocaleString("ja-JP", {
    dateStyle: "full",
    timeStyle: "medium",
  });
};

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
