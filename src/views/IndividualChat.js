import { communicateWithOpenAI } from "../lib/openAIApi.js";
import dataset from "../data/dataset.js";

export const IndividualChat = () => {
const individualChatContainer = document.createElement('div');
individualChatContainer.classList.add('ind-chat');
const textChat = document.createElement('div');
textChat.classList.add('text-chat');
const systemResponse = document.createElement('p');
systemResponse.classList.add('system-output');
const userChat = document.createElement('div');
userChat.classList.add('user-chat');
const userInput = document.createElement('input');
userInput.classList.add('input-request');
// userInput.value = '';
const sendButton = document.createElement('button');
sendButton.classList.add('send-button');
sendButton.innerHTML = "Send";

// const message = document.querySelector('.input-request');

sendButton.addEventListener('click', async () => {
    if(!userInput.value){
        alert("Please, type your message");

    }else {
        const response = await communicateWithOpenAI(dataset, userInput.value);
        console.log(response)
        systemResponse.innerHTML = response.choices[0].message.content;
    }
})

userChat.append(userInput, sendButton);
textChat.append(systemResponse, userChat);
individualChatContainer.append(textChat);

return individualChatContainer;
}