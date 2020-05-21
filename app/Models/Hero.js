export default class Hero {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.img = data.img || data.thumbnail.path + '.' + data.thumbnail.extension
        this.comics = data.comics
    }

    get Template() {
        return /**HTML */`<div class="card">
                    <img class="card-img-top" src="${this.img}>
                    <div class="card-body">
                        <h4 class="card-title">${this.name} | ${this.comics}</h4>
                        <p class="card-text">${this.description}</p>
                    </div>
                    <button class = "btn btn-success" onclick="app.heroesController.collect(${this.id})">Collect!</button>
                </div>`
    }
}