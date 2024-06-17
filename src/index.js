import {Router} from './router.js'

const router = new Router()
router.add('/',"/pages/home.html")
router.add('/universe',"/pages/universe.html")
router.add('/explore',"/pages/explore.html")
router.add(404, "/pages/404.html");



router.handle();

window.onpopstate = () => router.handle(); //navega nas rotas quando o usuario volta na pagina no navegador
window.route = () => router.route();
