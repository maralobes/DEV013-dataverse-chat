export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const apiKeyStorage = localStorage.getItem("api-key");
  return apiKeyStorage;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem("api-key", key);
};
