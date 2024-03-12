
import { iconHome, iconStatistics, iconChats } from "./menu.js";
export const Header = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("iconContainer");
  const header = document.createElement("header");
  header.classList.add("headerTittle");
  header.innerHTML = `   
    <p>Exploring the wonders of our planet, one place at a time</p>
    `;
  iconContainer.append(iconHome(), iconStatistics(), iconChats());
  headerContainer.append(iconContainer, header);

  return headerContainer;

};
