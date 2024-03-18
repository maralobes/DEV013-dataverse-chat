import { iconHome } from "../components/Menu";
export const GroupChat = () => {
  const grpChatcontainer = document.createElement("div");
  grpChatcontainer
  const iconHomeContainer = document.createElement("div");
  iconHomeContainer.classList.add("iconHomeContent");
  const viewEl = document.createElement("div");
  viewEl.classList.add("windowGrpChat");
  viewEl.innerHTML = `        
        <p>GroupChat.</p>
      `;
  iconHomeContainer.append(iconHome);

  return viewEl;
};
