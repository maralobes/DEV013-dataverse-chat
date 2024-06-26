/* eslint-disable no-console */
//el objeto que mapea las rutas de nuestro sitio
let ROUTES = {};
//la referencia al elemnto html en donde vamos a dibujar el contenido de nuestros componentes
let rootEl = "";

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof routes === "object") {
    if (routes["/error"]) {
      ROUTES = routes;
    }
  }
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  // convert queryString to URLSearchParams
  const newParamsUrl = new URLSearchParams(queryString.search);
  // convert URLSearchParams to an object
  const objectParamsUrl = Object.fromEntries(newParamsUrl.entries());
  console.log('objectParamsUrl', objectParamsUrl)
  return objectParamsUrl; 
}

const renderView = (pathname, props) => {
  console.log(pathname);
  // clear the root element
  const root = rootEl;
  root.innerHTML = "";
  console.log(root);
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    console.log(template);
    root.append(template);
  } else {
    root.append(ROUTES["/error"]());
  }
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props) => {
  //   // update window history with pushState
  const searchParams = new URLSearchParams(props);
  console.log(props);
  const URLvisited = window.location.origin + pathname + '?' + searchParams;
  window.history.pushState(props, "", URLvisited);
  renderView(pathname, props);
}

export const onURLChange = ({ currentTarget: { location } }) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  console.log(location.pathname, queryStringToObject(location));
  renderView(location.pathname, queryStringToObject(location));
};
