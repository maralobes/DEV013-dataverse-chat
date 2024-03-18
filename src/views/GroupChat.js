// import { communicateWithOpenAI } from "../lib/openAIApi.js";
// import dataset from "../data/dataset.js";
import { iconHome } from "../components/Menu.js";
import { Footer } from "../components/footer.js";
export const GroupChat = () => {
  // const infoItem = dataset.find((item) => item.id === id);
  const grpChatCont = document.createElement("div");
  grpChatCont.classList.add("grpChatCont");

  const boxGrpChat = document.createElement("div");
  boxGrpChat.classList.add("boxGrpChat");

  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");

  const groupChatContainer = document.createElement("div");
  groupChatContainer.classList.add("grp-chat");
  const textChat = document.createElement("div");
  textChat.classList.add("text-chat");
  const systemResponse = document.createElement("p");
  systemResponse.classList.add("system-output");
  const userChat = document.createElement("div");
  userChat.classList.add("user-chat");
  const userInput = document.createElement("input");
  userInput.classList.add("input-request");
  // userInput.value = '';
  const sendButton = document.createElement("button");
  sendButton.classList.add("send-button");
  sendButton.innerHTML = "Send";
  // const message = document.querySelector('.input-request');
  // sendButton.addEventListener('click', async () => {
  //     if(!userInput.value){
  //         alert("Please, type your message");
  //     }else {
  //         // const groupResponse = (data) => {
  //         // }
  //         const response = await communicateWithOpenAI(dataset, userInput.value);
  //         console.log(response)
  //         systemResponse.innerHTML = response.choices[0].message.content;
  //     }
  // })
  iconHomeContainer.append(iconHome());
  userChat.append(userInput, sendButton);
  textChat.append(systemResponse, userChat);
  groupChatContainer.append(textChat);
  boxGrpChat.append(groupChatContainer);
  grpChatCont.append(iconHomeContainer, boxGrpChat, Footer());
  return grpChatCont;
};
