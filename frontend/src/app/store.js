import api from "./api.js";

const animeMap = new Map();
const commentsMap = new Map();

function animeNameToKey(name) {
    return name.toLowerCase().replaceAll(' ', '-') || 'bleach';
}

export default {
    getAnimeMap() {
        return animeMap;
    },

    async loadAnimeMapItem(name) {
        let anime = (await api.getAnimes(name))?.data ?? null;
        const animeName = animeNameToKey(name);
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
    },

    getCommentsMap() {
        return commentsMap;
    },

    async loadCommentsMapItem(animeId) {
        const comments = await api.getAnimeItemComments(animeId);
        commentsMap.set(animeId, comments);
    },

    postComment(animeId, comment) {
        api.postComment(animeId, comment);
    }
}