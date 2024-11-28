/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let nombre = ["mi perro", "mi amigo", "mi hijo", "mi compadre"];
  let acto = ["me pego", "me robo", "me pateo", "me escupio"];
  let cosa = ["el zapato", "la cartera", "la mesa", "la silla"];
  let lugar = ["en la calle", "en la banqueta", "en Mexico", "en la esquina"];

  let ran1 = Math.floor(Math.random() * nombre.length);
  let ran2 = Math.floor(Math.random() * acto.length);
  let ran3 = Math.floor(Math.random() * cosa.length);
  let ran4 = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excuse").innerHTML =
    nombre[ran1] + " " + acto[ran2] + " " + cosa[ran3] + " " + lugar[ran4];
};
