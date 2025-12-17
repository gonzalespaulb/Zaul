import { teams } from "./team-info.js";

document.addEventListener("DOMContentLoaded", () => {
  const teamList = document.querySelector(".team-list");


  if (!teamList) {
    console.error(" .team-list not found in HTML");
    return;
  }

  teams.forEach(team => {
    const row = document.createElement("div");


    row.className = "team-row";

    row.innerHTML = `
      <div class="team-list-logo"></div>
      <span>${team.name}</span>
      <span>${team.wins}-${team.losses}-${team.otLosses}</span>
    `;

    const teamListLogo = row.querySelector('.team-list-logo');

    if (teamListLogo && team.logoUrl) { // Assuming your 'team' object has a 'logoUrl' property
      // Use the specific logo URL from the team data, not a hardcoded one.
      teamListLogo.style.backgroundImage = `url(./assets/${team.logo})`;
    } else if (teamListLogo) {
      // Fallback for demonstration if logoUrl doesn't exist, e.g., using the hardcoded Bruins logo:
      teamListLogo.style.backgroundImage = `url(./assets/${team.logo})`;
    }

    teamList.appendChild(row);
  });

  console.log(" Teams rendered:", teams.length);
});
