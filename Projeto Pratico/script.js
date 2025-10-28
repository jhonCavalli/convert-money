const convertButton = document .querySelector('#converter');


function convertValues() {
    const inputCurrencyValue = document .querySelector('.input-convert').value;
    const moedaValor = document .querySelector('.moeda-valor'); // Valor em real
    const moedaValorConvertido = document .querySelector('.moeda-valor-convertido'); // outras moedas

    const dolarValue = 5.2;
    const euroValue = 6.2;

    const convertedValue = inputCurrencyValue / dolarValue;


    moedaValor.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue);

    moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(convertedValue);


}


convertButton.addEventListener('click', convertValues )