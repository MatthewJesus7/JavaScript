const enviar = document.getElementById('submit');

const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const inputDoOperador = document.getElementById('operador');
let resultado = document.getElementById('resultado');

let erro = document.getElementById('erro');

enviar.addEventListener('click', calculadoraSimples);

function calculadoraSimples() {
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);
    let operador = inputDoOperador.value

    if (!['+', '-', '/', '%'].includes(operador)) {
        erro.innerHTML = "Digite um operador válido"
    } else {

        let resultadoDaConta = '';
        
        switch(operador) {

            case '+':
                resultadoDaConta = numero1 + numero2;
            break;
            case '-':
                resultadoDaConta = numero1 - numero2;
            break;
            case 'x' || '*':
                resultadoDaConta = numero1 * numero2;
            break;
            case '/':
                resultadoDaConta = numero1 / numero2;
            break;
            case '%':
                resultadoDaConta = numero1 % numero2;
            break;
        }
        resultado.innerHTML = resultadoDaConta
    }
}