import { getApiKey, setApiKey } from "../lib/ApiKey.js";

export const ApiKeyModal = () => {
  const apiKeyContainer = document.createElement("div");
  apiKeyContainer.classList.add("apikey-cont");

  const inputApiKey = document.createElement("input");
  inputApiKey.classList.add("input-apikey");
  inputApiKey.setAttribute("type", "text");
  //   inputApiKey.placeholder("Ingrese su Api Key");
  //   inputApiKey.value = "el api key que esta en el localstorage ";


  //   const textInput = document.createElement("p");
  //   textInput.classList.add("text-apikey");
  //   textInput.innerHTML = "Ingrese su Api Key: ";

  const buttonSaveApiKey = document.createElement("button");
  buttonSaveApiKey.setAttribute("data-testid", "button-apiKey");
  buttonSaveApiKey.classList.add("apiKey-button")
  buttonSaveApiKey.innerHTML = "Save";
  buttonSaveApiKey.addEventListener("click", function(){
    const myinput = document.querySelector('input[class="input-apikey"]')
    setApiKey(myinput.value);
  });

  apiKeyContainer.append(inputApiKey, buttonSaveApiKey);
  return apiKeyContainer;
};