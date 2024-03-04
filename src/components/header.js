// import { renderItems } from "./view.js";
// import data from "./data/dataset.js";
import { iconHome, iconStatistics } from "./menu.js";
export const Header = () => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add("headerContainer");
  const iconContainer = document.createElement('div');
  iconContainer.classList.add("iconContainer");
  const header = document.createElement('header');
  header.classList.add("header-title");
  header.innerHTML = `   
         
    <p>Exploring the wonders of our planet, one place at a time</p>
    `;
  iconContainer.append(iconHome(), iconStatistics())
  headerContainer.append(iconContainer,header);

  return headerContainer;


//   const buttonHome =  document.createElement("button");
// // console.log(buttonHome);
// buttonHome.addEventListener('click', () => navigateTo ("/", {}));
// return buttonHome;




};