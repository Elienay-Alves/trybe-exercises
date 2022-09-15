import { exit } from "process";
import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./Seasons";

const MonthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(MonthsNames, "Choose one month of the year");

const seasonSouth = {
  [Seasons.AUTUMN]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
  [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
}

const seasonNorth = {
  [Seasons.SPRING]: seasonSouth[Seasons.AUTUMN],
  [Seasons.SUMMER]: seasonSouth[Seasons.WINTER],
  [Seasons.AUTUMN]: seasonSouth[Seasons.SPRING],
  [Seasons.WINTER]: seasonSouth[Seasons.SUMMER],
}

const hemispheres = {
  "North": seasonNorth,
  "South": seasonSouth,
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Choose one hemisphere");


const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Month: \n${month}`);
console.log(`Hemisphere: \n${hemisphere}`);
console.log(`Seasons:`);

const chosenHemisphereSeasons = Object.values(hemisphere)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(month)) console.log(seasons);
});




