
// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiStorage.js";

const getApi = getApiKey();
const url = "https://api.openai.com/v1/chat/completions";

export const communicateWithOpenAI = async (archiWorks, userInputQuestion) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  const answerOption = await fetch(url, {
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
          content: `You are an architectonic work: ${archiWorks}, give short answers`,
        },
        {
          role: "user",
          content: userInputQuestion,
        },
      ],
      max_tokens: 100,
    }),
  });
  //   if (!prompt.value) {

  //     alert("Por favor ingresa tu prompt");

  // } else {
  //     // Enviamos la prompt del usuario y le respondemos
  //     const response = await getCompletion(prompt.value);

  //     // Mostramos la response de la IA en la consola
  //     console.log(response);

  //     // Mostramos la response de la IA en la vista HTML
  //     mensajes.innerHTML = response.choices[0].text;

  // }
  try {

    const data = await answerOption.json();
    console.log(data.choices[0].message.content, "respuesta OpenAI");
    return data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};
