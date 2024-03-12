import { getApiKey } from "../lib/ApiKey";

export const ApiKeyModal = () => {
  const apiKeyContainer = document.createElement("div");
  apiKeyContainer.classList.add("apikey-cont");

  const inputApiKey = document.createElement("input");
  inputApiKey.classList.add("input-apikey");
  inputApiKey.value = "el api key que esta en el localstorage "
  // inputApiKey.placeholder.add("Ingrese su Api Key");

  const textInput = document.createElement("p");
  textInput.classList.add("text-apikey");
  textInput.innerHTML = "Ingrese su Api Key: "

  const buttonSaveApiKey = document.createElement("button");
  buttonSaveApiKey.setAttribute("data-testid", "button-ApiKey");
  buttonSaveApiKey.innerHTML = "Save";
  buttonSaveApiKey.addEventListener("click", getApiKey()){
    
  };

  apiKeyContainer.append(textInput, inputApiKey, buttonSaveApiKey);
  return apiKeyContainer;
};