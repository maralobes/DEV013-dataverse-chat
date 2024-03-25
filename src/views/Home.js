import { Header } from "./../components/header.js";
import { sortByName, filteredData } from "../lib/dataFunctions.js";
import data from "../data/dataset.js";
import { Footer } from "./../components/footer.js";
import { navigateTo } from "../router.js";
import { ApiKeyModal } from "../components/ApiKeyModal.js";
import { getApiKey } from "../lib/ApiKey.js";

export const Home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeElement");

  const renderItems = (data) => {
    const ulList = document.createElement("ul");
    ulList.classList.add("fList");

    data.forEach((item) => {
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

      function openPopup() {
        const boxApiKey = document.createElement("div");
        boxApiKey.classList.add("boxAbtApiKey");

        const aboutInfo = document.querySelector(".dataAbout");
        aboutInfo.style.opacity = "0.2";

        const apiKeyPopup = ApiKeyModal();

        const closeButton = document.createElement("button");
        closeButton.className = "buttonCloseApiModal";
        closeButton.textContent = "Close";

        const abtChatWind = document.querySelector(".aboutInfo");
        abtChatWind.appendChild(boxApiKey);
        boxApiKey.appendChild(apiKeyPopup);
        boxApiKey.appendChild(closeButton);

        closeButton.addEventListener("click", function closePopup() {
          const aboutInfo = document.querySelector(".dataAbout");
          aboutInfo.style.opacity = "1";
          abtChatWind.removeChild(boxApiKey);
        });

      }

      imageWork.addEventListener("click", async () => {
        if (getApiKey()) {
          await navigateTo("/about", { id: item.id });
        } else {
          await navigateTo("/about", { id: item.id }), 
          openPopup();
        }
      });

      archiWork.append(imageWork, nameWork, nameText, factsWork);
      factsWork.append(locationWork, locationText);

      const buttonAbout = document.createElement("button");
      buttonAbout.className = "btnAboutPopup";
      buttonAbout.innerHTML = "See more"
      listItem.appendChild(buttonAbout);

      buttonAbout.addEventListener("click", function openPopup() {
        const popupDiv = document.createElement("div");
        popupDiv.className = "popup";
        popupDiv.style.display = "inline-flex";
        popupDiv.style.backgroundColor = "#ffffff";
        popupDiv.style.marginLeft = "15%";
        popupDiv.style.marginRight = "15%";
        popupDiv.style.borderRadius = "100px";
        popupDiv.style.width = "fit-content";
        popupDiv.style.height = "fit-content";
        popupDiv.style.top = "5%";
        popupDiv.style.bottom = "5%";
    
        const imagePop = document.createElement("img");
        imagePop.src = item.imageUrl;
        imagePop.id = "imagePop";
        imagePop.style.width = "50%";
        imagePop.style.height = "50%";
        imagePop.style.borderRadius = "50px"
        // imagePop.style.marginTop = "4%";
  
        const popupContainerDiv = document.createElement("div");
        popupContainerDiv.className = "popup-container";
        popupContainerDiv.style.display = "block";
        popupContainerDiv.style.paddingLeft = "4%";
        popupContainerDiv.style.alignContent = "flex-start";
        popupContainerDiv.style.fontSize = "14px"
        popupContainerDiv.style.color = "black";
        popupContainerDiv.style.display = "block";
        popupContainerDiv.style.width = "fit-content";
  
        const namePop = document.createElement("p");
        namePop.innerHTML = `<b>Name:</b> ${item.name}`;
        namePop.style.margin = "7px";
        namePop.style.color = "black";
  
        const shortDescPop = document.createElement("p");
        shortDescPop.innerHTML = "<b>Short description: </b>" + item.shortDescription;
        shortDescPop.style.margin = "7px";
        shortDescPop.style.color = "black";
      
        const descrPop = document.createElement("p");
        descrPop.innerHTML = "<b>Description: </b>" + item.description;
        descrPop.style.margin = "7px";
        descrPop.style.color = "black";
    
        const yearPop = document.createElement("p");
        yearPop.innerHTML = "<b>Year of built: </b>" + item.facts.yearOfBuilt;
        yearPop.style.margin = "7px";
        yearPop.style.color = "black";
    
        const stylePop = document.createElement("p");
        stylePop.innerHTML = "<b>Style: </b>" + item.facts.style;
        stylePop.style.margin = "7px";
        stylePop.style.color = "black";
    
        const locationPop = document.createElement("p");
        locationPop.innerHTML = "<b>Location: </b>" + item.facts.location;
        locationPop.style.margin = "7px";
        locationPop.style.color = "black";
    
        const constructorPop = document.createElement("p");
        constructorPop.innerHTML = "<b>Constructor: </b>" + item.facts.constructor;
        constructorPop.style.margin = "7px";
        constructorPop.style.color = "black";
    
        const visitorsPop = document.createElement("p");
        visitorsPop.innerHTML = "<b>Visitors: </b>" + item.facts.annualVisitors;
        visitorsPop.style.margin = "7px";
        visitorsPop.style.color = "black";
    
        const wonderPop = document.createElement("p");
        wonderPop.innerHTML = "<b>Wonder of the world: </b>" + item.facts.isWonderOfTheWorld;
        wonderPop.style.margin = "7px";
        wonderPop.style.color = "black";
  
        const root = document.getElementById("root");
        popupDiv.append(imagePop,popupContainerDiv)
        popupContainerDiv.append(namePop,shortDescPop,descrPop,yearPop,stylePop,locationPop,constructorPop,visitorsPop,wonderPop);
  
        root.append(popupDiv);
        popupDiv.addEventListener('click', function closePopup() {
          root.removeChild(popupDiv);
        });
      });
    });

    return ulList;
  };

  const filterElement = document.createElement("div");
  filterElement.classList.add("filterElement");
  filterElement.innerHTML = ` 
  <div class="workFunction1">
  <label for="filterVisitors">Filter by: </label>
  <select data-testid="select-filter" name="annualVisitors" id="filterVisitors">
    <option hidden value="disabled">Annual visitors</option>
    <option value="firstRange">0-2000000</option>
    <option value="secondRange">2000001-4000000</option>
    <option value="thirdRange">4000001-6000000</option>
    <option value="fourthRange">6000 001-8000000</option>
    <option value="fifthRange">8000001-10000000</option>
  </select>
  </div>`;
  const sortElement = document.createElement("div");
  sortElement.classList.add("sortElement");
  sortElement.innerHTML = `
  <div class="workFunction2">
  <label for="sortName">Sort by: </label>
  <select data-testid="select-sort" name="name" id="sortName">
    <option hidden value ="disabled">Name</option>
    <option value="asc">A-Z</option>
    <option value="desc">Z-A</option>
  </select>
  </div>`;

  const selectFilter = filterElement.querySelector(
    'select[data-testid="select-filter"]'
  );
  selectFilter.addEventListener("change", function (event) {
    const filterAnnualVisitors = filteredData(
      data,
      "annualVisitors",
      event.target.value
    );

    const selectSort = sortElement.querySelector(
      'select[data-testid="select-sort"]'
    );
    selectSort.addEventListener("change", function (event) {
      const orderData = sortByName(
        filterAnnualVisitors,
        "name",
        event.target.value
      );
      updateItems(orderData);
    });
    updateItems(filterAnnualVisitors);
  });

  const selectSort = sortElement.querySelector(
    'select[data-testid="select-sort"]'
  );
  selectSort.addEventListener("change", function (event) {
    const orderData = sortByName(data, "name", event.target.value);
    updateItems(orderData);
  });

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");
  itemsContainer.appendChild(renderItems(data));

  const updateItems = (updatedData) => {
    const itemsContainer = homeContainer.querySelector(".items-container");
    itemsContainer.innerHTML = "";
    itemsContainer.appendChild(renderItems(updatedData));
  };

  const buttonClear = document.createElement("button");
  buttonClear.setAttribute("data-testid", "button-clear");
  buttonClear.innerHTML = "Clear";

  buttonClear.addEventListener("click", function clear() {
    selectFilter.selectedIndex = 0;
    selectSort.selectedIndex = 0;
    updateItems(data);
  });
  const functionsContainer = document.createElement("div");
  functionsContainer.classList.add("functionsContainer");

  functionsContainer.append(filterElement, sortElement, buttonClear);
  homeContainer.append(Header(), functionsContainer, itemsContainer, Footer());
  return homeContainer;
};
