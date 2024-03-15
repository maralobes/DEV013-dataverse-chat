// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKey.js";

const getApi = getApiKey();
const url = "https://api.openai.com/v1/chat/completions";

export const communicateWithOpenAI = async (archiWorks, userInputQuestion) => {
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
          content: `You are an architect and you have the following JSON with all the information you know `,
        },
        {
          role: "system",
          content: `${JSON.stringify(archiWorks)}`,
        },
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
