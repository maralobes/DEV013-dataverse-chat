// import { renderItems } from "./view.js";
// import data from "./data/dataset.js";
import { iconHome } from "./menu.js";
export const Header = () => {
  const headerContainer = document.createElement('div')
  const header = document.createElement('header');
  header.innerHTML = `        
    <h1>Architopia</h1>
    <p>Exploring the wonders of our planet, one place at a time</p>
    `;
    const iHome = iconHome(); 
    console.log(iHome);
  headerContainer.append(header, iHome);

  return headerContainer;





};