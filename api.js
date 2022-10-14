const freeAPIBaseURL = 'https://kitsu.io/api/edge/anime?filter[text]=';

export default {
    getAnimes: async (name) => await ((await fetch('./mock_data.json')).json()),//await (await fetch(freeAPIBaseURL + name)).json(),
}