// import { filteredData } from "../lib/dataFunctions.js";
// import { sortByName } from "../lib/dataFunctions.js";
// import { computeStats} from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";

export const iconHome = () =>{
const buttonHome =  document.createElement("button");
// console.log(buttonHome);
buttonHome.addEventListener('click', () => navigateTo ("/", {}));
return buttonHome;

} 

export const iconSearch = () =>{

} 

export const iconChat = () =>{

} 

export const iconStatistics= () =>{

} 

// const rootFill = document.getElementById("root");
// rootFill.appendChild(renderItems(data));

// const selectFilter = document.querySelector(
//   'select[data-testid="select-filter"]'
// );

// selectFilter.addEventListener("change", function (event) {
//   const filterAnnualVisitors = filteredData(data,"annualVisitors",event.target.value);
//   rootFill.innerHTML = "";
//   rootFill.appendChild(renderItems(filterAnnualVisitors));

//   const selectSort = document.querySelector('select[data-testid="select-sort"]');
//   selectSort.addEventListener("change", function (event) {
//     const orderData = sortByName(filterAnnualVisitors,"name",event.target.value);
//     rootFill.innerHTML = "";
//     rootFill.appendChild(renderItems(orderData));
//   });
// });

// const selectSort = document.querySelector('select[data-testid="select-sort"]');
// selectSort.addEventListener("change", function (event) {
//   const orderData = sortByName(data, "name", event.target.value);
//   rootFill.innerHTML = "";
//   rootFill.appendChild(renderItems(orderData));
// });
// const buttonStats = document.getElementById("statistics");
// buttonStats.addEventListener("click", function popupStats(){
//   const stats = computeStats(data);
//   const popupStatsWonder = document.createElement("div");
//   popupStatsWonder.className = "popStats";
//   popupStatsWonder.innerHTML = `Average of people who visit the wonders of the world: <b>${stats}</b>`;
//   const buttonCloseStats = document.createElement("button");
//   buttonCloseStats.className = "buttonCloseStats";
//   popupStatsWonder.append(buttonCloseStats);
//   rootFill.append(popupStatsWonder);
//   popupStatsWonder.addEventListener('click', function closePopup() {
//     rootFill.removeChild(popupStatsWonder);
//   });
// });
// const buttonClear = document.querySelector('button[data-testid="button-clear"]');
// buttonClear.addEventListener("click", function clear(){
//   selectFilter.selectedIndex = 0;
//   selectSort.selectedIndex = 0;
//   rootFill.innerHTML = "";
//   rootFill.appendChild(renderItems(data));
// });