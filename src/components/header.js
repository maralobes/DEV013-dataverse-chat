// import { renderItems } from "./view.js";
// import data from "./data/dataset.js";
import { iconHome, iconStatistics } from "./menu.js";
export const Header = () => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add("headerContainer");
  const header = document.createElement('header');
  header.innerHTML = `        
    <p>Exploring the wonders of our planet, one place at a time</p>
    `;
  headerContainer.append(header, iconHome(), iconStatistics());

  return headerContainer;


//   const buttonHome =  document.createElement("button");
// // console.log(buttonHome);
// buttonHome.addEventListener('click', () => navigateTo ("/", {}));
// return buttonHome;




};