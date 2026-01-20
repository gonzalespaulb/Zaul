import { teams } from "./team-info.js";
const currentTeam = "Bruins";

const foundTeam = teams.find((team) => {
  return team.name === currentTeam;
});
// ------------------------------------------------------------------------- renders the team list

document.addEventListener("DOMContentLoaded", () => {
  const teamList = document.querySelector(".team-list");

  if (!teamList) {
    console.error(" .team-list not found in HTML");
    return;
  }

  teams.forEach((team) => {
    const row = document.createElement("div");

    row.className = "team-row";

    row.innerHTML = `
      <div class="team-list-logo"></div>
      <span>${team.name}</span>
      <span>${team.wins}-${team.losses}-${team.otLosses}</span>
    `;

    const teamListLogo = row.querySelector(".team-list-logo");

    if (teamListLogo && team.logoUrl) {
      // Assuming your 'team' object has a 'logoUrl' property
      // Use the specific logo URL from the team data, not a hardcoded one.
      teamListLogo.style.backgroundImage = `url(./assets/${team.logo})`;
    } else if (teamListLogo) {
      // Fallback for demonstration if logoUrl doesn't exist, e.g., using the hardcoded Bruins logo:
      teamListLogo.style.backgroundImage = `url(./assets/${team.logo})`;
    }

    teamList.appendChild(row);
  });

  console.log(" Teams rendered:", teams.length);

  const teamInfo = document.querySelector(".team-info");
  const positions = ["Forward", "Defense", "Goalie"];
  
  positions.forEach((position) => {
  const { players } = foundTeam;
  const playersByPosition = players.filter((player) => player.position === position);

  const playerContainer = document.createElement("div");
  const cardGrid = document.createElement("div");

  playerContainer.className = "player-container";
  cardGrid.className = "card-grid"; // Added for CSS targeting

  playerContainer.innerHTML = `<h2>${position}</h2>`;
  playerContainer.appendChild(cardGrid);

  console.log(playersByPosition);

  playersByPosition.forEach((player) => {
    // We use a template string for the card
    const playerCard = `
      <div class="card">
        <div class="player-photo" style="background-image: url('./assets/players/${player.image}')"></div>
        <span class="player-name">${player.firstName} ${player.lastName}</span>
      </div>`;

    // Correct way to append a string as HTML
    cardGrid.insertAdjacentHTML("beforeend", playerCard);
  });

  teamInfo.appendChild(playerContainer);
});
});

// ---------------------------------------------------------------------------------- renders current team

const general = document.querySelector(".general");
const teamLogo = document.querySelector(".team-logo");

// 1. Replace the logo
teamLogo.style.backgroundImage = `url(./assets/${foundTeam.logo})`;
// 2. Replace the team name and from
const info = document.querySelector(".info");
// 3. Combine team name and team from
info.innerHTML = `<h1>${foundTeam.from} ${foundTeam.name}</h1>
              <h2>${foundTeam.wins}-${foundTeam.losses}-${foundTeam.otLosses}</h2>`;
// 4. Replace team record

// 5. Insert HTML into general

// ------------------------------------------------------------------------------ renders players dynamically
