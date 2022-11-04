//utils
const $ = (selector) => document.querySelector(selector);

// VARIABLES

// light-mode
let body = document.body;
let btnMode = $("#btn-mode");
let header = $("#header");
let main = $("#main");
// display none - barra imagen y texto
let asideImg = $(".style-box");
let asideTxt = $(".style-box-txt");
let btnImg = $("#btn-img");
let btnTxt = $("#btn-txt");
// boton de descarga meme
let contenedorImagen = $("#container-box");
let boton = $("#download-meme");
// textos superior e inferior
let txtSup = $("#top-text");
let txtInf = $("#bottom-text");
let inputTop = $("#top");
let inputbottom = $("#bottom");
// quitar div's de los textos
let divTxtSup = $(".top-text");
let divTxtInf = $(".bottom-text");
let checkTxtSup = $("#check-sup");
let checkTxtInf = $("#check-inf");
// cambiar color al texto y fondo
let colorTxt = $("#bkg-color-txt");
let hexaTxt = $("#hexa-txt");
let txtFondo = $("#bkg-color-fondo");
let hexaFondo = $("#hexa-fondo");

// url, color de fondo del box y etiqueta span
let boxImage = $(".box");
let url = $("#url");
let bkgColor = $("#bkg-color");
let hexaColor = $("#hexacolor");

let selectOption = $(".bkg-select");
// preguntar que diferencia habria con los filtros

// filtros
let brillo = $("#brightness");
let opacidad = $("#opacity");
// valores de los filtros
let valorBrillo = brillo.value;
let valorOpacidad = opacidad.value;

// FUNCIONES

// light-Mode
const cambiarModoClaro = () => {
  body.classList.toggle("light-mode");
  if(body.classList.contains("light-mode")){
    btnMode.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Modo Claro`
  }
  else{
    btnMode.innerHTML =`<i class="fa-solid fa-lightbulb"></i> Modo Oscuro`
  }
};
// display none - barra imagen y texto
const mostrarBarraTxt = () => {
  asideImg.style.display = "none";
  asideTxt.style.display = "flex";
};
const mostrarBarraImg = () => {
  asideTxt.style.display = "none";
  asideImg.style.display = "flex";
};
// boton de descarga meme
const descargarMeme = () => {
  domtoimage.toBlob(contenedorImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};
// url, color de fondo del box y etiqueta span
const actualizarImagen = (event) => {
  boxImage.style.backgroundImage = `url(${event.target.value})`;
};
const actualizarBkgColor = (event) => {
  boxImage.style.backgroundColor = bkgColor.value;
};
const cambiarHexaColor = () => {
  hexaColor.innerText = bkgColor.value;
};
// texto superior e inferior
const cambiarTxtSup = (event) => {
  txtSup.innerText = event.target.value;
};
const cambiarTxtInf = (event) => {
  txtInf.innerText = event.target.value;
};
// quitar textos
const sinTextSup = (event) => {
  if (checkTxtSup.checked) {
    divTxtSup.style.display = "none";
  } else {
    divTxtSup.style.display = "block";
  }
};
const sinTextInf = (event) => {
  if (checkTxtInf.checked) {
    divTxtInf.style.display = "none";
  } else {
    divTxtInf.style.display = "block";
  }
};
// cambiar color al texto y fondo
const actualizarColorTxt = (event) => {
  txtSup.style.color = colorTxt.value;
  txtInf.style.color = colorTxt.value;
};
const cambiarHexaTxt = (event) => {
  hexaTxt.innerText = colorTxt.value;
};
const actualizarFondoTxt = (event) => {
  divTxtSup.style.backgroundColor = txtFondo.value;
  divTxtInf.style.backgroundColor = txtFondo.value;
};
const cambiarHexaFondo = (event) => {
  hexaFondo.innerText = txtFondo.value;
};
// EVENTOS

// light-mode
btnMode.addEventListener("click", cambiarModoClaro);
// display none - barra imagen y texto
btnTxt.addEventListener("click", mostrarBarraTxt);
btnImg.addEventListener("click", mostrarBarraImg);
// boton de descarga meme
boton.addEventListener("click", descargarMeme);
// texto superior e inferior
inputTop.addEventListener("input", cambiarTxtSup);
inputbottom.addEventListener("input", cambiarTxtInf);
// quitar textos
checkTxtSup.addEventListener("click", sinTextSup);
checkTxtInf.addEventListener("click", sinTextInf);
// cambiar color al texto y fondo
colorTxt.addEventListener("change", actualizarColorTxt);
colorTxt.addEventListener("change", cambiarHexaTxt);
txtFondo.addEventListener("change", actualizarFondoTxt);
txtFondo.addEventListener("change", cambiarHexaFondo);

// url
url.addEventListener("input", actualizarImagen);
// color de fondo de box y etiqueta span
bkgColor.addEventListener("change", actualizarBkgColor);
bkgColor.addEventListener("change", cambiarHexaColor);
// filtros
