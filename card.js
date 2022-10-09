export default class Card{
    #title;
    #image;

    constructor(item){
        console.log(item);
        this.#title = item?.attributes?.titles?.en_jp ?? null;
        this.#image = item?.attributes?.posterImage?.small ?? null;
    }

    render(){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img class="card__image" src="${this.#image}">
            <span class="card__title">${this.#title}</span>
        `;
        return div;
    }
}