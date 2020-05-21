import store from "../store.js";
import Hero from "../Models/Hero.js";

// @ts-ignore
const _heroApi = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public/characters?apikey=53496df3cd682930aa9108759e347171&&limit=100",
    timeout: 3000
})
// @ts-ignore
const _sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/Austin/heroes",
    timeout: 3000
})

class HeroesService {
    collect(id) {
        let heroes = store.State.myHeroes.find(h => h.id == id)
        console.log(heroes);


        _sandboxApi.post("", heroes)
            .then(res => {
                this.getMyHero();
            })
            .catch(e => console.error(e))
    }

    constructor() {
        this.getApiHero()
        this.getMyHero()

    }
    getApiHero() {
        _heroApi.get()
            .then(res => {
                console.log(res.data.data.results);

                let heroes = res.data.data.results.map(nh => new Hero(nh))
                store.commit("apiHeroes", heroes)
            })
            .catch(err => console.log(err))
    }

    getMyHero() {
        _sandboxApi.get('')
            .then(res => {
                console.log(res.data.data)

                let heroes = res.data.data.results.map(nh => new Hero(nh))
                store.commit('myHeroes', heroes)
            })
            .catch(err => console.log(err))
    }
}




const HEROESSERVICE = new HeroesService();
export default HEROESSERVICE;