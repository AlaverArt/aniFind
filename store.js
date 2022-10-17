import api from "./api.js";

const animeMap = new Map();

export default {
    getAnimeMap() {
        return animeMap;
    },

    async loadAnimeMapItem(name) {
        animeMap.set(name, (await api.getAnimes(name))?.data ?? null);
    }
}