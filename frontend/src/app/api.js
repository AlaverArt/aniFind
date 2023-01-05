const freeAPIBaseURL = 'https://kitsu.io/api/edge/anime?filter[text]=';
const freeAPIBaseGenreURL = 'https://kitsu.io/api/edge/anime/';
const aniFindBackendURL = 'http://45.15.159.108:3000';

export default {
    getAnimes: async (name) => /*await ((await fetch('./mock_data.json')).json()),*/await (await fetch(freeAPIBaseURL + name)).json(),
    getAnimeItemGenres: async (id) => await (await fetch(freeAPIBaseGenreURL + id + '/genres')).json(),
    getAnimeItemComments: async (id) => await (await (await fetch(aniFindBackendURL + '/comments' + `/${id}`)).json()),
    postComment: (animeId, comment) => fetch(aniFindBackendURL + '/comments' + `/${animeId}`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(comment)
    }),
}
