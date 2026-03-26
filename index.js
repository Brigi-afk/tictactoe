import Tabla from "./Tabla.js";

const szuloElem = document.querySelector(".tarolo")

export const TITOLISTA = [" ", "x", " ", " ", " ", " ", " ", " ", "o"]
let lepes = 0
new Tabla(Tabla, szuloElem);

window.addEventListener("katt", (event)=> {
    console.log(event.detail);
    TITOLISTA[event.detail]="x"
    new Tabla(TITOLISTA, szuloElem);
})