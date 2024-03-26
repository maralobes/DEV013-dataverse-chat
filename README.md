# Dataverse Chat

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Criterios de aceptación mínimos del proyecto](#7-criterios-de-aceptación-mínimos-del-proyecto)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)

***

## 1. Preámbulo

Nuestra era tecnológica nos permite hacer cosas asombrosas,
como chatear con personas al otro lado del mundo, conectarnos
con lo que pasa en diferentes partes del mundo casi sin perdernos
nada. Incluso, nos puede permitir conversar con personas que ya
no existen o, más asombroso aún, con entidades que ni siquiera, 
en nuetra realidad podrían hablar. Y es que la inteligencia artificial
ha abierto una puerta asombrosa para nosotros.

![Preview app](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)

## 2. Resumen del proyecto

En este proyecto convertimos la aplicación desarrollada
en [Dataverse](https://maralobes.github.io/DEV013-dataverse/) 
en una Single Page Application (SPA),
en la que mantuvimos las funcionalidades de visualizar, filtrar, ordenar y
calcular alguna estadística y adicionamos una nueva vista para
consultar información detallada de cada entidad y agregamos
la posibilidad de interactuar con una entidad o todos ellos
a través de un sistema de chat impulsado por la
[API de OpenAI](https://openai.com/product).

### Los objetivos generales de este proyecto fueron los siguientes

* Desarrollamos una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicamos los conceptos de responsividad en el desarrollo de las vistas
* Implementamos un router para la navegación entre las diferentes
vistas de la aplicación
* Integramos una API externa
* Entendimos la asincronía en JavaScript
* Creamos una suite de pruebas unitarias para testear código asíncrono

## 3. Consideraciones generales

* Este proyecto se resolvió en duplas.

* El rango de tiempo para completar el proyecto fue de 6 Sprints.

* La lógica del proyecto se implementó completamente en JavaScript
  (ES6+), HTML y CSS. Para este proyecto **no utilizamos** 
  _frameworks_ o librerías de CSS y JS.

* Reutilizamos cierta parte del código del proyecto Dataverse, sobre todo el dataset.
  Además refactorizamos el código para que fuera más modular y reutilizable
  mediante la implementación de nuevas funciones para lograr las funcionalidades requeridas
  en este proyecto.

* La interfaz se desplegó usando [Netlify](https://stalwart-griffin-f69e88.netlify.app/).


## 4. Funcionalidades

Como entregable final tenemos una Single Page Application (SPA) que permite,
además de **visualizar la data, filtrarla, ordenarla y calcular alguna
estadística**, acceder a una página de detalle de cada entidad 
y poder _interactuar_ con las entidades del set de data que utilizamos anteriormente.

Específicamente, las funcionalidades de esta aplicación son las siguientes:

* La aplicación es _responsive_
* La aplicación es una SPA con múltiples vistas:
  - Implementa un sistema de enrutamiento que permite la navegación
    dentro de la aplicación.
  - Cada vista de la aplicación es cargada dinámicamente
    mediante JavaScript.
  - La URL se actualiza de manera acorde a la vista
    cargada al igual que el `title` del documento (la pestaña del navegador).
  - La aplicación es capaz de cargar la vista correspondiente a
    la URL actual al iniciar la aplicación.
* La aplicación mantiene las funcionalidades de Dataverse: visualizar,
  filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de una entidad, la aplicación muestra en un popup 
  la información detallada sobre esa entidad en particular.
  se
* Al hacer click en una tarjeta de una entidad, la aplicación redirige 
  a una vista **con su propia URL**.
* La aplicación permite a la usuaria configurar la API Key para
  interactuar con la API de Open AI.
* Usando la API de Open AI, la aplicación permite al usuario
  interactuar con una entidad a través de un chat.
* La aplicación permite a la usuaria interactuar de manera simultánea
  con **todos** los personajes/entidades a través de un chat:
  - Esta funcionalidad debe cargarse en la URL `/GroupChat`
  - La usuaria puede ingresar su pregunta o mensaje para todos los
    personajes/entidades en un cuadro de texto y enviarlo con un botón
  - El mensaje de la usuaria es ajustado para cada entidad,
    con el objetivo que este genere una respuesta basada en su personalidad
    y conocimiento.
  - Las respuestas de todos los personajes se muestran de acuerdo al orden
    respuesta.
  - Se indica visualmente cuando uno o varias entidades estén
    generando una respuesta al mensaje enviado.
* La aplicación informa a la usuaria los errores que puedan surgir al
  interactuar con la API, como por ejemplo alcanzar la cuota de tokens por
  minuto o cualquier otro error relacionado con la API. Debería
  proporcionarse una descripción clara de la causa del problema y posibles
  soluciones.


## 5. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks.

El _boilerplate_ del proyecto es la siguiente:

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

## 6. Hitos

Para resolver un problema,
es importante comprenderlo en profundidad.
Una forma de hacerlo es descomponerlo en problemas más pequeños.
Esto nos ayudará a identificar las causas del problema y
a desarrollar soluciones más efectivas.

Para este proyecto, trabajamos por hitos, pues el fin era
enfocarnos en un problema a la vez y hacer un seguimiento del progreso.
A continuación, presentamos un cronograma de hitos con el que
organizamos nuestro trabajo.

* [Hito 1](./docs/01-milestone.md)
* [Hito 2](./docs/02-milestone.md)
* [Hito 3](./docs/03-milestone.md)
* [Hito 4](./docs/04-milestone.md)
* [Hito 5](./docs/05-milestone.md)

## 7. Criterios de aceptación mínimos del proyecto

Además de las funcionalidades que definimos en la sección de
[Funcionalidades](#4-funcionalidades), este proyecto cumple con los
siguientes requisitos:

### Definición del producto

Documentamos brevemente el trabajo de cómo fue nuestro proceso de diseño 
y cómo creemos que el producto resuelve el problema (o problemas) que tiene nuestra usuaria.

### Historias de usuaria

Una vez que entendimos las necesidades de tus usuarias, escribimos las historias
de usuaria que representan todo lo que la usuaria necesita hacer/ver. 
Estas **Historias de Usuaria** fueron el resultado de nuestro proceso de 
investigación o _research_ de tus usuarias.

A partir de esta historias de usuaria planificamos nuestros sprints. Para ello,
dividimos cada historia en tareas.

Las historias de usuario fueron las siguientes:


### Diseño de la Interfaz de Usuaria

#### Prototipo de baja fidelidad

Durante nuestro trabajo teramos bocetos (_sketches_) de nuestra
solución usando papel y lápiz. Este fue nuestro [propotipo de baja fidelidad] ()


#### Prototipo de alta fidelidad

Posteriormente, diseñamos la Interfaz de Usuaria. Para eso, utilizamos Figma.

Este diseño representa el _ideal_ de nuestra solución. Además, nuestro
diseño trata de seguir los fundamentos de _visual design_.

### Testeos de usabilidad

Realizamos _tests_ de usabilidad con distintas usuarias,
y con base en los resultados, iteramos los diseños. 

Gracias al testeo, hubo cambios en la posición de ciertos botones que modificamos
debido a que, como la aplicación debía ser responsive, tenían que estar
ubicados según los puntos de calor. 

### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

Luego del diseño de la interfaz de usuaria, trabajamos en su implementación.

### Pruebas unitarias

Escribimos pruebas unitarias para los siguientes archivos:

Para ello, usamos el framework [Jest](https://jestjs.io/) para ejecutar las pruebas unitarias.

Las _pruebas unitarias_ cubren aproximadamente el 70 % de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/dataFunctions.js` que contiene nuestras funciones.

## 8. Objetivos de aprendizaje


Los objetivos de aprendizaje que llegamos a entender y aplicar en tu proyecto fueron los siguientes:

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

- [ ] **Uso de flexbox en CSS**

- [ ] **Uso de CSS Grid Layout**

### Web APIs

- [ ] **Ruteado (History API, evento hashchange, window.location)**

- [ ] **Browser storage (localStorage, sessionStorage)**

- [ ] **Fetch API**


#### DOM (Document Object Model)

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Funciones (params, args, return)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

#### Asincronía

- [ ] **Callbacks**

- [ ] **Promesas**


#### Tipos de datos

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

- [ ] **Objetos (key, value)**

#### Módulos

- [ ] **Módulos de ECMAScript (ES Modules)**

#### Testing en Javascript

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Pruebas asíncronas**

- [ ] **Uso de mocks y espías**

### HTTP

- [ ] **Cabeceras (headers)**

- [ ] **Consulta o petición (request) y respuesta (response).**

- [ ] **Códigos de status de HTTP**

### AI Prompting

- [ ] **Priming Chatbots**

- [ ] **OpenAI API**

### Control de Versiones (Git y GitHub)

#### Git

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**


#### Herramientas utilizadas

* Jest
* Netlify
* Git
* GitHub
* Node.js