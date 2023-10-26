let converter = '';
let temperatura;
let resultado;

function limpar(){
    document.querySelector('#temperatura').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    document.querySelector('#converter').value = '';
}

function conversor(){
    converter = document.querySelector('#converter').value;

    if (converter == 'Celsius') {
        converterCelsius();
    }
    if (converter == 'Fahrenheit') {
        converterFahrenheit();
    }
}

function converterCelsius(){
    temperatura = parseInt(document.querySelector('#temperatura').value);

    resultado = ((temperatura * 1.8) + 32)

    document.querySelector('#resultado').innerHTML = resultado
}

function converterFahrenheit(){
    temperatura = parseInt(document.querySelector('#temperatura').value);

    resultado = ((temperatura - 32) / 1.8)

    document.querySelector('#resultado').innerHTML = resultado
}