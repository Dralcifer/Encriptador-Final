// Función para normalizar el texto, eliminando acentos y convirtiendo a minúsculas
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Esta función encriptará el texto ingresado por el usuario
function encriptar() {
  let texto = document.getElementById("texto").value;
  texto = normalizarTexto(texto);
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "¡Texto encriptado con éxito!";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Alerta!", "Debes ingresar un texto", "warning");
  }
}

// Esta función desencripta el texto ingresado por el usuario
function desencriptar() {
  let texto = document.getElementById("texto").value;
  texto = normalizarTexto(texto);
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "¡Texto desencriptado con éxito!";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Alerta!", "Debes ingresar un texto", "warning");
  }
}
