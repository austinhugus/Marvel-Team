import HeroesController from "./Controllers/HeroesController.js";

class App {
  heroesController = new HeroesController();

}
console.log("hello from main")

window["app"] = new App();
