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

        document.body.style.backgroundImage = `url("https://gen.jut.su/chakranature/background_anime_${animeName.toLowerCase().replaceAll(' ', '-')}.dark.jpg")`;

        const div = document.createElement('div');
        div.classList.add('anime-view-content');

        div.innerHTML = `
            <div class='anime-desc'>        
                <div class='anime-desc__header'>
                    <div class='anime-desc__poster'>
                        <img src=${anime?.attributes?.posterImage?.large}>
                    </div>
                    <div class='anime-desc__title'>
                        <span>${anime?.attributes?.titles?.en_jp ?? anime?.attributes?.titles?.en_us ?? anime?.attributes?.titles?.en ?? ''}</span>
                        <hr>
                        <table cellspacing="20" class='anime-desc__list'>
                            <tr>
                                <td>Тип:</td>
                                <td>${anime?.attributes?.subtype ?? ''}</td>
                            </tr>
                            <tr>
                                <td>Эпизоды:</td>
                                <td>${anime?.attributes?.episodeCount ?? ''}</td>
                            </tr>
                            <tr>
                                <td>Статус:</td>
                                <td>${anime?.attributes?.status ?? ''}</td>
                            </tr>
                            <tr>
                                <td>Жанр:</td>
                                <td>${anime?.genres.join(", ") ?? ''}</td>
                            </tr>
                            <tr>
                                <td>Выпуск:</td>
                                <td>${anime?.attributes?.startDate + ' - ' + anime?.attributes?.endDate ?? ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class='anime-desc__content'>
                    <p>${anime?.attributes?.description ?? ''}</p>
                </div>
            </div>
        `
        contentDiv.innerHTML = '';
        contentDiv.appendChild(div);
    }
}