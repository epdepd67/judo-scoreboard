function resetMatch() {
  // Reset scores and penalties
  scores = {
    shiro: { ippon: 0, waza: 0, k1: 0, k2: 0, kc: 0, kh: 0, a1: 0, ac: 0, ah: 0 },
    aka: { ippon: 0, waza: 0, k1: 0, k2: 0, kc: 0, kh: 0, a1: 0, ac: 0, ah: 0 }
  };

  // Reset display
  for (let player in scores) {
    for (let type in scores[player]) {
      document.getElementById(`${player}-${type}`).textContent = "0";
    }
  }

  // Reset timer
  pauseTimer();
  const minutesInput = document.getElementById("minutes");
  minutesInput.value = 2;
  time = 120;
  updateTimerDisplay();

  // Clear summary
  document.getElementById("summary-text").textContent = "Waiting for match data...";

  // Clear local storage
  localStorage.removeItem("judoScores");
}