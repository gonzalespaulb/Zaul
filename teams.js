import { teams } from "./team-info.js";

document.addEventListener("DOMContentLoaded", () => {
  const teamList = document.querySelector(".team-list");

  if (!teamList) {
    console.error("❌ .team-list not found in HTML");
    return;
  }

  teams.forEach(team => {
    const row = document.createElement("div");
    row.className = "team-row";

    row.innerHTML = `
      <span>${team.name}</span>
      <span>${team.wins}-${team.losses}-${team.otLosses}</span>
    `;

    teamList.appendChild(row);
  });

  console.log("✅ Teams rendered:", teams.length);
});
