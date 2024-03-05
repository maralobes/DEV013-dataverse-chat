import { Header } from "./../components/header.js";
export const About = (props) => {
  const aboutInfo = document.createElement('div');
  const dataInfo = document.createElement('div');
    dataInfo.innerHTML = `
    <li class="cList" itemscope="" itemtype="architectonics-works">
      <dl itemscope="" itemtype="items">
        <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${props.id}</dd>
        <img src=${props.imageUrl} alt=${props.name}>
          <dt>Nombre:</dt><dd itemprop="name">${props.name}</dd>
          <dt>Short description:</dt><dd itemprop="shortDescription">${props.shortDescription}</dd>
          <dt>Description:</dt><dd itemprop="description">${props.shortDescription}</dd>
          <dl " itemscope="" itemtype="facts">
            <dt>Year of built:</dt><dd itemprop="yearOfBuilt">${props.facts.yearOfBuilt}</dd>
            <dt>Style:</dt><dd itemprop="style">${props.facts.style}</dd>
            <dt>Location:</dt><dd itemprop="location">${props.facts.location}</dd>
            <dt>Constructor:</dt><dd itemprop="constructor">${props.facts.constructor}</dd>
            <dt>Annual visitors:</dt><dd itemprop="annualVisitors">${props.facts.annualVisitors}</dd>
            <dt>Wonder of the World:</dt><dd itemprop="IsWonderOfTheWorld">${props.facts.isWonderOfTheWorld}</dd>
          </dl>
      </dl>
    </li>
`;
aboutInfo.append(Header(), dataInfo);
return aboutInfo;
};
