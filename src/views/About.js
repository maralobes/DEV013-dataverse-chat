import { iconHome } from "../components/Menu.js";
import { Footer } from "../components/footer.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import dataset from "../data/dataset.js";

export const About = ({ id }) => {
  const archiWorks = dataset.find((item) => item.id === id);
  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("aboutInfo");
  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");
  const dataAbout = document.createElement("div");
  dataAbout.classList.add("dataAbout");
  const listItem = document.createElement("li");
  listItem.classList.add("infoAbout");
  listItem.setAttribute("itemscope", "");
  listItem.setAttribute("itemtype", "architectonics-works");
  listItem.innerHTML = `
      <dl class="headerChat" itemscope="" itemtype="items">
        <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${archiWorks.id}</dd>
        <img src=${archiWorks.imageUrl} alt=${archiWorks.name} id="imageAbout">
        <div class="contentAbout">
          <dt></dt><dd id="nameAbout" itemprop="name">${archiWorks.name}</dd>
          <dt></dt><dd itemprop="shortDescription">${archiWorks.shortDescription}</dd>
          <dl itemscope="" itemtype="facts" style="display: none;">
            <dt style="display: none;"></dt><dd id="locationAbout" itemprop="location">${archiWorks.facts.location}</dd>
          </dl>
        </div>
      </dl>
`;

  const individualChatContainer = document.createElement("div");
  individualChatContainer.classList.add("ind-chat");

  const textChat = document.createElement("div");
  textChat.classList.add("text-chat");

  const imageCont = document.createElement("img");
  imageCont.setAttribute("src", archiWorks.imageUrl);
  imageCont.setAttribute("alt", archiWorks.name);
  imageCont.innerHTML = archiWorks.imageUrl;
  imageCont.setAttribute("id", "imageChat");

  const chatMessages = document.createElement("div");
  chatMessages.classList.add("chat-messages");

  const userChat = document.createElement("div");
  userChat.classList.add("user-chat");

  const userInput = document.createElement("input");
  userInput.classList.add("input-request");
  // userInput.value = '';
  const sendButton = document.createElement("button");
  sendButton.classList.add("send-button");
  sendButton.innerHTML = "Send";

  // const message = document.querySelector('.input-request');

  sendButton.addEventListener("click", async () => {
    chatMessages.scrollTop = chatMessages.scrollHeight - chatMessages.clientHeight;
    if (!userInput.value) {
      alert("Please, type your message");
    } else {
      const response = await communicateWithOpenAI(archiWorks, userInput.value);
      
      const userMsgCont = document.createElement('div');
      userMsgCont.classList.add("user-msg-cont")
      const userMsg = document.createElement('p');
      userMsg.classList.add("user-msg");
      userMsg.textContent = userInput.value;

      const sysRspnCont = document.createElement('div');
      sysRspnCont.classList.add("system-output-cont")
      const systemResponse = document.createElement('p');
      systemResponse.classList.add("system-output");
      systemResponse.innerHTML = response.choices[0].message.content;

      userMsgCont.appendChild(userMsg);
      sysRspnCont.appendChild(systemResponse);
 
      chatMessages.appendChild(userMsgCont);
      chatMessages.appendChild(sysRspnCont);

      userInput.value = "";
    }
  });
  // chatMessages.append(systemResponse, userMsg);
  iconHomeContainer.append(iconHome());
  
  userChat.append(userInput, sendButton);
  textChat.append(imageCont, chatMessages);

  individualChatContainer.append(textChat,userChat);

  dataAbout.append(listItem, individualChatContainer);
  aboutInfo.append(iconHomeContainer, dataAbout, Footer());
  return aboutInfo;
};

// export const IndividualChat = () => {
//   const individualChatContainer = document.createElement("div");
//   individualChatContainer.classList.add("ind-chat");
//   const textChat = document.createElement("div");
//   textChat.classList.add("text-chat");
//   const systemResponse = document.createElement("p");
//   systemResponse.classList.add("system-output");
//   const userChat = document.createElement("div");
//   userChat.classList.add("user-chat");
//   const userInput = document.createElement("input");
//   userInput.classList.add("input-request");
//   // userInput.value = '';
//   const sendButton = document.createElement("button");
//   sendButton.classList.add("send-button");
//   sendButton.innerHTML = "Send";

//   // const message = document.querySelector('.input-request');

//   sendButton.addEventListener("click", async () => {
//     if (!userInput.value) {
//       alert("Please, type your message");
//     } else {
//       const response = await communicateWithOpenAI(dataset, userInput.value);
//       console.log(response);
//       systemResponse.innerHTML = response.choices[0].message.content;
//     }
//   });

//   userChat.append(userInput, sendButton);
//   textChat.append(systemResponse, userChat);
//   individualChatContainer.append(textChat);

//   return individualChatContainer;
// };
