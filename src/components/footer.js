export const Footer = () => {

  const footer = document.createElement("footer");
  footer.classList.add("footerContainer");
  footer.innerHTML = `
<p>© 2024 Architopia. All rights reserved</p>`;
  return footer;
};

