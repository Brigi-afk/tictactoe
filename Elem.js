export default class Elem{
    #adat="";
    #index=0;
    constructor(adat, index, szuloElem){
        this.#adat =  adat;
        this.#index = i;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.#kattintasEsemeny();
    }

    megjelenit(){
        let kod = `
        <div class="elem>
            ${this.#adat}
        </div>;
        this.szuloElem.innerAdjacentHTML("beforeend, kod);
        `
    }

    #kattintasEsemeny(){
        this.elem = document.querySelector(".elem:last-child");
        this.elem.addEventListener("click", (event)=> {
            this.#sajatEsemeny();
        })
    }

    #sajatEsemeny(){
        console.log("sajátesemény ");
        const e = new CustomEvent("katt", {detail:this.#index});
        window.dispatchEvent();
    }
}