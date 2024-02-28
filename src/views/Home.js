import { Header }
export const Home = () => {
  const viewElement = document.createElement('div');
  viewElement.innerHTML = "Welcome to Home Page";
  return viewElement;
}