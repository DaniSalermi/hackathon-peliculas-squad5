
<a href="https://ibb.co/tKHgtnj"><img src="https://i.ibb.co/sRgnGcx/Logo.png" alt="Logo" border="0"></a>
 

# Resumen del proyecto.

Esta Aplicación permite a los usuarios poder realizar una comparación a través de dos buscadores de texto, en donde se mostrara entre la información como: año, género y la valoración según [IMDB](https://www.imdb.com/). Destacando la película o serie con mejor puntuación.

Esta aplicación fue creada como una ayuda para quienes pasan horas recorriendo los catálogos, de las actuales plataformas de streaming y VOD, sin saber que ver.

Con la información otorgada por “the winner is”, los usuarios tendrán mayor asertividad al seleccionar un titulo de serie o película, según sus intereses, vistas anteriores y sobre todo recomendaciones de cercanos.

# Organización metodología Ágil.

Para lograr organizarnos utilizamos la metodología ágil, en virtud del tiempo para realizar el proyecto, no utilizamos springs, sin embargo si realizamos reunión diaria de sincronización del equipo *"Daily"*;donde cada miembro del equipo revisó el trabajo que el resto está realizando, dando tareas concretas y feedback constante.

<a href="https://ibb.co/BqkVBsX"><img src="https://i.ibb.co/Fgpbz7S/IMG-20190724-170811244.jpg" alt="IMG-20190724-170811244" border="0"></a>

## Asignación de Roles para Proyecto.

Para la asignación de este ultimo proyecto de Commoncore, nos centramos en dar enfatices a las preferencias de cada una para poder asignar estos roles.
 

**Team UX Designer**

 - Consuelo Leal.
 - Karen Vargas.
 
 **Tareas**
 - [x] Sketch.
 - [x] Prototipo de baja calidad.
 - [x] Desarrollo y ejecución de encuestas a usuarios.
 - [x] Paleta de colores
 - [x] Prototipo de alta fidelidad.
 - [x] Desarrollo y ejecución de Test de Usuarios.
 - [x] Procesar resultados de test.

**Front-End Developer.**
  - Daniela Salermi.

**Tareas**

 - [x] Logica y union de HTML con Javascript.
 - [x] Manejo de Api.
 - [x] Darrollo HTML, CSS y Javascript
 - [x] Utilizacion de bootstrap.


Las tareas generales las organizamos con [Trello](https://trello.com/b/qsO01kEB/hackathon-common-core-squad-5), especificando el tiempo que debe tardar cada una en realizarla,  *"horas persona"*,  y las respectivas etiquetas de nombre y clasificación de tipo de trabajo.

<a href="https://ibb.co/HGRzKp5"><img src="https://i.ibb.co/Jr87cFD/trello.png" alt="trello" border="0"></a>


# Ideación del proyecto.

En un inicio, se realizo una lluvia de ideas basadas en lo que pensamos la [Api](http://www.omdbapi.com/)  nos otorgaba como datos para trabajar, sin embargo, una vez extraída la data, se nos hizo imposible realizar nuestra primera idea que, básicamente, trataba de un buscador de películas ganadoras de premios Oscar, dando la opción de poder filtrar por categorías (mejor actriz, mejor director, mejor película, etc.) …y si! Comenzamos desde cero a formular una nueva aplicación a partir de los datos reales que nos proporcionaba la data.

Posteriormente llegamos a la idea final, entendiendo los datos que teníamos para procesar, comenzamos a definir los usuarios de nuestra aplicación por medio de la realización de una [encuesta](https://forms.gle/cP2pTWojBYsQULhi9) y comenzamos a tirar líneas.


# Encuestas para investigación de Usuarios.

Se realizo una [encuesta](https://forms.gle/UTvW6N8WwHUx1WzM7) a través de Google Forms para indagar en las necesidades y la viabilidad del proyecto que habíamos ideado. Esta se realiza a 50 usuarios de plataformas de streaming, identificándose entre 9 a 43 años.

Se dirigen las siguientes preguntas con el fin de corroborar la importancia de contar con información adicional sobre películas y series, a la que entregan las actuales plataformas de streaming y VOD, asimismo confirmar el liderazgo de Netflix entre las mas utilizadas.

<a href="https://ibb.co/JmthWMk"><img src="https://i.ibb.co/5G47Xfc/encuesta-barras.png" alt="encuesta-barras" border="0"></a>

<a href="https://ibb.co/bmfw7KQ"><img src="https://i.ibb.co/3dJ6kC4/encuesta-tortas.png" alt="encuesta-tortas" border="0"></a>


## Conclusión Encuestas

Comenzamos por definir la edad del usuario en +16, esto porque entre las películas que incluye la Api, se encuentran títulos no aptos para menores, por lo tanto no se encuentra dirigida a usuarios menores de edad, ya que no se está incluyendo un control parental en la app.

Logramos confirmar que Netflix es la plataforma más utilizada para acceder a series y películas, por lo tanto se nos abre la posibilidad de desarrollar el catalogo pensando en que la descripción de las los títulos que tiene Netflix son poco claros y los usuarios lo pasan por alto, asimismo, no toman en cuenta las sugerencias que da la pagina (66% sobre el 34% que toma en cuenta), ya que no sienten que sea asertiva.

Nos dimos cuenta que la información que aportan conocidos es importante para los usuarios (84% de respuestas positivas), por lo tanto nos hace sentido desarrollar el comparador, así el usuario puede incluir una sugerencia anterior y una película favorita, en las búsquedas y ver si es de su gusto.

Finalmente mostramos un conjunto de las palabras más utilizadas por los encuestados, en la respuesta escrita, en donde consideran que es más fácil elegir.

Con esto tenemos nuestro usuario definido.

# Sketch y Prototipado

Comenzamos a realizar sketch desde un primer momento, para poder ordenar las ideas, estos fueron realizados en hojas a mano alzada.

<a href="https://ibb.co/D5zVG5q"><img src="https://i.ibb.co/Gcnxsch/IMG-20190723-122311486.jpg" alt="IMG-20190723-122311486" border="0"></a>

Posterior a este Sketch dimos paso al prototipado de baja fidelidad, realizado en papel, sin incluir mayores interacciones en este.

<a href="https://ibb.co/fMHjtnF"><img src="https://i.ibb.co/G7Rzktp/Prot-baja.png" alt="Prot-baja" border="0"></a>


# Historias de Usuario

Para definir la historia de usuario nos basamos en la encuesta realizada, ya teniendo la definición, utilizamos plantillas para en conjunto realizar las historias.

<a href="https://ibb.co/JB2DWdf"><img src="https://i.ibb.co/C1vRptk/historia-usuario.png" alt="historia-usuario" border="0"></a>

# Prototipo de alta fidelidad

Los prototipos fueron diseñados en [Figma](https://www.figma.com/file/AbLsOx6IRb37P3UTlpf35m/Untitled?node-id=1:5), para realizar los posteriores testeos. optamos por un diseño sobrio aplicando un fondo negro.
 
La paleta de colores fue realizada con [Colors](https://coolors.co),  y desarrollada desde la mirada de la psicología del color en el marketing: oro o dorado es pensar en  el  metal precioso. Obviamente sabemos que representa al  campeón,  al  ganador, al líder. Definitivamente a quien se lleva ese trofeo asociado al  número uno.  Podemos verlo en la medalla de oro de las Olimpiadas, en la Copa del Mundo de Fútbol, en los Óscar de Hollywood, etc.

<a href="https://ibb.co/Z8TM2Dm"><img src="https://i.ibb.co/2tKkZ4N/paleta-colores.png" alt="paleta-colores" border="0"></a>


<a href="https://ibb.co/bztS4GX"><img src="https://i.ibb.co/ChLkjSQ/i-Phone-X-1.png" alt="i-Phone-X-1" border="0"></a>
<a href="https://ibb.co/WDkQqr9"><img src="https://i.ibb.co/1sr3hCV/prototipo-alta-junot.png" alt="prototipo-alta-junot" border="0"></a>

# Test de Usabilidad.

Se realizaron test con usuarios desde los 17 a 31 años, en Mall Costanera center con el prototipo de alta fidelidad, siendo registrados en los siguientes videos:
 -  [Primer video Test de Usabilidad.](https://youtu.be/FumUTUqINM4)
 - [Segundo video Test de Usabilidad.](https://youtu.be/zC5Osiff_XM)
 - [Tercer video Test de Usabilidad.](https://youtu.be/mBAm50_h3Og)
 - [Cuarto video Test de Usabilidad.](https://youtu.be/sugmxqnOTEE)
 - [Quinto video Test de Usabilidad.](https://youtu.be/ZG3eJKKG8g4)

## Conclusiones Testeo.

En general las personas testeadas entendieron la pagina, consideran que es amigable, sin embargo en el momento de volver al inicio se genera confusión ya que realizaban la búsqueda desde el menú principal, como mejora desarrollaremos  un enlace mas directo al menú principal.


# Diseño final.

Posterior a las pruebas de usuario y con el fin de obtener un MVP, se modifico el diseño original, manteniendo la paleta de colores y realizando dos tarjetas que comparan en una pantalla la  información de las películas seleccionadas, quitando el carrusel que se había ideado inicialmente en virtud del tiempo, dejándolo como una futura mejora. Este diseño final no ha sido testeado con usuarios.

<a href="https://ibb.co/4pFP5rt"><img src="https://i.ibb.co/njwz5Jm/alta-final.png" alt="alta-final" border="0"></a>


