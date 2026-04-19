import data from "../data/content.json";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const fetchHeroContent = async () => {
  await delay(1200);
  return data.hero;
};


export const fetchFeaturesContent = async () => {
  await new Promise(res => setTimeout(res, 1200));
  return data.featuresSection;
};
