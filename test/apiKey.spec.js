import { setApiKey, getApiKey } from "../src/lib/apiKey.js";

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    expect(getApiKey()).toBe('apikey');
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    expect(setApiKey(key)).toBe('apikey', key);
  });
});