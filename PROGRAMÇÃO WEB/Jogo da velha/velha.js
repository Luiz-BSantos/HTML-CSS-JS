var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;        
    }

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador==='X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    // 1
    if (checaSequencia(quadrado1,quadrado2,quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1); 
        return;   
    }

    // 2
    if (checaSequencia(quadrado4,quadrado5,quadrado6)) {
        mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4); 
        return;   
    }    

    // 3
    if (checaSequencia(quadrado7,quadrado8,quadrado9)) {
        mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);  
        return;  
    }    

    // 4
    if (checaSequencia(quadrado1,quadrado4,quadrado7)) {
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);  
        return;  
    }    

    // 5
    if (checaSequencia(quadrado2,quadrado5,quadrado8)) {
        mudaCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);  
        return;  
    } 

    // 6
    if (checaSequencia(quadrado3,quadrado6,quadrado9)) {
        mudaCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);  
        return;  
    } 

    // 7
    if (checaSequencia(quadrado1,quadrado5,quadrado9)) {
        mudaCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);  
        return;  
    }

    // 8
    if (checaSequencia(quadrado3,quadrado5,quadrado7)) {
        mudaCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);  
        return;  
    }    
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;  

    nome_x = document.getElementById('nome_x').value;
    nome_o = document.getElementById('nome_o').value;

    if (vencedor=='X') {
        alert('Parabéns '+nome_x+' !!!'); 
    }
    else {
        alert('Parabéns '+nome_o+' !!!'); 
    }
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0F0';
    quadrado2.style.background = '#0F0';
    quadrado3.style.background = '#0F0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    document.getElementById('nome_x').value = '';
    document.getElementById('nome_o').value = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}
