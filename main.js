import api from './api.js';
import Card from './card.js';

async function findAnime(name, contentPlace){
    try {
        const animeList = await api.getAnimes(name);

        contentPlace.innerHTML = '';

        animeList.data.forEach(item => {
            contentPlace.append((new Card(item)).render())
        });
    } catch(e) {
        console.error(e);
    }
}

const findBtn = document.querySelector('.find__button');
const findInput = document.querySelector('.find__input');
const contentDiv = document.querySelector('.content');
findBtn.addEventListener('click', () => findAnime(findInput.value, contentDiv));