/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //This comment is to prevent the autoformatter from doing stuff for a second.
  let pronouns = ["the", "our", "her", "my"];
  let adjs = ["incredible", "favorite", "beloved"];
  let nouns = ["tentacle", "wart", "eybrow"];
  let tlds = [".com", ".net", ".org", ".edu"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log([pronoun, adj, noun, tld]);
        }
      }
    }
  }
};
