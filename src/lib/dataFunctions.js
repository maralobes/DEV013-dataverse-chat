export const filteredData = (data, filterBy, value) => { 
    const filterWork = data.filter((architecturalWork)=>{
      if (value === "firstRange"){
        return architecturalWork.facts[filterBy]<=2000000;
      }
      else if (value === "secondRange") {
        return (architecturalWork.facts[filterBy]>2000000 && architecturalWork.facts[filterBy]<=4000000)
      }
      else if (value === "thirdRange") {
        return (architecturalWork.facts[filterBy]>4000000 && architecturalWork.facts[filterBy]<=6000000)
      }
      else if (value === "fourthRange") {
        return (architecturalWork.facts[filterBy]>6000000 && architecturalWork.facts[filterBy]<=8000000)
      }
      else {
        return (architecturalWork.facts[filterBy]>8000000 && architecturalWork.facts[filterBy]<=10000000)
      }
    });
  
    return filterWork;
  };
  
  export const sortByName = (data, sortBy, sortOrder) => {
    const sortWork = data.slice();
  
    sortWork.sort((a, b) => {
      const nameA = a[sortBy].toLowerCase();
      const nameB = b[sortBy].toLowerCase();
  
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  
    return sortWork;
  };
  
  export const computeStats = (data) => {
    const statsWonderWorld = data.filter(statistics => statistics.facts.isWonderOfTheWorld === true);
    const statsVisitors = statsWonderWorld.map(statistics => statistics.facts.annualVisitors);
  
    const totalWonder = statsVisitors.reduce((a, b) => a + b, 0);
    const average = totalWonder / statsVisitors.length;
  
    return average;
  };