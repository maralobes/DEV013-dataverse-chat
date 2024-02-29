import { computeStats} from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import data from "./../data/dataset.js";

export const iconHome = () =>{
const buttonHome =  document.createElement("button");
buttonHome.classList.add("tittleButton");
buttonHome.innerHTML = "ARCHITOPIA";
// console.log(buttonHome);
buttonHome.addEventListener('click', () => navigateTo ("/", {}));
return buttonHome;
} 

export const iconChat = () =>{

} 

export const iconStatistics= () =>{
    const divButton = document.createElement("div");
    const buttonStats = document.createElement("button");
    console.log(buttonStats);
    buttonStats.classList.add("statistics")
    buttonStats.addEventListener("click", function popupStats(){
      const stats = computeStats(data);
      const popupStatsWonder = document.createElement("div");
      popupStatsWonder.className = "popStats";
      popupStatsWonder.innerHTML = `Average of people who visit the wonders of the world: <b>${stats}</b>`;
      const buttonCloseStats = document.createElement("button");
      buttonCloseStats.className = "buttonCloseStats";
      popupStatsWonder.append(buttonCloseStats);
      divButton.append(popupStatsWonder);
      popupStatsWonder.addEventListener('click', function closePopup() {
      divButton.removeChild(popupStatsWonder);
      });
    });
    divButton.appendChild(buttonStats);
    return divButton;
} 


// export const filterContainer = () =>{
//    const filterfunction = document.createElement("div");
//     filterfunction.innerHTML=` 
//     <div class="workFunction1">
//     <label for="filterVisitors">Filter by: </label>
//     <select data-testid="select-filter" name="annualVisitors" id="filterVisitors">
//       <option hidden value="disabled">Annual visitors</option>
//       <option value="firstRange">0-2000000</option>
//       <option value="secondRange">2000001-4000000</option>
//       <option value="thirdRange">4000001-6000000</option>
//       <option value="fourthRange">6000 001-8000000</option>
//       <option value="fifthRange">8000001-10000000</option>
//     </select>
//   </div>
//  `
//   const selectFilter = document.querySelector('select[data-testid="select-filter"]');

//  selectFilter.addEventListener("change", function (event) {
//   const filterAnnualVisitors = filteredData(data,"annualVisitors",event.target.value);
// //   rootFill.innerHTML = "";
// //   rootFill.appendChild(renderItems(filterAnnualVisitors));

//   const selectSort = document.querySelector('select[data-testid="select-sort"]');
//   selectSort.addEventListener("change", function (event) {
//     const orderData = sortByName(filterAnnualVisitors,"name",event.target.value);
// //     rootFill.innerHTML = "";
// //     rootFill.appendChild(renderItems(orderData));
// return orderData;
// });
// return filterAnnualVisitors;
// });
// return selectFilter;
// }

// const sortfunction = document.createElement("div");
// sortfunction.innerHTML= ` <div class="workFunction2">
// <label for="sortName">Sort by: </label>
// <select data-testid="select-sort" name="name" id="sortName">
// <option hidden value ="disabled">Name</option>
// <option value="asc">A-Z</option>
// <option value="desc">Z-A</option>
// </select>
// </div>
// <button data-testid="button-clear">Clear</button>
// <button id = "statistics"></button>
// </div>`
export const sortContainer = () =>{

const selectSort = document.querySelector('select[data-testid="select-sort"]');
console.log(selectSort);
selectSort.addEventListener("change", function (event) {
  const orderData = sortByName(data, "name", event.target.value);
//   rootFill.innerHTML = "";
//   rootFill.appendChild(renderItems(orderData));
return orderData;
});

}
