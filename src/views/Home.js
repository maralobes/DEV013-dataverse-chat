import { Header } from "./../components/header.js";
import data from "../data/dataset.js";
import { Footer } from "./../components/Footer.js";
import { navigateTo } from "../router.js";

export const Home = () => {
  const homeContainer = document.createElement("div")
  homeContainer.classList.add("homeElement");

  const headerView = Header();
  console.log(headerView);
  // const divHeader = document.createElement("div");
  // divHeader.classList.add("headerElement");
  
  const ulList = document.createElement("ul");
  ulList.classList.add("fList");
  
  data.forEach(item => {
    const listItem = document.createElement("li");
    listItem.classList.add("cList");
    listItem.setAttribute("itemscope", "");
    listItem.setAttribute("itemtype", "architectonics-works");

    const archiWork = document.createElement("dl");
    archiWork.setAttribute("itemscope", "");
    archiWork.setAttribute("itemtype", "items");

    const nameWork = document.createElement("dt");
    nameWork.innerHTML = "Nombre:";
    const nameText = document.createElement("dd");
    nameText.setAttribute("itemprop", "name");
    nameText.innerHTML = item.name;
    nameWork.style.display = "none";

    const imageWork = document.createElement("img");
    imageWork.setAttribute("src", item.imageUrl);
    imageWork.setAttribute("alt", item.name);
    imageWork.innerHTML = item.imageUrl;

    const factsWork = document.createElement("dl");
    factsWork.setAttribute("itemscope", "");
    factsWork.setAttribute("itemtype", "facts");

    const locationWork = document.createElement("dt");
    locationWork.innerHTML = "Location:";
    const locationText = document.createElement("dd");
    locationText.setAttribute("itemprop", "location");
    locationText.innerHTML = item.facts.location;
    locationWork.style.display = "none";

    ulList.appendChild(listItem);
    listItem.appendChild(archiWork);
    archiWork.append(
      imageWork,
      nameWork,
      nameText,
      factsWork
    );
    factsWork.append(
      locationWork,
      locationText,
    );

    });
   ulList.addEventListener('click', () => navigateTo ("/about", {}));
   
    const footerView = Footer();
    console.log(footerView);
    // const divFooter = document.createElement("div");
    // divFooter.classList.add("footerElement");

    homeContainer.append(headerView, ulList, footerView);
    return homeContainer;
  }; 
  