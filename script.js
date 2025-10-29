const convertButton = document .querySelector('#converter');
const convertSelect = document .querySelector('.valores-moedas');


function convertValues() {
    const inputCurrencyValue = document .querySelector('.input-convert').value;
    const moedaValor = document .querySelector('.moeda-valor'); // Valor em real
    const moedaValorConvertido = document .querySelector('.moeda-valor-convertido'); // outras moedas


    console.log(convertSelect.value)


    const dolarValue = 5.2;
    const euroValue = 6.2;



    if(convertSelect.value === "dolar") { // SE 0 select estiver selecionado o valor de dolar, ele vai pegar o valor de dolar para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(inputCurrencyValue / dolarValue);

    }


    if(convertSelect.value === "euro") { // SE 0 select estiver selecionado o valor de euro, ele vai pegar o valor de euro para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroValue);

    }

    moedaValor.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue);

    
}


function changeCurrency() {
 const moedaName = document .getElementById('moeda-name');
 const moedaImg = document .querySelector('.moeda-img');

    if (convertSelect.value === 'dolar') {
         moedaName.innerHTML = 'Dólar Americano';
         moedaImg.src = './assets/img/Dolar.png'
    }
       

    if (convertSelect.value === 'euro') {
         moedaName.innerHTML = 'Euro';
         moedaImg.src = './assets/img/Euro.png'
    }

    convertValues();
    
}


   

convertSelect.addEventListener('change', changeCurrency);

convertButton.addEventListener('click', convertValues )