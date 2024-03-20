import { communicateWithOpenAI } from "../lib/openAIApi.js";
import dataset from "../data/dataset.js";
import { iconHome } from "../components/Menu.js";
import { Footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
console.log(dataset);
export const GroupChat = () => {
  const renderItems = (dataset) => {
    const ulList = document.createElement("ul");
    ulList.classList.add("fList-grp");

    dataset.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("cList-grp");
      listItem.setAttribute("itemscope", "");
      listItem.setAttribute("itemtype", "architectonics-works");

      const archiWork = document.createElement("dl");
      archiWork.classList.add("dl-grp");
      archiWork.setAttribute("itemscope", "");
      archiWork.setAttribute("itemtype", "items");

      const nameText = document.createElement("div");
      //   nameText.setAttribute("itemprop", "name");
      nameText.classList.add("nameArchiGroup");
      nameText.innerHTML = item.name;

      const imageWork = document.createElement("img");
      imageWork.setAttribute("src", item.imageUrl);
      imageWork.setAttribute("alt", item.name);
      imageWork.innerHTML = item.imageUrl;
      imageWork.classList.add("imageGrpChat");

      ulList.appendChild(listItem);
      listItem.appendChild(archiWork);
      listItem.addEventListener('click', () => navigateTo ("/about", { id: item.id }));
       
      archiWork.append(imageWork, nameText, nameText);

      
    });
    console.log(ulList);
    return ulList;
  };

  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");

  const grpChatCont = document.createElement("div");
  grpChatCont.classList.add("grpChatCont");

  const boxGrpChat = document.createElement("div");
  boxGrpChat.classList.add("boxGrpChat");

  const titleChat = document.createElement("div");
  titleChat.classList.add("titleChat");

  const titleGrpChat = document.createElement("div");
  titleGrpChat.classList.add("titleGrpChat");
  titleGrpChat.innerHTML = "Group Chat";

  const titleExp = document.createElement("div");
  titleExp.classList.add("titleExp");
  titleExp.innerHTML =
    "Exploring the wonders of our planet, one place at a time";

  const boxIntGrpChat = document.createElement("div");
  boxIntGrpChat.classList.add("boxIntGrpChat");

  const grpChat = document.createElement("div");
  grpChat.classList.add("grp-chat");

  const textChat = document.createElement("div");
  textChat.classList.add("text-chat-grp");

  const chatMessages = document.createElement("div");
  chatMessages.classList.add("chat-messages-grp");

  const systemResponse = document.createElement("p");
  systemResponse.classList.add("system-output-grp");

  const userChat = document.createElement("div");
  userChat.classList.add("user-chat-grp");

  const userInput = document.createElement("input");
  userInput.classList.add("input-request-grp");

  const sendButton = document.createElement("button");
  sendButton.classList.add("send-button-grp");
  //   sendButton.innerHTML = "Send";

  let randomIndex = [];

  sendButton.addEventListener("click", async () => {
    chatMessages.scrollTop =
      chatMessages.scrollHeight - chatMessages.clientHeight;

    const userInputValue = userInput.value;
    if (!userInput.value) {
      alert("Please, type your message");
    } else {
      const userMsgCont = document.createElement("div");
      userMsgCont.classList.add("user-msg-grpCont");
      const userMsg = document.createElement("p");
      userMsg.classList.add("user-msg-grp");
      userMsg.textContent = userInputValue;
      chatMessages.append(userMsgCont);
      userMsgCont.append(userMsg);

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
        const sysRespCont = document.createElement("div");
        sysRespCont.classList.add("sys-resp-grpCont");
        const systemResponse = document.createElement("p");
        systemResponse.classList.add("system-output-grp");

        systemResponse.innerHTML = randomResponses[responseIndex];

        console.log(systemResponse);
        chatMessages.append(sysRespCont);
        sysRespCont.append(systemResponse);

        responseIndex = (responseIndex + 1) % 3;
      }

      userInput.value = "";
    }
  });

  iconHomeContainer.append(iconHome());

  userChat.append(userInput, sendButton);
  textChat.append(chatMessages);
  grpChat.append(textChat, userChat);
  titleChat.append(titleGrpChat, titleExp);
  boxIntGrpChat.append(renderItems(dataset), grpChat);
  boxGrpChat.append(titleChat, boxIntGrpChat);

  grpChatCont.append(iconHomeContainer, boxGrpChat, Footer());
  return grpChatCont;
};
