import { courts } from "./courtsData";

export const hiddenContent = (courtindex) => {
  courts.map((value) => {
    let courtContent = document.getElementById(`court-${value.index}`);
    console.log(courtContent);
    courtContent?.classList.remove("flex");
    courtContent?.classList.add("hidden");
  });
};
export const showContent = (courtindex) => {
  let courtContent = document.getElementById(`court-${courtindex}`);
  console.log(courtContent);
  courtContent?.classList.add("flex");
  courtContent?.classList.remove("hidden");
};
