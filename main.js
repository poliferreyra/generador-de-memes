//utils
const $ = (selector) => document.querySelector(selector);

// VARIABLES
// boton de descarga meme
let contenedorImagen = $("#container-box");
let boton = $("#download-meme");

// cambiar texto con input
let txtSup = $("#top-text");
let txtInf = $("#bottom-text");
let inputTop = $("#top");
let inputbottom = $("#bottom");
// url, color de fondo del box y etiqueta span
let boxImage = $(".box");
let url = $("#url");
let bkgColor = $("#bkg-color");
let hexaColor = $("#hexacolor");
// let selectOption =$(".bkg-select");  me falta ver como acceder a ese dato
// filtros
let brillo = $("#brightness");
let opacidad = $("#opacity");

// FUNCIONES
// boton de descarga meme
const descargarMeme = () => {
  domtoimage.toBlob(contenedorImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

// cambiar imagen
const actualizarImagen = (event) => {
  boxImage.style.backgroundImage = `url(${event.target.value})`;
};

// cambiar color de fondo y etiqueta span
const actualizarBkgColor = (event) => {
  boxImage.style.backgroundColor = bkgColor.value;
};
const cambiarHexaColor = () => {
  hexaColor.innerText = bkgColor.value;
};
//filtros
const actualizarBrillo =(event)=>{
  boxImage.style.filter = `brightness(${event.target.value})`
};
const actualizarOpacidad=(event)=>{
  boxImage.style.filter = `opacity(${event.target.value})`
}

// cambia texto superior e inferior
const cambiarTxtSup = (event) => {
  txtSup.innerText = event.target.value;
};
const cambiarTxtInf = (event) => {
  txtInf.innerText = event.target.value;
};

// EVENTOS

// boton de descarga meme
boton.addEventListener("click", descargarMeme);
// cambiar texto con input
inputTop.addEventListener("input", cambiarTxtSup);
inputbottom.addEventListener("input", cambiarTxtInf);
// url
url.addEventListener("input", actualizarImagen);
// color de fondo de box y etiqueta span
bkgColor.addEventListener("change", actualizarBkgColor);
bkgColor.addEventListener("change", cambiarHexaColor);
// filtros
brillo.addEventListener("change", actualizarBrillo);
opacidad.addEventListener("change", actualizarOpacidad);


