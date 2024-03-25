// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKey.js";
export const communicateWithOpenAI = async (archiWorks, userInputQuestion) => {
  const getApi = getApiKey();
  const url = "https://api.openai.com/v1/chat/completions";
  //Aquí es donde debes implementar la petición con fetch o axios
  const response = await fetch(url, {
    //   const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getApi}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an${JSON.stringify(archiWorks)} and you have to give short answers`,
        },
        // {
        //   role: "system",
        //   content: `${JSON.stringify(archiWorks)}`,
        // },
        {
          role: "user",
          content: userInputQuestion,
        },
      ],
      // max_tokens: 10,
    }),
  });
  // console.log(response.choices[0]);
  return await response.json();
};