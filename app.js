let n1, n2;

function obterNumeros() {
    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    if (isNaN(numero1) || isNaN(numero2)) {
        document.querySelector('#resultado').innerHTML = "Insira um número válido nos dois campos!";
        return null;
    }
    return {numero1, numero2};
}

function limparCampo() {
    numero1 = document.querySelector('#numero1');
    numero1.value = '';
    numero2 = document.querySelector('#numero2');
    numero2.value = '';
}

function atualizaResultado(operacao, numero1, numero2, resultado) {
    document.querySelector('#resultado').innerHTML = `O resultado de ${numero1} ${operacao} ${numero2} é igual a ${resultado}`;
    limparCampo();
    document.getElementById('limpar').removeAttribute('disabled');
}

function adicao() {
    const { numero1, numero2 } = obterNumeros();
    const resultado = numero1 + numero2;
    atualizaResultado('+', numero1, numero2, resultado);
}

function subtracao() {
    const { numero1, numero2 } = obterNumeros();
    const resultado = numero1 - numero2;
    atualizaResultado('-', numero1, numero2, resultado);
}

function multiplicacao() {
    const { numero1, numero2 } = obterNumeros();
    const resultado = numero1 * numero2;
    atualizaResultado('x', numero1, numero2, resultado);
}

function divisao() {
    const { numero1, numero2 } = obterNumeros();
    if (numero2 === 0) {
        document.querySelector('#resultado').innerHTML = `Não é possível dividir um número por zero. Por favor, insira números válidos!`;
    } else {
        const resultado = numero1 / numero2;
        atualizaResultado('÷', numero1, numero2, resultado);
    }
}

function limpar() {
    document.querySelector('#resultado').innerHTML = '';
    document.getElementById('limpar').setAttribute('disabled', true);
}