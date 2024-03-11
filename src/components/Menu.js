import { computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import data from "./../data/dataset.js";

export const iconHome = () => {
  const buttonHome = document.createElement("button");
  buttonHome.classList.add("tittleButton");
  buttonHome.innerHTML = "ARCHITOPIA";
  buttonHome.addEventListener("click", () => navigateTo("/", {}));
  return buttonHome;
};

export const iconChat = () => {};

export const iconStatistics = () => {
  const divStatistics = document.createElement("div");
  divStatistics.classList.add("statistics");
  const buttonStats = document.createElement("button");
  buttonStats.classList.add("statistics-button");
  buttonStats.addEventListener("click", function popupStats() {
    const funcStats = document.querySelector(
      'div[class = "functionsContainer"]'
    );
    const itemStats = document.querySelector('div[class = "items-container"]');
    const headStats = document.querySelector('header[class = "headerTittle"]');
    funcStats.style.filter = "blur(2px)";
    itemStats.style.filter = "blur(2px)";
    headStats.style.filter = "blur(2px)";
    const stats = computeStats(data);
    const popupStatsWonder = document.createElement("div");
    popupStatsWonder.className = "popStats";
    popupStatsWonder.innerHTML = `Average of people who visit the wonders of the world: <b>${stats}</b>`;
    const buttonCloseStats = document.createElement("button");
    buttonCloseStats.className = "buttonCloseStats";
    popupStatsWonder.append(buttonCloseStats);
    divStatistics.append(popupStatsWonder);
    popupStatsWonder.addEventListener("click", function closePopup() {
      const funcStats = document.querySelector(
        'div[class = "functionsContainer"]'
      );
      const itemStats = document.querySelector(
        'div[class = "items-container"]'
      );
      const headStats = document.querySelector(
        'header[class = "headerTittle"]'
      );
      funcStats.style.filter = "none";
      itemStats.style.filter = "none";
      headStats.style.filter = "none";
      divStatistics.removeChild(popupStatsWonder);
    });
  });
  divStatistics.appendChild(buttonStats);
  return divStatistics;
};
