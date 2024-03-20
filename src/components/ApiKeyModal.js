import { setApiKey, removeApiKey } from "../lib/ApiKey.js";

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
  buttonSaveApiKey.classList.add("apiKey-button");
  buttonSaveApiKey.innerHTML = "Save";

  const btnApiKey = () => {
    const myinput = document.querySelector(".input-apikey");
    const apiKeyValue = myinput.value;
    if (buttonSaveApiKey.innerHTML === "Save") {
      setApiKey(apiKeyValue);
      buttonSaveApiKey.innerHTML = "Delete";
    } else {
      removeApiKey(apiKeyValue);
      buttonSaveApiKey.innerHTML = "Save";
      inputApiKey.value = "";
    }
  };
  buttonSaveApiKey.addEventListener("click", btnApiKey);

  apiKeyContainer.append(inputApiKey, buttonSaveApiKey);
  return apiKeyContainer;
};
