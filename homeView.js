import api from './api.js';
import store from './store.js';
import Card from './card.js';

const findBtn = document.querySelector('.find__button');
const findInput = document.querySelector('.find__input');
const contentDiv = document.querySelector('.main__wrapper');

findBtn.addEventListener('click', () => findAnime(findInput.value, contentDiv));

async function findAnime(name, contentDiv){
    const animeMap = store.getAnimeMap();

    try {
        if(!animeMap.has(name))
            await store.loadAnimeMapItem(name);
        console.log(animeMap)

        const div = document.createElement('div');
        div.classList.add('anime-list')

        animeMap.get(name).forEach((item, index) => {
            div.append((new Card(item, { name, index })).render())
        });

        contentDiv.innerHTML = '';
        contentDiv.appendChild(div);
    } catch(e) {
        console.error(e);
    }
}

export const homeView = {
    render() {
        console.log('home render');
        findAnime(findInput.value || 'bleach', contentDiv);
    }
}