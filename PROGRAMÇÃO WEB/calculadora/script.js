let visor = document.getElementById("visor");
let historico = document.getElementById("historico");
let memoria = 0;
let nomesVisiveis = false;
let expressaoAtual = '';

function adicionarNumero(numero) {
    visor.value += numero;
    expressaoAtual += numero;
}

function adicionarOperador(operador) {
    if (operador === 'x') operador = '*';
    if (operador === '÷') operador = '/';
    visor.value += ` ${operador} `;
    expressaoAtual += operador;
}

function limparVisor() {
    visor.value = '';
    expressaoAtual = '';
}

function calcular() {
    try {
        let resultado = eval(expressaoAtual);
        historico.innerText += `${expressaoAtual} = ${resultado}\n`;
        visor.value = resultado;
        expressaoAtual = resultado;
    } catch {
        visor.value = "Erro";
    }
}

function adicionarMemoria() {
    memoria = parseFloat(visor.value);
    limparVisor();
}

function recuperarMemoria() {
    visor.value = memoria;
}

function limparMemoria() {
    memoria = 0;
}

function limparHistorico() {
    historico.innerText = '';
}

function alterarCor() {
    let novaCorFundo = prompt("Digite a cor de fundo :");
    let novaCorTexto = prompt("Digite a cor do texto :");
    
    if (novaCorFundo) {
        visor.style.backgroundColor = novaCorFundo;
    }
    if (novaCorTexto) {
        visor.style.color = novaCorTexto;
    }else {
        visor.style.backgroundColor = "black";
        visor.style.color = "green";
    }
}

function mostrar() {
    nomesVisiveis = !nomesVisiveis;
    document.getElementById("nomes").style.display = nomesVisiveis ? 'block' : 'none';
}
