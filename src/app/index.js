import '../style/reset.css';
import '../style/style.css';
import router from './router.js';

window.addEventListener('hashchange', () => router.render.bind(router)());

document.addEventListener('DOMContentLoaded', () => {
    if(location.hash == '')
        location.hash = "#home";
    else
        router.render.bind(router)();
})