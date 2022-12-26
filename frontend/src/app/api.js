const freeAPIBaseURL = 'https://kitsu.io/api/edge/anime?filter[text]=';
const freeAPIBaseGenreURL = 'https://kitsu.io/api/edge/anime/';

export default {
    getAnimes: async (name) => /*await ((await fetch('./mock_data.json')).json()),*/await (await fetch(freeAPIBaseURL + name)).json(),
    getAnimeItemGenres: async (id) => await (await fetch(freeAPIBaseGenreURL + id + '/genres')).json(),
}