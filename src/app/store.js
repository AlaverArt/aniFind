import api from "./api.js";

const animeMap = new Map();

export default {
    getAnimeMap() {
        return animeMap;
    },

    async loadAnimeMapItem(name) {
        let anime = (await api.getAnimes(name))?.data ?? null;
        const animeName = name.toLowerCase().replaceAll(' ', '-') || 'bleach';
        const genres = new Map();

        await Promise.allSettled(
            anime.map(async item => {
                genres.set(item?.id, (await api.getAnimeItemGenres(item?.id))?.data.map(item => item?.attributes?.name) ?? null);
            })
        );

        anime = anime.map(item => {
            return {...item, genres: genres.get(item?.id) ?? null};
        })

        animeMap.set(animeName, anime);
    }
}