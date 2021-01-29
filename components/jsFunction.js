import { courts, academies, clubs, shops } from "./courtsData";

export const hiddenContent = (category) => {
  let arrayData;
  if (category === "court") {
    arrayData = courts;
  } else if (category === "shop") {
    arrayData = shops;
  } else if (category === "academy") {
    arrayData = academies;
  } else if (category === "club") {
    arrayData = clubs;
  }

  arrayData.map((value) => {
    let courtContent = document.getElementById(`court-${value.index}`);
    courtContent?.classList.remove("flex");
    courtContent?.classList.add("hidden");
  });
};
export const showContent = (courtindex) => {
  let courtContent = document.getElementById(`court-${courtindex}`);
  courtContent?.classList.add("flex");
  courtContent?.classList.remove("hidden");
};
