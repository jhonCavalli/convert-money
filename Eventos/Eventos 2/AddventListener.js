/*

addventListener

O addEventListener() adiciona um ou mais ouvintes de evento para um elemento. 
a ser acionado quando um evento específico ocorre.


*/



const input = document.querySelector('#myButton');
const select = document.querySelector('select');
const button = document.querySelector('.myButton');


function troqueiValor(event){
    console.log(event);
}

button.addEventListener("click", troqueiValor);