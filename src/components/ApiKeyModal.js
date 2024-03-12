// import { getApiKey } from "../lib/ApiKey";

// import { setApiKey } from "../lib/ApiKey";

export const ApiKeyModal = () => {
  const apiKeyContainer = document.createElement("div");
  apiKeyContainer.classList.add("apikey-cont");

  const inputApiKey = document.createElement("input");
  inputApiKey.classList.add("input-apikey");
  inputApiKey.setAttribute("type", "hidden");
//   inputApiKey.placeholder("Ingrese su Api Key");
  inputApiKey.value = "el api key que esta en el localstorage ";


  const textInput = document.createElement("p");
  textInput.classList.add("text-apikey");
  textInput.innerHTML = "Ingrese su Api Key: ";

  const buttonSaveApiKey = document.createElement("button");
  buttonSaveApiKey.setAttribute("data-testid", "button-ApiKey");
  buttonSaveApiKey.innerHTML = "Save";
//   buttonSaveApiKey.addEventListener("click", function(){
//     const catchApiKey = inputApiKey.querySelector('input[class="input-apikey"]').value;
//     const apiKeySave = setApiKey(getApiKey(), catchApiKey);
//     return apiKeySave;
//   });

  apiKeyContainer.append(textInput, inputApiKey, buttonSaveApiKey);
  return apiKeyContainer;
};