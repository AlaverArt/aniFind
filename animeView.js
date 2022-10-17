import store from "./store.js";

const contentDiv = document.querySelector('.main__wrapper');

export default {
    async render(){
        console.log('anime-view render');

        const animeMap = store.getAnimeMap();

        const animeInfo = location.hash.split('#')[1].split('/');
        const animeName = animeInfo[1];
        const animeIndex = animeInfo[2];

        if(!animeMap.has(animeName))
            await store.loadAnimeMapItem(animeName);

        const anime = animeMap.get(animeName)[animeIndex] ?? null;
        if(!anime) {
            contentDiv.innerHTML = 'Извините, такое аниме не найдено';
            return;
        }

        const div = document.createElement('div');
        div.classList.add('anime-view-content');

        div.innerHTML = `
            <div class='anime-desc'>        
                <div class='anime-desc__header'>
                    <div class='anime-desc__poster'>
                        <img src=${anime?.attributes?.posterImage?.large}>
                    </div>
                    <div class='anime-desc__title'>
                        <span>${anime?.attributes?.titles?.en_jp ?? ''}</span>
                        <hr>
                    </div>
                </div>
            </div>
        `
        contentDiv.innerHTML = '';
        contentDiv.appendChild(div);
    }
}