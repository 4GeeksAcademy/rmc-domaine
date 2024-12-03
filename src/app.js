/* eslint-disable */
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let nombre = ["perro", "loro", "toro"];
let cualidad = ["loco", "tuerto", "cojo"];
let apellido = ["McCoy", "Trump", "Jackson"];
let domain = [".net", ".com", ".mx"];

window.onload = function() {
  for (let name = 0; name <= 2; name++) {
    for (let qual = 0; qual <= 2; qual++) {
      for (let last = 0; last <= 2; last++) {
        for (let dom = 0; dom <= 2; dom++) {
          console.log(
            nombre[name] + cualidad[qual] + apellido[last] + domain[dom]
          );
        }
      }
    }
  }
};

