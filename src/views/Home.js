import { header } from "./../components/header.js";
// import { data } from "./../data/dataset.js";
import { footer } from "./../components/footer.js";
import { navigateTo } from "../router.js";

export const Home = () => {
  // const div = document.createElement("div");
  // const headerView = headerComponent(header);
  //  // const archiworksView = renderItems(data);
  // const footerView = footerComponent(footer);
  // div.appendChild(headerView, footerView);
  // // div.appendChild(archiworksView);
  
  // // const aboutWork = section.querySelector(" "); sería q cuando seleccione una tarjeta pueda mostrar su información/about
  // // aboutWork.addEventListener('click', () => navigateTo ("/about", {}));
  // return div;
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `        
    <h2>Home</h2>
    <p>This is the homepage</p>
  `;
  console.log(viewEl);
  return viewEl;
};