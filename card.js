export default class Card {
    #title;
    #image;
    #description;
    #path
    constructor(item, {name, index}){
        this.#title = item?.attributes?.titles?.en_jp ?? item?.attributes?.titles?.en_us ?? item?.attributes?.titles?.en ?? null;
        this.#image = item?.attributes?.posterImage?.small ?? null;
        this.#description = item?.attributes?.description ?? null;
        this.#path = {name: name.toLowerCase().replaceAll(' ', '-'), index};
    }

    render(){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <div class="card__image-wrapper">
                <img class="card__image" src="${this.#image}">
                <div onclick="window.location = '#anime-view/${this.#path.name}/${this.#path.index}'" class="card__desc">${this.#description || 'No description'}</div>
            </div>
            <div class="card__title"><a href='#anime-view/${this.#path.name}/${this.#path.index}'>${this.#title}</a></div>
        `;
        return div;
    }
}