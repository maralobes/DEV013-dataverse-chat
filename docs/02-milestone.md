# **HITO 2:** Visualización de datos

Dividimos el código en funciones pequeñas para
facilitar su reutilización en proyectos distintos.
El objetivo de este hito era que Dataverse
funcionara al 100 % dentro de nuestra SPA,
incluyendo las funciones de filtrar,
ordenar y calcular.

## Tareas de este hito

- Migración del set de datos de Dataverse
- Reutilización de Funciones de Dataverse
- Configuración de pruebas de funciones migradas
- Visualizar el set de Datos

### Migración del set de datos de Dataverse

Creamos una carpeta llamada `data` dentro de `src`.
En dicha carpeta, creamos un archivo `dataset.js` y
copiamos nuestro set de datos de en ese archivo.

### Reutilización de Funciones de Dataverse

Reutilizamos las funciones de filtrar, ordenar y
calcular de nuestro proyecto anterior en este nuevo proyecto.
Para ello, creamos un nuevo archivo en la siguiente ruta:
`src/lib/dataFunctions.js` y copiamos las funciones mencionadas
en ese archivo.

### Configuración de pruebas de funciones migradas

Para continuar con las migraciones, fue necesario crear una
carpeta `test` en la raíz del proyecto. Dentro de la carpeta `test`, 
creamos un archivo `dataFunctions.spec.js`. En este archivo, 
copiamos nuestros tests de Dataverse y ajustamos las importaciones 
para que funcionaran correctamente.

### Visualizar el set de Datos

Una vez que las funciones se encuentraban en `dataFunctions.js`
junto con sus respectivas pruebas,
avanzamos con la visualización del conjunto de datos.
El objetivo era lograr ver el conjunto de datos de manera similar a Dataverse, pero dentro de la SPA.

Para lograrlo, modificamos el archivo `Home.js` ubicado en la carpeta `views`.
Este archivo solo contiene el código necesario para visualizar el conjunto de datos. 

[👈Todos los hitos](../README.md#6-hitos)
