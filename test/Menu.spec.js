import { iconHome, iconGrpChat } from "../src/components/Menu";
import { navigateTo } from "../src/router.js";
// import { getApiKey } from "../src/lib/ApiKey.js";

jest.mock("../src/router", () => ({
  navigateTo: jest.fn(),
}));
// jest.mock("../src/lib/ApiKey", () => ({
//   getApiKey: jest.fn(),
// }));

describe("Home button", () => {
  const homeButton = iconHome();
  test("It should be a button and is a function", () => {
    expect(typeof iconHome).toBe("function");
  });
  test("creates a button", () => {
    expect(homeButton.tagName).toBe("BUTTON");
  });
  test("iconHome navigate to Home", () => {
    const mockEvent = new Event("click");
    homeButton.dispatchEvent(mockEvent);
    expect(navigateTo).toHaveBeenCalledWith("/", {});
  });
});

describe("iconGrpChat", () => {
  test("debería crear un elemento div con la clase 'chats'", () => {
    const div = iconGrpChat();
    expect(div.classList.contains("chats")).toBeTruthy();
  });

  test("debería crear un botón con el atributo 'data-testid' igual a 'button-chats'", () => {
    const div = iconGrpChat();
    const button = div.querySelector("button");
    expect(button.getAttribute("data-testid")).toBe("button-chats");
  });
});
