/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import { Home } from './views/Home.js';
import { About } from './views/About.js';
import { Error } from './views/Error.js';
import { GroupChat } from './views/GroupChat.js';

// import Example from './views/Example';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/about': About,
  '/error': Error,
  '/groupChat': GroupChat,
};
  
const viewContainer = document.getElementById("root")
// Assign the routes
setRoutes(routes);
setRootEl(viewContainer);
// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", (e) => {
  onURLChange(e);
});
// window.onpopstate = onURLChange(currentTarget.location.pathname);
// window.addEventListener('popstate', (e) => {
//   onURLChange(e.currentTarget.location.pathname);
// });
  
window.onpopstate = onURLChange;

