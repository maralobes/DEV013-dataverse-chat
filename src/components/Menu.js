import { computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import data from "./../data/dataset.js";
import { ApiKeyModal } from "./ApiKeyModal.js";

export const iconHome = () => {
  const buttonHome = document.createElement("button");
  buttonHome.classList.add("tittleButton");
  buttonHome.innerHTML = "ARCHITOPIA";
  buttonHome.addEventListener("click", () => navigateTo("/", {}));
  return buttonHome;
};
// export const indChat = () => {
//   const indIconChats = document.createElement("div");
//   indIconChats.classList.add("ind-chat");
//   const btnIndChat = document.createElement("button");
//   btnIndChat.setAttribute("data-testid", "btn-ind-chat");
//   btnIndChat.innerHTML = "Individual Chat";
//   indIconChats.append(btnIndChat);
//   btnIndChat.addEventListener("click", () => navigateTo("/individualChat", {}));
//   return indIconChats;
// };
// export const grpChat = () => {
//   const groupIconChats = document.createElement("div");
//   groupIconChats.classList.add("grp-chat");
//   const btnGrpChat = document.createElement("button");
//   btnGrpChat.setAttribute("data-testid", "btn-grp-chats");

//   groupIconChats.append(btnGrpChat);
//   btnGrpChat.addEventListener("click", () => navigateTo("/groupChat", {}));
//   return groupIconChats;
// };
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
    console.log(boxApiKey);
    const closeButton = document.createElement("button");
    closeButton.className = "buttonCloseApiModal";
    closeButton.textContent = "Close";
    const grpChatWind = document.querySelector(".grpChatCont");
    console.log(grpChatWind);
    grpChatWind.append(boxApiKey);
    boxApiKey.append(apiKeyPopup);
    boxApiKey.append(closeButton);

    closeButton.addEventListener("click", function closePopup() {
      // const headerTitle = document.querySelector(".headerTittle");
      // headerTitle.style.visibility = "visible";
      // const funcStats = document.querySelector(
      //   'div[class = "functionsContainer"]'
      // );
      // const itemStats = document.querySelector(
      //   'div[class = "items-container"]'
      // );
      // funcStats.style.filter = "none";
      // itemStats.style.filter = "none";
      grpChatWind.removeChild(boxApiKey);
      // divIconChats.removeChild(closeButton);
    });
  }
  buttonChats.addEventListener("click", async() => {
    await navigateTo("/groupChat", {});
    openPopup();
  });

  divIconChats.appendChild(buttonChats);
  return divIconChats;
};
// export const iconChats = () => {
//   const divIconChats = document.createElement("div");
//   divIconChats.classList.add("grp-chats");
//   const buttonChats = document.createElement("button");
//   buttonChats.setAttribute("data-testid", "button-chats");
//   buttonChats.innerHTML = "Chats";

//   buttonChats.addEventListener("click", function popupApiKey() {
//     const headerTitle = document.querySelector(".headerTittle");
//     const funcStats = document.querySelector('div[class = "functionsContainer"]');
//     const itemStats = document.querySelector('div[class = "items-container"]');
//     funcStats.style.filter = "blur(3px)";
//     itemStats.style.filter = "blur(3px)";
//     headerTitle.style.visibility = "hidden";
//     const boxApiKey = document.createElement("div");
//     boxApiKey.classList.add("boxApiKey");
//     const apiKeyPopup = ApiKeyModal();

//     const closeButton = document.createElement("button");
//     closeButton.className = "buttonCloseApiModal";
//     closeButton.textContent = "Close";

//     divIconChats.append(boxApiKey);
//     boxApiKey.appendChild(apiKeyPopup);

//     closeButton.addEventListener("click", function closePopup() {
//       const headerTitle = document.querySelector(".headerTittle");
//       headerTitle.style.visibility = "visible";
//       const funcStats = document.querySelector(
//         'div[class = "functionsContainer"]'
//       );
//       const itemStats = document.querySelector(
//         'div[class = "items-container"]'
//       );
//       funcStats.style.filter = "none";
//       itemStats.style.filter = "none";
//       divIconChats.removeChild(boxApiKey);
//       // divIconChats.removeChild(closeButton);
//       console.log(divIconChats);
//       console.log(headerTitle);
//     });

//     boxApiKey.appendChild(closeButton);
//   });

//   divIconChats.appendChild(buttonChats);
//   return divIconChats;
// };

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
