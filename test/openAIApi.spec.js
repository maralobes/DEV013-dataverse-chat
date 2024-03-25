import { communicateWithOpenAI } from "../src/lib/openAIApi";

//Aquí mokeamos la llamada a la apikey con una apikey fake
jest.mock('../src/lib/apikey', () => ({
  getApiKey: jest.fn(() => "api-key")
}));

//Ahora creamos la prueba asincrónica de communicateWithOpenAI

describe('communicateWithOpenAI', () => {
  test('it should communicate with Open AI and give a response', async () => {
    const fakeResponse = {choices: [{message: {content: "Fake response"}}]};

    //Ahora vamos a mokear fetch para que nos dé una respuesta fake

    /* eslint-disable */
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeResponse)
      })
    )
    //Declaramos dos variables para pasarle como argumento a la función asíncrona
    const archiWorks = 'Arquitectonic Work'
    const userInputQuestion = "En qué año lo construyeron?"

    //Llamamos a la función asíncrona
    const response = await communicateWithOpenAI(archiWorks, userInputQuestion);

    //Validar que la apikey se llamó debidamente
    const urlOpenAI = "https://api.openai.com/v1/chat/completions";

    expect(fetch).toHaveBeenCalledWith(urlOpenAI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer api-key"     
       },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an${JSON.stringify(archiWorks)} and you have to give short answers`,
          },
          {
            role: "user",
            content: userInputQuestion,
          },
        ],
      })
    });
    expect(response).toEqual(fakeResponse);
  })
});
