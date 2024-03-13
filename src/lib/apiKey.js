export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const apiKeyStorage = window.localStorage.getItem("api-key");
  return apiKeyStorage;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  const apiKeySave = localStorage.setItem("api-key", key);
};
