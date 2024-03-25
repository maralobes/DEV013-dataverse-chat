import { ApiKeyModal } from "../src/components/ApiKeyModal.js";

import { setApiKey, removeApiKey } from "../src/lib/ApiKey.js";

jest.mock("../src/lib/ApiKey.js");

describe("ApiKeyModal", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("debería mostrar un mensaje de error si se ingresa una clave API incorrecta", () => {
    container.appendChild(ApiKeyModal());

    const input = container.querySelector(".input-apikey");
    const button = container.querySelector(".apiKey-button");

    input.value = "clave_incorrecta";
    button.click();

    const errorMessage = container.querySelector(".api-error");
    expect(errorMessage.textContent).toBe(
      "Incorrect ApiKey. Please, try again"
    );
    expect(setApiKey).not.toHaveBeenCalled();
    expect(removeApiKey).not.toHaveBeenCalled();
  });

  it("debería llamar a setApiKey si se ingresa una clave API válida", () => {
    container.appendChild(ApiKeyModal());

    const input = container.querySelector(".input-apikey");
    const button = container.querySelector(".apiKey-button");

    input.value =
      "clave_valida_de_51_caracteres_123456789012345678901234567890123456789012345678901";
    button.click();

    expect(setApiKey).toHaveBeenCalledWith(
      "clave_valida_de_51_caracteres_123456789012345678901234567890123456789012345678901" );
    expect(removeApiKey).not.toHaveBeenCalled();
  });
});
