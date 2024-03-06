import { Header } from "./../components/header.js";
import data from "../data/dataset.js";
export const About = ({id}) => {
const archiWorks = data.find((item)=> item.id === id)
console.log(id);
  console.log(archiWorks);
  const aboutInfo = document.createElement('div');
  const dataInfo = document.createElement('div');
    dataInfo.innerHTML = `
    <li class="cList" itemscope="" itemtype="architectonics-works">
      <dl itemscope="" itemtype="items">
        <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${archiWorks.id}</dd>
        <img src=${archiWorks.imageUrl} alt=${archiWorks.name}>
          <dt>Nombre:</dt><dd itemprop="name">${archiWorks.name}</dd>
          <dt>Short description:</dt><dd itemprop="shortDescription">${archiWorks.shortDescription}</dd>
          <dt>Description:</dt><dd itemprop="description">${archiWorks.description}</dd>
          <dl itemscope="" itemtype="facts">
            <dt>Year of built:</dt><dd itemprop="yearOfBuilt">${archiWorks.facts.yearOfBuilt}</dd>
            <dt>Style:</dt><dd itemprop="style">${archiWorks.facts.style}</dd>
            <dt>Location:</dt><dd itemprop="location">${archiWorks.facts.location}</dd>
            <dt>Constructor:</dt><dd itemprop="constructor">${archiWorks.facts.constructor}</dd>
            <dt>Annual visitors:</dt><dd itemprop="annualVisitors">${archiWorks.facts.annualVisitors}</dd>
            <dt>Wonder of the World:</dt><dd itemprop="IsWonderOfTheWorld">${archiWorks.facts.isWonderOfTheWorld}</dd>
          </dl>
      </dl>
    </li>
`;

// dataInfo.innerHTML = `
//   <li class="cList" itemscope="" itemtype="architectonics-works">
//       <dl itemscope="" itemtype="items">
//         <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${archiWorks.id}</dd>
//        <img src=${props.imageUrl} alt=${props.name}>
//            <dt>Nombre:</dt><dd itemprop="name">${props.name}</dd>
//           <dt>Short description:</dt><dd itemprop="shortDescription">${props.shortDescription}</dd>
//           <dt>Description:</dt><dd itemprop="description">${props.description}</dd>
//       </dl>
//      </li>
//  `;
aboutInfo.append(Header(), dataInfo);
return aboutInfo;
};
