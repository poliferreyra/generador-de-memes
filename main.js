// funcion maestra
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
// xmark
let xmarkImg = $("#close-img-box");
let xmarkTxt = $("#close-txt-box");
// boton de descarga meme
let contenedorImagen = $("#container-box");
let boton = $("#download-meme");
// textos superior e inferior
let txtSup = $("#top-text");
let txtInf = $("#bottom-text");
let inputTop = $("#top");
let inputbottom = $("#bottom");
let fontOption = $("#font-option");
let sizeFont = $("#size-font");
// alineacion texto
let alignRight = $("#align-right");
let alignLeft = $("#align-left");
let alignCenter = $("#align-center");
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
// contorno texto
let sinOutline = $("#none-outline");
let lightOutline = $("#light-outline");
let darkOutline = $("#dark-outline");
// espaciado e interlineado
let espaciado = $("#letter-spacing");
let interlineado = $("#line-height");
// url, color de fondo del box y etiqueta span
let boxImage = $(".box");
let url = $("#url");
let bkgColor = $("#bkg-color");
let hexaColor = $("#hexacolor");
// fondo transparente
let bkgTransparente = $("#bkg-y-n");
// select opcion - blend mode
let blendMode = $(".bkg-select");
// filtros
let brillo = $("#brightness");
let opacidad = $("#opacity");
let contraste = $("#contrast");
let desenfoque = $("#blur");
let escalaGrises = $("#grayscale");
let sepia = $("#sepia");
let hue = $("#hue");
let saturacion = $("#saturate");
let negativo = $("#invert");
// reset
let btnReset = $("#btn-reset");

// FUNCIONES

// light-Mode
const cambiarModoClaro = () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    btnMode.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Modo Claro`;
  } else {
    btnMode.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Modo Oscuro`;
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
// xmark
const cerrarBarraImg = ()=> {
  asideImg.style.display = "none"
};
const cerrarBarraTxt = ()=> {
  asideTxt.style.display = "none"
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
// fondo transparente
const quitarFondo = () => {
  let transparente = `${(boxImage.style.backgroundColor = "#ffffff00")}`;
  if (bkgTransparente.checked) {
    divTxtSup.style.backgroundColor = transparente;
    divTxtInf.style.backgroundColor = transparente;
  } else {
    divTxtSup.style.backgroundColor = bkgColor.value;
    divTxtInf.style.backgroundColor = bkgColor.value;
  }
};
// select opcion - blend mode
const actualizarBlendMode = () => {
  boxImage.style.backgroundBlendMode = blendMode.value;
};
// texto superior e inferior
const cambiarTxtSup = (event) => {
  txtSup.innerText = event.target.value;
};
const cambiarTxtInf = (event) => {
  txtInf.innerText = event.target.value;
};
const cambiarTipoFuente = () => {
  txtSup.style.fontFamily = fontOption.value;
  txtInf.style.fontFamily = fontOption.value;
};
const cambiarTamanioFuente = () => {
  txtSup.style.fontSize = `${sizeFont.value}px`;
  txtInf.style.fontSize = `${sizeFont.value}px`;
};
// alineacion texto
const alinearDerecha = () => {
  let alignRight = "right";
  txtSup.style.textAlign = alignRight;
  txtInf.style.textAlign = alignRight;
};
const alinearIzquierda = () => {
  let alignLeft = "left";
  txtSup.style.textAlign = alignLeft;
  txtInf.style.textAlign = alignLeft;
};
const alinearCentro = () => {
  let alignCenter = "center";
  txtSup.style.textAlign = alignCenter;
  txtInf.style.textAlign = alignCenter;
};
// quitar textos
const sinTextSup = () => {
  if (checkTxtSup.checked) {
    divTxtSup.style.display = "none";
  } else {
    divTxtSup.style.display = "block";
  }
};
const sinTextInf = () => {
  if (checkTxtInf.checked) {
    divTxtInf.style.display = "none";
  } else {
    divTxtInf.style.display = "block";
  }
};
// cambiar color al texto y fondo
const actualizarColorTxt = () => {
  txtSup.style.color = colorTxt.value;
  txtInf.style.color = colorTxt.value;
};
const cambiarHexaTxt = () => {
  hexaTxt.innerText = colorTxt.value;
};
const actualizarFondoTxt = () => {
  divTxtSup.style.backgroundColor = txtFondo.value;
  divTxtInf.style.backgroundColor = txtFondo.value;
};
const cambiarHexaFondo = () => {
  hexaFondo.innerText = txtFondo.value;
};
// contorno texto
const sinContono = () => {
  let ninguno = `${(txtSup.style.textShadow = "none")}`;
  txtSup.style.textShadow = ninguno;
  txtInf.style.textShadow = ninguno;
};
const agregaContonoClaro = () => {
  let contronoClaro = `${(txtSup.style.textShadow = "2px 2px 0 white")}`;
  txtSup.style.textShadow = contronoClaro;
  txtInf.style.textShadow = contronoClaro;
};
const agregaContonoOscuro = () => {
  let contronoOscuro = `${(txtSup.style.textShadow = "3px 3px 0 black")}`;
  txtSup.style.textShadow = contronoOscuro;
  txtInf.style.textShadow = contronoOscuro;
};
// espaciado e interlineado
const agregarEspacioTxt =()=>{
  txtSup.style.letterSpacing = `${espaciado.value}px`
  txtInf.style.letterSpacing = `${espaciado.value}px`
};
const agregarAlturaTxt =()=>{
txtSup.style.lineHeight = interlineado.value
txtInf.style.lineHeight = interlineado.value
};
// filtros
const actualizarFiltros = () => {
  boxImage.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}) blur(${desenfoque.value}px) grayscale(${escalaGrises.value}) sepia(${sepia.value}) hue-rotate(${hue.value}deg) invert(${negativo.value})`;
  //saturate(${saturacion.value})  tuve que sacar este filtro porque me rompia los demas...  al colocarlo y tocar alguno me pone en blanco y negro y no se reestablece
};
// reset
const resetearFiltros = () => {
  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 1;
  desenfoque.value = 0;
  escalaGrises.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturacion.value = 0;
  negativo.value = 0;
  actualizarFiltros();
};

// EVENTOS

// light-mode
btnMode.addEventListener("click", cambiarModoClaro);
// display none - barra imagen y texto
btnTxt.addEventListener("click", mostrarBarraTxt);
btnImg.addEventListener("click", mostrarBarraImg);
// xmark
xmarkImg.addEventListener("click", cerrarBarraImg);
xmarkTxt.addEventListener("click", cerrarBarraTxt);
// boton de descarga meme
boton.addEventListener("click", descargarMeme);
// texto superior e inferior
inputTop.addEventListener("input", cambiarTxtSup);
inputbottom.addEventListener("input", cambiarTxtInf);
fontOption.addEventListener("change", cambiarTipoFuente);
sizeFont.addEventListener("input", cambiarTamanioFuente);
// alineacion texto
alignRight.addEventListener("click", alinearDerecha);
alignLeft.addEventListener("click", alinearIzquierda);
alignCenter.addEventListener("click", alinearCentro);
// quitar textos
checkTxtSup.addEventListener("click", sinTextSup);
checkTxtInf.addEventListener("click", sinTextInf);
// cambiar color al texto y fondo
colorTxt.addEventListener("input", actualizarColorTxt);
colorTxt.addEventListener("input", cambiarHexaTxt);
txtFondo.addEventListener("input", actualizarFondoTxt);
txtFondo.addEventListener("input", cambiarHexaFondo);
// contorno texto
lightOutline.addEventListener("click", agregaContonoClaro);
darkOutline.addEventListener("click", agregaContonoOscuro);
sinOutline.addEventListener("click", sinContono);
// espaciado e interlineado
espaciado.addEventListener("input", agregarEspacioTxt);
interlineado.addEventListener("input", agregarAlturaTxt);
// url
url.addEventListener("input", actualizarImagen);
// color de fondo de box y etiqueta span
bkgColor.addEventListener("change", actualizarBkgColor);
bkgColor.addEventListener("change", cambiarHexaColor);
// fondo transparente
bkgTransparente.addEventListener("click", quitarFondo);
// select opcion - blend mode
blendMode.addEventListener("input", actualizarBlendMode);
// filtros
brillo.addEventListener("input", actualizarFiltros);
opacidad.addEventListener("input", actualizarFiltros);
contraste.addEventListener("input", actualizarFiltros);
desenfoque.addEventListener("input", actualizarFiltros);
escalaGrises.addEventListener("input", actualizarFiltros);
sepia.addEventListener("input", actualizarFiltros);
hue.addEventListener("input", actualizarFiltros);
saturacion.addEventListener("input", actualizarFiltros);
negativo.addEventListener("input", actualizarFiltros);
// reset
btnReset.addEventListener("click", resetearFiltros);
