import { iconHome } from "../src/components/Menu.js";
import { navigateTo } from "../src/router.js";

jest.mock("../src/router.js");
//Test if the button exists.

describe('iconHome', () => {
  test('it should be a button', () => {
    expect(iconHome()).toBeDefined();
  });

  //Then, test if the button has the correct class.

  test('it should have a class tag', () => {
    // const iconButton = document.createElement('button');
    // iconButton.classList.add('tittleButton');
    // iconButton.innerHTML = "ARCHITOPIA";
    const iconButton = iconHome();
    expect(iconButton.tagName).toBe('BUTTON')
    expect(iconButton.classList.contains('tittleButton')).toBe(true);
  });

  // Then, test if iconHome calls navigateTo when a click happens

  test("when an user clicks iconHome, it has to call navigateTo", () => {
    //Here, it has to mock navigateTo function

    navigateTo.mockImplementation(() => {});
    
    //Renderiza button Home & have access to the button
    //     const iconButton =  iconHome();
    //     const selectedIconHome = iconButton.querySelector('.tittleButton');
    
    //     //Simulate a click
    // //     selectedIconHome.click();
    
    expect(navigateTo()).toHaveBeenCalledWith('/', {});
  });

})