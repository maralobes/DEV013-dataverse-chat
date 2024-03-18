export const Error = () => {
  const viewEl = document.createElement("div");
  viewEl.innerHTML = `
      <img src="" alt="" >        
      <p>"Uh-oh! It seems we've wandered off the beaten path. Our team is exploring new routes to bring wonders back to your screen. Hang tight, the journey continues shortly!".</p>
    `;
  return viewEl;
};
