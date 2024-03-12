export const ApiKeyModal = () => {
  const apiKeyContainer = document.createElement("div");
  apiKeyContainer.classList.add("apikey-cont");

  const inputApiKey = document.createElement("input");
  inputApiKey.classList.add("input-apikey");
  inputApiKey.value = "el api key que esta en el localstorage ";
  // inputApiKey.placeholder.add("Ingrese su Api Key");

  const textInput = document.createElement("p");
  textInput.classList.add("text-apikey");
  textInput.innerHTML = "Ingrese su Api Key: ";

  const buttonSaveApiKey = document.createElement("button");
  buttonSaveApiKey.setAttribute("data-testid", "button-ApiKey");
  buttonSaveApiKey.innerHTML = "Save";
  // Aquí llamamos a la función que guarda la api key? setApiKey()
  // buttonSaveApiKey.addEventListener("click", setApiKey()){
  // };

  apiKeyContainer.append(textInput, inputApiKey, buttonSaveApiKey);
  return apiKeyContainer;
};
