import { computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import data from "./../data/dataset.js";
import { ApiKeyModal } from "./ApiKeyModal.js";

export const iconHome = () => {
  const buttonHome = document.createElement("button");
  buttonHome.classList.add("tittleButton");
  buttonHome.innerHTML = "ARCHITOPIA";
  // console.log(buttonHome);
  buttonHome.addEventListener("click", () => navigateTo("/", {}));
  return buttonHome;
};

export const iconChats = () => {
  const divIconChats = document.createElement("div");
  divIconChats.classList.add("chats");
  const buttonChats = document.createElement("button");
  buttonChats.classList.add("data-testid", "button-chats");
  buttonChats.innerHTML = "Chats";
  divIconChats.appendChild(buttonChats);

  buttonChats.addEventListener("click", function popupApiKey() {
    const apiKeyPopup = ApiKeyModal();
    divIconChats.append(apiKeyPopup);
  });
  return divIconChats;
};

export const iconStatistics = () => {
  const divStatistics = document.createElement("div");
  divStatistics.classList.add("statistics");
  const buttonStats = document.createElement("button");
  console.log(buttonStats);
  buttonStats.classList.add("statistics-button");
  buttonStats.addEventListener("click", function popupStats() {
    const stats = computeStats(data);
    const popupStatsWonder = document.createElement("div");
    popupStatsWonder.className = "popStats";
    popupStatsWonder.innerHTML = `Average of people who visit the wonders of the world: <b>${stats}</b>`;
    const buttonCloseStats = document.createElement("button");
    buttonCloseStats.className = "buttonCloseStats";
    popupStatsWonder.append(buttonCloseStats);
    divStatistics.append(popupStatsWonder);
    popupStatsWonder.addEventListener("click", function closePopup() {
      divStatistics.removeChild(popupStatsWonder);
    });
  });
  divStatistics.appendChild(buttonStats);
  return divStatistics;
};
