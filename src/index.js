

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import {Home} from './views/Home.js';
import {About} from './views/About.js';
// import Example from './views/Example';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';


// Define your routes and their associated views
const routes = {
    '/': Home,
    '/about': About,
    // '/error': Error,
};
  
const container = document.getElementById("root")
// Assign the routes
setRoutes(routes);
setRootEl(container);
// Set the root element where views will be rendered
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    console.log(event.target.location.pathname);
    onURLChange(event.target.location.pathname);
  });
  window.onpopstate = onURLChange;

  