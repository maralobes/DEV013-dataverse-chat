import { Header } from "../src/components/header.js";

//Testing if an class call "headerContainer" exists

describe('Header', () => {
  test('it should exists a div with a class name "headerContainer"', () =>{
    const header = Header();
    expect(header.tagName).toBe('DIV');
    expect(header.classList.contains('headerContainer')).toBe(true);
  });

  test('it should exists a second div with a class name "iconContainer"', () =>{
    const header = Header();
    const iconContainer = header.querySelector('.iconContainer');
    
    //Verifica que exista el elemento iconContainer
    expect(iconContainer).toBeTruthy();

    //Verifico que tenga la class adecuada
    expect(iconContainer.classList.contains('iconContainer')).toBe(true);
  })

})