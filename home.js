import { teams } from "./team-info.js";

const table = document.querySelector(".table");

teams.forEach((item) => {
  const dataRow = document.createElement("div");
  dataRow.classList.add("data_row");
  dataRow.innerHTML = `
                    <div class="cell"><span>${item.name}</span></div>
                    <div class="cell"><span></span></div>
                    <div class="cell"><span>${item.wins}-${item.losses}-${item.otLosses}</span></div>
                    <div class="cell"><span></span></div>
`;
table.appendChild(dataRow);
});
