export const About = () => {
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `        
      <h2>About</h2>
      <p>This is the About page. Learn more about architectonics works around the world.</p>
    `;
    return viewEl;
};