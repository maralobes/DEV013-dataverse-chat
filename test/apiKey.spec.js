import { setApiKey, getApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    const mockApikey = "xnke89Cp";
    localStorage.setItem("api-key", mockApikey);
    expect(getApiKey()).toEqual(mockApikey);
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    const mockApikey = "xnke89Cp";
    setApiKey(mockApikey);
    const setApiTest = localStorage.getItem("api-key")
    expect(setApiTest).toEqual(mockApikey);
  });
});
