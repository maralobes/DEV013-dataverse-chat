import {setApiKey, getApiKey } from "../src/lib/apiKey.js";

describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    const mockApiKey = 'xOpn54aRpgd07h6';
    localStorage.setItem('api-key', mockApiKey);
    expect(getApiKey()).toEqual(mockApiKey);
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const mockApiKey = 'xOpn54aRpgd07h6';
    setApiKey(mockApiKey);
    expect(localStorage.getItem('api-key')).toEqual(mockApiKey);
  });
});
