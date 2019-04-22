// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/cadcambici.jpg",
    title: "Bicicleta de madera",
    about: "En el ramo “Diseño y manufactura digital Cad/Cam” se nos encomendó realizar una bicicleta de madera y un sillín para esta, ambos realizados en CNC. La bicicleta debía cumplir con la consiga de aguantar el peso de una persona, andar y no romperse en el camino.",
}, {
    figure: "media/Prototipos-ventilador.jpg",
    title: "Ventilador al estilo Dieter Rams",
    about: "En la “Laboratorio de modelos y prototipos” se nos pidió realizar el prototipo de algún elemento eléctrico inspirado en el estilo del diseñador Dieter Rams, por lo que decidimos realizar un ventilador de escritorio completamente funcional.",
}, {figure: "media/M. pescador 1.jpg",
    title: "Dibujo pintado a lápiz: Martín pescador ",
    about: "Esta ave es llamada “Martín pescador” (Alcedo atthis), fue la segunda ave que realizaba en papel bond y con lápices escolares. Marca un hito para mí, ya que fue uno de los dibujos que me impulsó a seguir experimentando en el dibujo.",
}, {
    figure: "media/Pavo 1.jpg",
    title: "Pintura acrílica: Pavo real",
    about: "Este “Pavo real”(Pavo cristatus) una de mis obras mas recientes pintada en un block de 30x40cm. de grano fino y especial para el uso de acrílicos. Esta pintura me tomó casi 12 días, trabajando en ella aproximadamente 4 horas diarias debido a la cantidad de detalles que esta tenía.",
}, {
    figure: "media/antro.jpg",
    title: "Investigación antropológica Metrogas",
    about: "El curso “Antro-diseño” pretende investigar las bases de la teoría antropología cultural y las metodologías aplicadas adaptadas al diseño de una empresa. En nuestro caso la contraparte con la cual trabajamos era “Metro gas”, quería realizar un estudio de las oportunidades de llegar a Villarrica y Pucón ya que estas zonas presentaban un contexto nuevo, diferente y desconocido para una empresa de gas en donde su principal combustible es la leña. ",
}, {
    figure: "media/LMDA.jpg",
    title: "La máquina de afilar ",
    about: "En el curso “Laboratorio de ingeniería de diseños y sistemas” se nos propuso el desafío de explorar su propio proceso de ideación y la interacción de equipo para enfrentar las limitaciones, desafíos y problemáticas propuestas por una organización u empresa. Nuestra contraparte en este desafío era “La máquina de afilar” que es una empresa que realizaba un servicio de afilar cuchillos, pero que tenia problemas de organización y perdidas de productos. Con estas problemáticas realizamos nuestra solución que consistía en un holder de cuchillos con sensor y una maleta con sensor de proximidad.",
}, {
    figure: "media/protenis.jpg",
    title: "Desafios de la ingeniería: Mesa protenis",
    about: "El curso “Desafios de la ingeniería” nos dio el desafío de realizar algún producto que beneficiara a algún deporte. A base de encuestas e investigación nos dimos cuenta de que el tenis de mesa no tenía ninguna “mejora” así que nos enfocamos en él y realizamos una mesa interactiva para ayudar al entrenamiento, que constaba de 6 agujeros los cuales tenían cada uno una luz led que se prendía random para que el jugador practicara su precisión en los tiros. Con este proyecto logramos presentarnos entre el grupo de los mejores del semestre. ",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});