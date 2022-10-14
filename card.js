export default class Card{
    #title;
    #image;
    #description;
    constructor(item){
        this.#title = item?.attributes?.titles?.en_jp ?? null;
        this.#image = item?.attributes?.posterImage?.small ?? null;
        this.#description = item?.attributes?.description ?? null;
    }

    render(){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <div class="card__image-wrapper">
                <img class="card__image" src="${this.#image}">
                <div class="card__desc">${this.#description || 'No description'}</div>
            </div>
            <div class="card__title">${this.#title}</div>
        `;
        return div;
    }
}