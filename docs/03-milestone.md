# **HITO 3:** Conectar a API OpenAI (chat individual)

El objetivo fue almacenar de forma segura nuestra clave de API y lograr que 
nuestra aplicación se conectara de manera efectiva a la API de OpenAI 

## Tareas de este hito

- Manejo de la API KEY en la Aplicación
- Almacenamiento Seguro de la API KEY con Local Storage
- Pruebas para funciones de API Key
- Creación de una vista para interactuar con cada elementos del conjunto de datos
- Integración con Open AI

### Manejo de la API KEY en la Aplicación

El manejo de las API KEYs es crucial para mantener la seguridad.
Con el fin de no incluir la clave directamente en el código de la aplicación,
creamos un input que permitiera ingresar o pegar la API KEY.
Este input lo ubicamos en un modal.

![Preview apiKey](https://github.com/maralobes/DEV013-dataverse-chat/blob/main/src/images/apiKeymodalreadme.png?raw=true)

### Almacenamiento Seguro de la API KEY con Local Storage

Para garantizar la seguridad y persistencia de la
API KEY, utilizamos Local Storage.

### Pruebas para funciones de API Key

Dentro de la carpeta `test`, creamos un archivo llamado
`apiKey.spec.js`. En este archivo, desarrollamos los
tests correspondientes. 

### Creación de una vista para interactuar con cada elementos del conjunto de datos

Para facilitar la interacción con un elemento específico de nuestro
conjunto de datos, crearemos una nueva vista. Seguimos estos pasos:

1. Ingresamos a la carpeta `views` de nuestro proyecto. Cremoa el archivo `About.js`.

2. Dentro de este archivo, desarrollamos la vista que nos permite chatear
con los elementos del conjunto de datos.

3. Nos aseguramos de que esta vista fuera capaz de recibir un identificador (id)
u otros datos necesarios para mostrar el elemento específico del conjunto
de datos. Para lograr esto utilizamos parámetros, a través de los
search params de URL que el router puede comunicar.

![Preview Detail](./assets/previewDetail.gif)

### Integración con Open AI

Para obtener respuestas de cada elemento y poder interactuar
con él o ella, fue esencial realizar una solicitud HTTP a OpenAI.
En este proceso, nos familiarizamos con los conceptos de promesas
y utilizamos fetch para llevar a cabo la petición.

Organizamos el código asociado a esta tarea dentro de la carpeta `lib`.
En esta carpeta, creamos un archivo llamado `openAIApi.js`,
que contiene una función específica. Esta función recibe un parámetro
que almacena los mensajes. 


[👈Todos los hitos](../README.md#6-hitos)
