import { setApiKey } from "../lib/apiKey.js";

export const ApiKeyModal = () => {
  const apiKeyContainer = document.createElement("div");
  apiKeyContainer.classList.add("apikey-cont");

  const inputApiKey = document.createElement("input");
  inputApiKey.classList.add("input-apikey");
  inputApiKey.setAttribute("type", "text");
  inputApiKey.setAttribute("placeholder", "Ingrese su Api Key");
  inputApiKey.value = "";

  const buttonSaveApiKey = document.createElement("button");
  buttonSaveApiKey.setAttribute("data-testid", "button-apiKey");
  buttonSaveApiKey.classList.add("apiKey-button")
  buttonSaveApiKey.innerHTML = "Save";
  buttonSaveApiKey.addEventListener("click", function(){
    const myinput = document.querySelector('input[class="input-apikey"]');
    setApiKey(myinput.value);
  });

  apiKeyContainer.append(inputApiKey, buttonSaveApiKey);
  return apiKeyContainer;
};