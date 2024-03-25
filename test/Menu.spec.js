import { iconHome } from "../src/components/Menu";

// fdescribe("iconHome", () => {
//   test("it should be a button", () => {
//     const mockContainer = document.createElement("div");
//     // document.body.appendChild(mockContainer);

//     mockContainer.append(iconHome());

//     const divElement = mockContainer.querySelector('div');

//     // Assert that the div exists
//     expect(divElement).toBeDefined();

//     // Assert that the button exists inside the div
//     const buttonElement = divElement.querySelector('button');
//     expect(buttonElement).toBeDefined();

//     // Assert that the button has the correct class
//     expect(buttonElement.classList.contains('tittleButton')).toBe(true);

//     // Assert that the button has the correct text content
//     expect(buttonElement.textContent).toBe('ARCHITOPIA');

//   });
// });

//Test if the button exists.

describe('iconHome', () => {
  test('it should be a button', () => {
    expect(iconHome()).toBeDefined();
  });

  //Then, test if the button has the correct class.

  test('it should have a class tag', () => {
    const iconButton = document.createElement('button');
    iconButton.classList.add('tittleButton');
    iconButton.innerHTML = "ARCHITOPIA";
    expect(iconHome()).toStrictEqual(iconButton);
  });
  // Then, test if iconHome calls navigateTo

  //   test("when an user clicks iconHome, it has to call navigateTo", () => {
  //     const 
  //     const displayNavigateTo =  iconButton.addEventListener("click", () => navigateTo("/", {}));
  //     expect(iconHome()).
  //   })

})