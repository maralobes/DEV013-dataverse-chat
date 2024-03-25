import { computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import data from "./../data/dataset.js";
import { ApiKeyModal } from "./ApiKeyModal.js";
import { getApiKey } from "../lib/ApiKey.js";

export const iconHome = () => {
  const buttonHome = document.createElement("button");
  buttonHome.classList.add("tittleButton");
  buttonHome.innerHTML = "ARCHITOPIA";
  buttonHome.addEventListener("click", () => navigateTo("/", {}));
  return buttonHome;
};

export const iconGrpChat = () => {
  const divIconChats = document.createElement("div");
  divIconChats.classList.add("chats");

  const buttonChats = document.createElement("button");
  buttonChats.setAttribute("data-testid", "button-chats");
  buttonChats.setAttribute("title", "Group Chat");

  function openPopup() {
    const boxApiKey = document.createElement("div");
    boxApiKey.classList.add("boxApiKey");
    const apiKeyPopup = ApiKeyModal();
    const closeButton = document.createElement("button");
    closeButton.className = "buttonCloseApiModal";
    closeButton.textContent = "Close";
    const grpChatWind = document.querySelector(".grpChatCont");
    grpChatWind.append(boxApiKey);
    boxApiKey.append(apiKeyPopup);
    boxApiKey.append(closeButton);

    closeButton.addEventListener("click", function closePopup() {
      grpChatWind.removeChild(boxApiKey);
    });
  }
  buttonChats.addEventListener("click", async () => {
    if (getApiKey()) {
      await navigateTo("/groupChat", {});
    } else {
      await navigateTo("/groupChat", {});
      openPopup();
    }
  });

  divIconChats.appendChild(buttonChats);
  return divIconChats;
};

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
