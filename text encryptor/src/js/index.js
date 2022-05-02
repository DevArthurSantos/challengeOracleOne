const copy = document.getElementById("copy");
const asideNoMSG = document.getElementById("asideNoMSG");
const divTextEncripyter = document.getElementById("divTextEncripyter");
const textoEncripitado = document.getElementById("textoEncripitado");
const textoCompleto = document.getElementById("textoCompleto");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const error = document.getElementById("error");

divTextEncripyter.style.display = "none";
function mostrarTexto(show, text) {
  if (show === "cripter") {
    asideNoMSG.style.display = "none";
    divTextEncripyter.style.display = "block";
    textoEncripitado.textContent = text;
  } else if (show === "decripter") {
    asideNoMSG.style.display = "none";
    divTextEncripyter.style.display = "block";
    textoEncripitado.innerText = text;
  }
}

function errorTexto() {
  error.style.color = "red";
  error.style.marginLeft = "-15px";
  setTimeout(() => {
    error.style.marginLeft = "15px";
  }, 500);
  setTimeout(() => {
    error.style.marginLeft = "0px";
  }, 1000);
}

function criptografar() {
  if (!textoCompleto.value) return errorTexto();
  let cripter = textoCompleto.value
    .toLowerCase()
    .replace(/a/g, "z01s5z")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let cripter1 = cripter.replace(/e/g, "1y1s6y");
  let cripter2 = cripter1.replace(/i/g, "3x4s5x");
  let cripter3 = cripter2.replace(/o/g, "41ws5w");
  let cripter4 = cripter3.replace(/u/g, "v51s6v");
  textoCompleto.value === "";
  mostrarTexto("cripter", cripter4);
}

function descriptografar() {
  if (!textoCompleto.value) return errorTexto();
  let decripter = textoCompleto.value
    .toLowerCase()
    .replace(/z01s5z/g, "a")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let decripter1 = decripter.replace(/1y1s6y/g, "e");
  let decripter2 = decripter1.replace(/3x4s5x/g, "i");
  let decripter3 = decripter2.replace(/41ws5w/g, "o");
  let decripter4 = decripter3.replace(/v51s6v/g, "u");
  mostrarTexto("decripter", decripter4);
}

function copyText() {
  navigator.clipboard.writeText(textoEncripitado.value);
  asideNoMSG.style.display = "block";
  divTextEncripyter.style.display = "none";
  error.style.color = "#0A3871";
  error.innerText = "Texto copiado para a area de trasferencia";
}

encriptar.addEventListener("click", (e) => {
  e.preventDefault;
  criptografar();
});

desencriptar.addEventListener("click", (e) => {
  e.preventDefault;
  descriptografar();
});

copy.addEventListener("click", (e) => {
  e.preventDefault;
  copyText();
});
