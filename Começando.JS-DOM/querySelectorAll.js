/*

querySelectorAll -> seleciona todos os elementos que correspondem ao seletor CSS
tras todos os elementos que encontrar.

*/


const elements = document.querySelectorAll('p'); // seleciona todos os parágrafos

elements.forEach((el) => {
  console.log(el.textContent); // exibe o texto de cada parágrafo no console
});