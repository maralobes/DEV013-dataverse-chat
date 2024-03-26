# **HITO 4:** Conectar a API OpenAI (chat grupal)

El objetivo de este hito fue permitir a las usuarias interactuar con
todos los personajes a través de un chat grupal.

## Tareas de este hito

- Creación de una vista para interactuar con todos los elementos del conjunto de datos
- Consumo de la integración con Open AI
- Implementación de tests

### Creación de una vista para interactuar con todos los elementos del conjunto de datos

1. Navegamos hacia la carpeta `views` en nuestro proyecto y dentro de
esta carpeta creamos un componente para la vista del chat grupal,
llamada `ChatGroup.js`,
que muestra un chat grupal con todos los personajes.
Este componente permite a las usuarias enviar
mensajes a todos los personajes o elementos del dataset
y recibir respuestas.

2. La vista puede obtener los datos necesarios (id) para
mostrar los elementos del conjunto de datos. Para ello, pasamos
los datos como parámetros.

### Consumo de la integración con Open AI

Obtuvimos las respuestas de todos los elementos en la data utilizando
la función designada para consumir la API de OpenAI,
llamada `communicateWithOpenAI`. Esto permitió a las usuarias interactuar 
con todos los personajes a través de un chat grupal.

Para lograr este objetivo, tomamos como guia los siguientes pasos:

1. Obtuvimos la lista de elementos en la data.

2. Para cada elemento en la lista:

   + Enviamos un mensaje a la función communicateWithOpenAI.
   + Guardamos la respuesta de la función communicateWithOpenAI.
   + Mostramos la respuesta de la función communicateWithOpenAI.

![Preview Chat Grupal](./assets/previewGrupalChat.gif)

### Implementación de tests

Para verificar el funcionamiento de las funciones creadas, creamos un archivo
`openAIApi.spec.js` en la carpeta `test`.


[👈Todos los hitos](../README.md#6-hitos)
