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

  //   const textChat = document.createElement("div");
  //   textChat.classList.add("text-chat-grp");

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

  let randomIndex = [];

  sendButton.addEventListener("click", async () => {
    chatMessages.scrollTop =
      chatMessages.scrollHeight - chatMessages.clientHeight;

    const userInputValue = userInput.value;
    if (!userInput.value) {
      alert("Please, type your message");
    } else {
      const newUserMsg = document.createElement("div");
      newUserMsg.classList.add("user-msg-grp");
      newUserMsg.textContent = userInputValue;
      chatMessages.append(newUserMsg);

      if (randomIndex.length === 0) {
        const index = [];
        for (let i = 0; i < dataset.length; i++) {
          index.push(i);
        }
        index.sort(() => Math.random() - 0.5);
        randomIndex = index.slice(0, 3);
      }

      const randomResponses = [];
      for (const item of randomIndex) {
        const response = await communicateWithOpenAI(
          dataset[item],
          userInputValue
        );
        randomResponses.push(response.choices[0].message.content);
      }
      let responseIndex = 0;
      for (let i = 0; i < 3; i++) {
        const newSystemResponse = document.createElement("p");
        newSystemResponse.classList.add("system-output-grp");

        newSystemResponse.innerHTML = randomResponses[responseIndex];

        console.log(newSystemResponse);
        chatMessages.append(newSystemResponse);

        responseIndex = (responseIndex + 1) % 3;
      }

      userInput.value = "";
    }
  });

  iconHomeContainer.append(iconHome());

  userChat.append(userInput, sendButton);
  //   textChat.append(chatMessages);

  groupChatContainer.append(chatMessages, userChat);

  boxGrpChat.append(groupChatContainer);
  grpChatCont.append(iconHomeContainer, boxGrpChat, Footer());
  return grpChatCont;
};
