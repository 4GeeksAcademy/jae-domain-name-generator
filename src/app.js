/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

window.onload = function() {
  let pronouns = ["the", "our", "her", "my"];
  let adjs = ["incredible", "favorite", "beloved"];
  let nouns = ["tentacle", "wart", "eyebrow"];
  let tlds = [".com", ".net", ".org", ".edu"];

  // Shuffle arrays once
  shuffleArray(pronouns);
  shuffleArray(adjs);
  shuffleArray(nouns);
  shuffleArray(tlds);

  // Get the maximum possible number of combinations
  let maxCombinations = pronouns.length * adjs.length * nouns.length;

  // Iterate through all possible combinations
  for (let i = 0; i < maxCombinations; i++) {
    let pronounIndex = i % pronouns.length;
    let adjIndex = Math.floor(i / pronouns.length) % adjs.length;
    let nounIndex =
      Math.floor(i / (pronouns.length * adjs.length)) % nouns.length;
    let tldIndex = i % tlds.length;

    let domain = `${pronouns[pronounIndex]}${adjs[adjIndex]}${nouns[nounIndex]}${tlds[tldIndex]}`;
    console.log(domain);
  }
};
