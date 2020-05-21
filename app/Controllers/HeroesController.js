import store from "../store.js";
import HEROESSERVICE from "../Services/HeroesService.js";

//Private
function _drawApiHero() {
    let heroes = store.State.apiHeroes;
    let template = ''
    heroes.forEach(h => template += h.Template)
    document.getElementById("marvelHero").innerHTML = template
}

function _drawMyHero() {
    let heroes = store.State.myHeroes;
    let template = ''
    heroes.forEach(h => template += h.Template)
    document.getElementById('myHero').innerHTML = template
}

//Public
export default class HeroesController {
    constructor() {
        store.subscribe("apiHeroes", _drawApiHero);
        store.subscribe("myHeroes", _drawMyHero)
    }

    collect(id) {
        HEROESSERVICE.collect(id);
    }
}