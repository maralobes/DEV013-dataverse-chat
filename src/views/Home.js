import { Header } from "./../components/header.js";
import data from "../data/dataset.js";
import { Footer } from "./../components/footer.js";
import { navigateTo } from "../router.js";
import { sortContainer } from "../components/menu.js";

export const Home = () => {
 
  const homeContainer = document.createElement("div")
  homeContainer.classList.add("homeElement");

  // const divHeader = document.createElement("div");
  // divHeader.classList.add("headerElement");
  const renderItems = (data) =>{
    console.log(data);
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
    return ulList;
  }

  //  ulList.addEventListener('click', () => navigateTo ("/about", {}));
  const selectSort = document.querySelector('select[data-testid="select-sort"]');
  console.log(selectSort);
  selectSort.addEventListener("change", function (event) {
    const orderData = sortByName(data, "name", event.target.value);
    console.log(orderData);
    homeContainer.innerHTML = "";
    homeContainer.append(renderItems(orderData));
  });
  homeContainer.append(Header(), renderItems(data), Footer());

  // const buttonClear = document.createElement("button");
  // buttonClear.setAttribute("data-testid", "button-clear");
  // buttonClear.addEventListener("click", function clear(){
  // // filterContainer.selectedIndex = 0;
  // sortContainer.selectedIndex = 0;
  // homeContainer.innerHTML = "";
  // homeContainer.appendChild(renderItems(data));
// });
    return homeContainer;
  }; 
  
