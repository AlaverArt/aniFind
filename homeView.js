import api from './api.js';
import store from './store.js';
import Card from './card.js';

const findBtn = document.querySelector('.find__button');
const findInput = document.querySelector('.find__input');
const contentDiv = document.querySelector('.main__wrapper');

findBtn.addEventListener('click', () => findAnime(findInput?.value.toLowerCase().replace(' ', '-') || 'bleach', contentDiv));

async function findAnime(name, contentDiv){
    const animeName = name.toLowerCase().replaceAll(' ', '-') || 'bleach';
    const animeMap = store.getAnimeMap();

    try {
        document.body.style.backgroundImage = `url("https://gen.jut.su/chakranature/background_anime_${animeName}.dark.jpg")`;

        if(!animeMap.has(animeName))
            await store.loadAnimeMapItem(name);

        const div = document.createElement('div');
        div.classList.add('anime-list')

        animeMap.get(animeName).forEach((item, index) => {
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
        const animeName = findInput?.value.toLowerCase().replace(' ', '-') || 'bleach';
        console.log('home render');
        findAnime(animeName, contentDiv);
    }
}