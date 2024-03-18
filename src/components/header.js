import { iconHome, iconStatistics, iconGrpChat } from "./Menu.js";
export const Header = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("iconContainer");
  const iconCircle = document.createElement("div");
  iconCircle.classList.add("iconCircleButton");
  const header = document.createElement("header");
  header.classList.add("headerTittle");
  header.innerHTML = `   
    <p>Exploring the wonders of our planet, one place at a time</p>
    `;
  iconCircle.append(iconStatistics(), iconGrpChat());
  iconContainer.append(iconHome(), iconCircle);
  headerContainer.append(iconContainer, header);

  return headerContainer;
};
