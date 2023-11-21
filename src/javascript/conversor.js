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
    temperatura = document.querySelector('#temperatura').value;

    if (temperatura === ''){
        alert('Digite um valor');
        document.querySelector('#temperatura').focus();
        return false;
    } else{
        if (conversor == 'Celsius') {
            validation = converterParaFahrenheit(parseInt(temperatura));
            return validation;
        }
        if (conversor == 'Fahrenheit') {
            validation = converterParaCelsius(parseInt(temperatura));
            return validation;
        }
        if (conversor == ''){
            alert('Selecione se vai converter para celcius ou fahrenheit');
            document.querySelector('#conversor').focus();
            return false;
        }
    }
}

function converterParaCelsius(temperatura){
    // temperatura = parseInt(document.querySelector('#temperatura').value);
    let temperaturaF = temperatura;

    resultado = ((temperaturaF * 1.8) + 32);

    document.querySelector('#resultado').innerHTML = (resultado.toFixed(1) + ' ºF');
    return true;
}

function converterParaFahrenheit(temperatura){
    // temperatura = parseInt(document.querySelector('#temperatura').value);
    let temperaturaC = temperatura;

    resultado = ((temperaturaC - 32) / 1.8);

    document.querySelector('#resultado').innerHTML = (resultado.toFixed(1) + ' ºC');
    return true
}