import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))
// let title = document.getElementById("title");
// title.innerText = "Contabilidad Básica"; 
// //Atrapar los elementos del campotexto
// let texto = document.getElementById("miCampoTexto");
// //Mostra el texto
// let mostrar = document.getElementById("Resultados");
// //Atrapar la acción del botón
// let miBoton1 = document.getElementById("miBoton");
// miBoton1.addEventListener("click", function(){
//   let campo_texto = texto.value;
//   mostrar.textContent = "valor de la compra = "+campo_texto;
// });
//Atravalor los valores de botones y espacios de texto
let number = document.getElementById("monto");
let determinarAsiento = document.getElementById("determinarAsiento");
//Atrapar todos los elementos de resultados
let one = document.getElementById("one");
let one_debe = document.getElementById("one-debe");
let two = document.getElementById("two");
let two_debe = document.getElementById("two-debe");
let three = document.getElementById("three");
let three_haber = document.getElementById("three-haber")
//Atrapar la función en un listener
determinarAsiento.addEventListener("click", function(){
  let operacion = number.value;
  one.textContent = `Venta`;
  one_debe.textContent = `${operacion*0.87}`;
  two.textContent = `Crédito fiscal IVA`;
  two_debe.textContent = `${operacion*0.13}`;
  three.textContent = `Caja Moneda Nacional`;
  three_haber.textContent = `${operacion}`; 

});
