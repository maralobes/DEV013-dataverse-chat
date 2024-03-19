import { communicateWithOpenAI } from "../lib/openAIApi.js";
import dataset from "../data/dataset.js";
import { iconHome } from "../components/Menu.js";
import { Footer } from "../components/footer.js";

export const GroupChat = () => {
  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");

  const grpChatCont = document.createElement("div");
  grpChatCont.classList.add("grpChatCont");

  const boxGrpChat = document.createElement("div");
  boxGrpChat.classList.add("boxGrpChat");

  const groupChatContainer = document.createElement("div");
  groupChatContainer.classList.add("grp-chat");

  const textChat = document.createElement("div");
  textChat.classList.add("text-chat-grp");

  const chatMessages = document.createElement("div");
  chatMessages.classList.add("chat-messages-grp");

  const systemResponse = document.createElement("p");
  systemResponse.classList.add("system-output-grp");

  //   const userMsg = document.createElement("div");
  //   userMsg.classList.add("user-msg-grp");

  const userChat = document.createElement("div");
  userChat.classList.add("user-chat-grp");

  const userInput = document.createElement("input");
  userInput.classList.add("input-request-grp");
  // userInput.value = '';
  const sendButton = document.createElement("button");
  sendButton.classList.add("send-button-grp");
  sendButton.innerHTML = "Send";

  sendButton.addEventListener("click", async () => {
    const userInputValue = userInput.value;
    if (!userInput.value) {
      alert("Please, type your message");
    } else {
      const newUserMsg = document.createElement("div");
      newUserMsg.classList.add("user-msg-grp");
      newUserMsg.textContent = userInputValue;
      chatMessages.append(newUserMsg);
      for (const item of dataset) {
        const response = await communicateWithOpenAI(item, userInput.value);
        const newSystemResponse = document.createElement("p");
        newSystemResponse.classList.add("system-output-grp");
        newSystemResponse.innerHTML = response.choices[0].message.content;
        console.log(newSystemResponse);
        chatMessages.append(newSystemResponse);
      }
      userInput.value = "";
    }
  });

  iconHomeContainer.append(iconHome());

  userChat.append(userInput, sendButton);
  textChat.append(chatMessages, userChat);

  groupChatContainer.append(textChat);

  boxGrpChat.append(groupChatContainer);
  grpChatCont.append(iconHomeContainer, boxGrpChat, Footer());
  return grpChatCont;
};
