var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variables declaradas 
var paleta = document.getElementById('paleta'); // Paleta para seleccionar color
var grillaPixeles = document.getElementById('grilla-pixeles'); // Lienzo de trabajo
var indicadorDeColor = document.getElementById('indicador-de-color'); // Indicador del color seleccionado
var indicadorDeColorMensaje = document.getElementById('indicador-de-color-mensaje'); // Texto con nombre del color elegido
var mouseAbajo = false;
var botonBorrar = document.getElementById('borrar');
var botonGuardar = document.getElementById('guardar');
//Funcion para generar paleta de colores (DONE)

function generarPaleta() {
  for (var i = 0 ; i < nombreColores.length ; i++ ){
    var color = document.createElement ('div');
    color.style.backgroundColor = nombreColores[i];
    color.className = 'color-paleta';
    paleta.appendChild(color);
  }
}

//Funcion para generar grilla de pixeles (DONE)

function generarGrillaPixeles(){
  for ( var i = 0 ; i < 1750 ; i++ ){
    var box = document.createElement('div');
    grillaPixeles.appendChild(box);
  }
}

//Funcion para cambiar el indicador de color (DONE)
function cambiarIndicadorDeColor(color){
  indicadorDeColor.style.backgroundColor = color;
  indicadorDeColorMensaje.textContent = color;
}

function cambiarColor(e){
  var color = e.target.style.backgroundColor;
  cambiarIndicadorDeColor(color);
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    cambiarIndicadorDeColor(colorActual);
  })
);

//Funcion para pintar pixel (DONE)
function pintarPixel(e){
  var colorActual = indicadorDeColor.style.backgroundColor;
  e.target.style.backgroundColor = colorActual;
}

//Funcion para detectar el apretado del mouse (DONE)
function mouseApretado(e){
  mouseAbajo = true;
  console.log(mouseAbajo);
}
function mouseSuelto(){
  mouseAbajo = false;
  console.log(mouseAbajo);
}
//Funcion para pintar en movimiento (DONE)
function pintarEnMovimiento(e){
  if(mouseAbajo){
    e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }
}

//Funcion para borrar el lienzo (DONE)
function limpiarGrilla(){
  $(document).ready(function(){
    $("#grilla-pixeles").children().animate({"backgroundColor":"white"}, 1500);
  });
}

//Funcion para cargar plantillas de héroes (DONE)
$(document).ready(function(){
  $('ul.imgs li img').click(function(){
    var heroe = $(this).attr('id');
    switch (heroe){
      case 'batman':
        cargarSuperheroe(batman);
        break;
      case 'wonder':
        cargarSuperheroe(wonder);
        break;
      case 'flash':
        cargarSuperheroe(flash);
        break;
      case 'invisible':
        cargarSuperheroe(invisible);
        break;
      default:
        break;
    }
  })
})

//Eventos
paleta.addEventListener("click", cambiarColor);
grillaPixeles.addEventListener("click", pintarPixel);
grillaPixeles.addEventListener("mousedown", mouseApretado);
grillaPixeles.addEventListener("mouseup", mouseSuelto);
grillaPixeles.addEventListener("mouseover", pintarEnMovimiento);
botonBorrar.addEventListener("click", limpiarGrilla);
botonGuardar.addEventListener("click", guardarPixelArt);

$(document).ready(function(){
generarGrillaPixeles();
generarPaleta();
});