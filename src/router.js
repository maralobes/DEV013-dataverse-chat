
let ROUTES = {};
//Elemento DOM: Una variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá.
let rootEl = "";

//Una función para establecer el elemento raíz del router.
export const setRootEl = (newRootElementVaue) => {
   rootEl = newRootElementVaue;
}

//Esta función asigna el valor del argumento routes al objeto ROUTES. routes debe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así)
export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof newRoutesValue === "object"){
    if(newRoutesValue['/error']){
        ROUTES = newRoutesValue;
    }
  };
  };

//una función de utilidad para convertir una cadena de search o query string (ejemplo ?name=Noemi&color=blue) en un objeto para acceder fácilmente a los parámetros de consulta. 
const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  Object.fromEntries([...new URLSearchParams(queryString.split('?')[1])]);
  return queryStringToObject; 
}

//Una función que renderiza una vista en el elemento root especificado
const renderView = (pathname, props= {}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const rootClear = rootEl;
  rootClear.innerHTML = '';
  if(ROUTES[pathname]){
    const template = ROUTES[pathname]();
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES['/error']());
  }

} 

//Una función que recibe una ruta, envía un nuevo estado histórico y representa la nueva vista.
export const navigateTo = (pathname, props= {}) => {
  // update window history with pushState
  // render the view with the pathname and props
  const URLVisited = window.location.hostname + pathname;
  history.pushState({}, "", URLVisited);
  renderView(pathname, props);
}

//Una función para manejar cambios de URL con popstate
export const onURLChange = (pathname) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathname);
}