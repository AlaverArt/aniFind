import animeView from "./animeView.js";
import { homeView } from "./homeView.js";

export default {
    paths: [
        {path: 'home', component: homeView},
        {path: 'anime-view', component: animeView}
    ],

    render() {
        this.paths.find(item => item.path === location.hash.split('#')[1].split('/')[0])?.component.render();
    }
}