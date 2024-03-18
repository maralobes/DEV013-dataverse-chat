import { iconHome } from "../components/Menu.js";
// import data from "../data/dataset.js";
import { Footer } from "../components/footer.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import dataset from "../data/dataset.js";

export const About = ({ id }) => {
  const archiWorks = dataset.find((item) => item.id === id);
  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("aboutInfo");
  const dataAbout = document.createElement("div");
  dataAbout.classList.add("dataAbout");
  const listItem = document.createElement("li");
  listItem.classList.add("infoAbout");
  listItem.setAttribute("itemscope", "");
  listItem.setAttribute("itemtype", "architectonics-works");
  listItem.innerHTML = `
      <dl itemscope="" itemtype="items">
        <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${archiWorks.id}</dd>
        <img src=${archiWorks.imageUrl} alt=${archiWorks.name} id="imageAbout">
        <div class="contentAbout">
          <dt>Nombre:</dt><dd id="nameAbout" itemprop="name">${archiWorks.name}</dd>
          <dt>Description:</dt><dd itemprop="description">${archiWorks.description}</dd>
          <dl itemscope="" itemtype="facts">
            <dt>Location:</dt><dd id="locationAbout" itemprop="location">${archiWorks.facts.location}</dd>
          </dl>
        </div>
      </dl>
`;
  // listItem.innerHTML = `
  // <dl itemscope="" itemtype="items">
  //   <dt style="display: none;">id:</dt><dd style="display: none;" itemprop="id">${archiWorks.id}</dd>
  //   <img src=${archiWorks.imageUrl} alt=${archiWorks.name} id="imageAbout">
  //   <div class="contentAbout">
  //     <dt>Nombre:</dt><dd id="nameAbout" itemprop="name">${archiWorks.name}</dd>
  //     <dt>Short description:</dt><dd itemprop="shortDescription">${archiWorks.shortDescription}</dd>
  //     <dt>Description:</dt><dd itemprop="description">${archiWorks.description}</dd>
  //     <dl itemscope="" itemtype="facts">
  //       <dt>Year of built:</dt><dd itemprop="yearOfBuilt">${archiWorks.facts.yearOfBuilt}</dd>
  //       <dt>Style:</dt><dd itemprop="style">${archiWorks.facts.style}</dd>
  //       <dt>Location:</dt><dd id="locationAbout" itemprop="location">${archiWorks.facts.location}</dd>
  //       <dt>Constructor:</dt><dd itemprop="constructor">${archiWorks.facts.constructor}</dd>
  //       <dt>Annual visitors:</dt><dd itemprop="annualVisitors">${archiWorks.facts.annualVisitors}</dd>
  //       <dt>Wonder of the World:</dt><dd itemprop="IsWonderOfTheWorld">${archiWorks.facts.isWonderOfTheWorld}</dd>
  //     </dl>
  //   </div>
  // </dl>
  // `;

  const individualChatContainer = document.createElement("div");
  individualChatContainer.classList.add("ind-chat");

  const textChat = document.createElement("div");
  textChat.classList.add("text-chat");

  const imageCont = document.createElement("img");
  imageCont.setAttribute("src", archiWorks.imageUrl);
  imageCont.setAttribute("alt", archiWorks.name);
  imageCont.innerHTML = archiWorks.imageUrl;
  imageCont.setAttribute("id", "imageChat");

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

  sendButton.addEventListener("click", async () => {
    if (!userInput.value) {
      alert("Please, type your message");
    } else {
      const response = await communicateWithOpenAI(dataset, userInput.value);
      console.log(response);
      systemResponse.innerHTML = response.choices[0].message.content;
    }
  });

  userChat.append(userInput, sendButton);
  textChat.append(imageCont, systemResponse, userChat);
  individualChatContainer.append(textChat);

  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");
  iconHomeContainer.append(iconHome());
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
