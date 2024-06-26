import { navigateTo } from "../router.js";

export const Error = () => {
  const viewEl = document.createElement("div");
  viewEl.innerHTML = `
      <div class="error-container">
        <div class="image-error">
          <img src="https://github.com/maralobes/DEV013-dataverse-chat/blob/main/src/images/errorimage.jpeg?raw=true" alt="an image of a sad face" class="image">  
        </div>
        <div class="text-error">   
          <p id="error-404"> 404 </p> 
          <p id="text-404"> Page not found </p>
          <p id="error-description"> "Uh-oh! It seems we've wandered off the beaten path. Our team is exploring new routes to bring wonders back to your screen. Hang tight, the journey continues shortly!".</p>
        </div>
        <div class="error-button-home">
          <button id="error-btn"> Home </button>
        </div>
      </div>
      `;
  const buttonHome = viewEl.querySelector("#error-btn");
  buttonHome.addEventListener("click", () => navigateTo("/", {}));

  return viewEl;
};