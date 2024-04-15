let zero = document.getElementById('zero');
let um = document.getElementById('um');
let dois = document.getElementById('dois');
let tres = document.getElementById('tres');
let quatro = document.getElementById('quatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let nove = document.getElementById('nove');

let virgula = document.getElementById('virgula');
let soma = document.getElementById('soma');
let subtracao = document.getElementById('subtracao');
let multiplicacao = document.getElementById('multiplicacao');
let divisao = document.getElementById('divisao');
let enter = document.getElementById('enter');
let limpar = document.getElementById('limpar');

zero.addEventListener("click", function () {
    input.innerText = parseInt(input.innerText);
    if (isNaN(input.innerText)) {
        input.innerText = 0;
    } else {
        input.innerText += 0;
    }
})
um.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 1;
    } else {
        input.innerText += 1;
    }
})
dois.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 2;
    } else {
        input.innerText += 2;
    }
})
tres.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 3;
    } else {
        input.innerText += 3;
    }
})
quatro.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 4;
    } else {
        input.innerText += 4;
    }
})
cinco.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 5;
    } else {
        input.innerText += 5;
    }
})
seis.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 6;
    } else {
        input.innerText += 6;
    }
})
sete.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 7;
    } else {
        input.innerText += 7;
    }
})
oito.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 8;
    } else {
        input.innerText += 8;
    }
})
nove.addEventListener("click", function () {
    if (parseInt(input.innerText) == 0) {
        input.innerText = 9;
    } else {
        input.innerText += 9;
    }
})

let num1 = 0;
let num2 = 0;
let resultado = " ";

soma.addEventListener("click", function () {
    num1 = parseInt(input.innerText);
    input.innerText = 0;
    operacao = '+';
})
subtracao.addEventListener("click", function () {
    num1 = parseInt(input.innerText);
    input.innerText = 0;
    operacao = '-';
})
multiplicacao.addEventListener("click", function () {
    num1 = parseInt(input.innerText);
    input.innerText = 0;
    operacao = '*';
})
divisao.addEventListener("click", function () {
    num1 = parseInt(input.innerText);
    input.innerText = 0;
    operacao = '/';
})
enter.addEventListener("click", function (valor) {
    num2 = parseInt(input.innerText);

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            input.innerText = resultado;
            break;
        case '-':
            resultado = num1 - num2;
            input.innerText = resultado;
            break;
        case '*':
            resultado = num1 * num2;
            input.innerText = resultado;
            break;
        case '/':
            resultado = num1 / num2;
            input.innerText = resultado;
            break;
    }
})
limpar.addEventListener("click", function () {
    input.innerText = 0;
})

