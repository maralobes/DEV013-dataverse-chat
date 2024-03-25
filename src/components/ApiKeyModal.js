import { setApiKey, removeApiKey } from "../lib/apiKey.js";

export const ApiKeyModal = () => {
  const apiKeyContainer = document.createElement("div");
  apiKeyContainer.classList.add("apikey-cont");

  const form = document.createElement("form");
  form.classList.add("form-apikey");

  const inputApiKey = document.createElement("input");
  inputApiKey.classList.add("input-apikey");
  inputApiKey.setAttribute("type", "text");
  inputApiKey.setAttribute("placeholder", "Ingrese su Api Key");
  inputApiKey.value = "";

  const buttonSaveApiKey = document.createElement("button");
  buttonSaveApiKey.setAttribute("data-testid", "button-apiKey");
  buttonSaveApiKey.classList.add("apiKey-button");
  buttonSaveApiKey.innerHTML = "Save";

  const btnApiKey = (event) => {
    event.preventDefault();
    const apiKeyValue = inputApiKey.value;
    const apiError = document.querySelector(".api-error");
    if (apiKeyValue.length < 51) {
      if (!apiError) {
        const newApiError = document.createElement("p");
        newApiError.classList.add("api-error");
        newApiError.innerHTML = "Incorrect ApiKey. Please, try again";
        apiKeyContainer.appendChild(newApiError);
      }
      return;
    } else {
      if (apiError) {
        apiError.remove();
      }
      if (buttonSaveApiKey.innerHTML === "Save") {
        setApiKey(apiKeyValue);
        buttonSaveApiKey.innerHTML = "Delete";
        inputApiKey.value = "";
        // apiError.innerHTML = "Save correctly!"
        // console.log(apiError);
        // apiKeyContainer.appendChild(apiError);
      } else {
        removeApiKey(apiKeyValue);
        buttonSaveApiKey.innerHTML = "Save";
        apiError.remove();
      }
    }
  };
  form.addEventListener("submit", btnApiKey);

  form.append(inputApiKey, buttonSaveApiKey);
  apiKeyContainer.appendChild(form);
  return apiKeyContainer;
};
