export const getApiKey = () => {    
  const storageApiKey = window.localStorage.getItem("apikey");
  return storageApiKey;
};

export const setApiKey = (key) => {   
  // Implementa el código para guardar la API KEY en Local Storage
  const keepApiKey = window.localStorage.setItem("apikey", key);
  return keepApiKey;
};