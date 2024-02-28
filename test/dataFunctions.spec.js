import {
  filteredData,
  sortByName,
  computeStats,
} from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterBy", () => {
  it("returns `filteredData` according to its range", () => {
    const resultado1 = filteredData(fakeData, "annualVisitors", "firstRange");
    const resultado2 = filteredData(fakeData, "annualVisitors", "secondRange");
    const resultado3 = filteredData(fakeData, 'annualVisitors', 'thirdRange');
    const resultado4 = filteredData(fakeData, "annualVisitors", "fourthRange");
    const resultado5 = filteredData(fakeData, "annualVisitors", "fifthRange");

    expect(resultado1).toHaveLength(1);
    expect(resultado1[0]).toHaveProperty("facts");
    expect(resultado1[0].facts).toHaveProperty("annualVisitors", 1500000);

    expect(resultado2).toHaveLength(1);
    expect(resultado2[0]).toHaveProperty("facts");
    expect(resultado2[0].facts).toHaveProperty("annualVisitors", 4000000);

    expect(resultado3).toHaveLength(0);

    expect(resultado4).toHaveLength(3);
    expect(resultado4[0]).toHaveProperty("facts");
    expect(resultado4[0].facts).toHaveProperty("annualVisitors", 7000000);

    expect(resultado5).toHaveLength(1);
    expect(resultado5[0]).toHaveProperty("facts");
    expect(resultado5[0].facts).toHaveProperty("annualVisitors", 10000000);
  });
});

describe("SortBy", () => {
  it("returns an alphabetical ordered data A-Z & Z-A", () => {
    const disorderedArray = [
      {
        id: "colosseum",
        name: "The Colosseum",

      },
      {
        id: "greatwallchina",
        name: "Great Wall of China",
      },
      {
        id: "tajmahal",
        name: "Taj Mahal",
      },
    ];

    const orderedArrayDesc = [
      {
        id: "colosseum",
        name: "The Colosseum",
      },
      {
        id: "tajmahal",
        name: "Taj Mahal",
      },
      {
        id: "greatwallchina",
        name: "Great Wall of China",

      },

    ];

    const orderedArrayAsc = [
      {
        id: "greatwallchina",
        name: "Great Wall of China",
      },
      {
        id: "tajmahal",
        name: "Taj Mahal",
      },
      {
        id: "colosseum",
        name: "The Colosseum",
      },
    ];

    const sortedDataDesc = sortByName(disorderedArray, "name", "desc");
    const sortedDataAsc = sortByName(disorderedArray, "name", "asc");
    
    expect(sortedDataDesc).toEqual(orderedArrayDesc);
    expect(sortedDataAsc).toEqual(orderedArrayAsc);
  });
});

describe("Statistics", () => {
  it("returns average of annual visitors of the Wonder of the World", () => {
    expect(computeStats(fakeData)).toBe(6500000);
  });
});
