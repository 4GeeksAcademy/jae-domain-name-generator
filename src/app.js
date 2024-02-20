/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //This comment is to prevent the autoformatter from doing stuff for a second.
  let pronoun = ["the", "our", "her", "my"];
  let adj = ["incredible", "favorite", "beloved"];
  let noun = ["tentacle", "wart", "eybrow"];
  let tld = [".com", ".net", ".org", ".edu"];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let tld of tld) {
          console.log([pronoun, adj, noun, tld]);
        }
      }
    }
  }
};
