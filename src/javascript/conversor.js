let conversor = '';
let temperatura;
let resultado;

function limpar(){
    document.querySelector('#temperatura').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    document.querySelector('#conversor').value = '';
}

function converter(){
    conversor = document.querySelector('#conversor').value;

    if (conversor == 'Celsius') {
        converterCelsius();
    }
    if (conversor == 'Fahrenheit') {
        converterFahrenheit();
    }
    if (conversor == ''){
        alert('')
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