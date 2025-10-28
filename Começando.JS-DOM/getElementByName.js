/*

getElementoByName 

getElementsByName retorna uma coleção (HTMLCollection) de todos os elementos do documento com o atributo name especificado.
    Exemplo de uso:
    const elements = document.getElementsByName('exampleName');
    console.log(elements); // HTMLCollection de elementos com name 'exampleName'



*/


const getElementsByName = (name) => {
    return document.getElementsByName(name);
};

export default getElementsByName;
