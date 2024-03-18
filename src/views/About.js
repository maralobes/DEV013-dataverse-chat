import { iconHome } from "../components/menu.js";
import data from "../data/dataset.js";
import { Footer } from "../components/footer.js";

export const About = ({ id }) => {
  const archiWorks = data.find((item) => item.id === id);
  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("aboutInfo");
  const dataInfo = document.createElement("div");
  dataInfo.classList.add("dataAbout");
  dataInfo.innerHTML = `
    <li id=infoAbout class="cList" itemscope="" itemtype="architectonics-works">
      <dl itemscope="" itemtype="items">
        <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${archiWorks.id}</dd>
        <img src=${archiWorks.imageUrl} alt=${archiWorks.name} id="imageAbout">
        <div class="contentAbout">
          <dt>Nombre:</dt><dd id="nameAbout" itemprop="name">${archiWorks.name}</dd>
          <dt>Short description:</dt><dd itemprop="shortDescription">${archiWorks.shortDescription}</dd>
          <dt>Description:</dt><dd itemprop="description">${archiWorks.description}</dd>
          <dl itemscope="" itemtype="facts">
            <dt>Year of built:</dt><dd itemprop="yearOfBuilt">${archiWorks.facts.yearOfBuilt}</dd>
            <dt>Style:</dt><dd itemprop="style">${archiWorks.facts.style}</dd>
            <dt>Location:</dt><dd id="locationAbout" itemprop="location">${archiWorks.facts.location}</dd>
            <dt>Constructor:</dt><dd itemprop="constructor">${archiWorks.facts.constructor}</dd>
            <dt>Annual visitors:</dt><dd itemprop="annualVisitors">${archiWorks.facts.annualVisitors}</dd>
            <dt>Wonder of the World:</dt><dd itemprop="IsWonderOfTheWorld">${archiWorks.facts.isWonderOfTheWorld}</dd>
          </dl>
        </div>
      </dl>
    </li>
`;
  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");
  iconHomeContainer.append(iconHome());
  aboutInfo.append(iconHomeContainer, dataInfo, Footer());
  return aboutInfo;
};
