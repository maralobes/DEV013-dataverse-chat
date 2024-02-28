import { Home } from './views/Home.js';
import { Error } from './views/Error.js';
import { About } from './views/About.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/about': About,
  '/error': Error,
  // ...
};

const viewContainer = document.getElementById("root")
// Assign the routes
setRoutes(routes);
setRootEl(viewContainer);

// Set the root element where views will be rendered
// Handle initial URL load
window.addEventListener("DOMContentLoaded", (event) => {
//   setRootEl(/* root element */);
  setRootEl(viewContainer);
  // invoke onURLChange 
  onURLChange(event.target.location.pathname);
});

// // Handle URL changes
// window.addEventListener('popstate', ({objetivo}) => {
//     onURLChange(pathname);
//  });