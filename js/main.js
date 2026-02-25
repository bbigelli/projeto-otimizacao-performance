// JavaScript com código não utilizado e bibliotecas pesadas

// Import desnecessário (se fosse módulo)
// import $ from 'jquery';
// import _ from 'lodash';

// Variáveis globais desnecessárias
window.unusedVariable = "Isso não deveria estar aqui";
window.anotherUnused = { a: 1, b: 2, c: 3 };

// Função principal com código ineficiente
$(document).ready(function() {
    console.log("Site carregado!");
    
    // Contador de estatísticas (ineficiente)
    function animateNumbers() {
        $('.stat-number').each(function() {
            var $this = $(this);
            var target = parseInt($this.attr('data-target') || '100');
            var current = 0;
            
            var interval = setInterval(function() {
                if (current >= target) {
                    clearInterval(interval);
                } else {
                    current += Math.ceil(target / 100);
                    $this.text(current);
                }
            }, 20);
        });
    }
    
    // Chamada da função que não existe no HTML (data-target não definido)
    animateNumbers();
    
    // Código para lightbox (não implementado)
    $('.gallery-item').click(function() {
        // Lightbox não implementado
        console.log("Lightbox seria aberto aqui");
    });
    
    // Funções não utilizadas
    function processarDados(array) {
        return array.map(item => item.value)
                   .filter(value => value.length > 5)
                   .reduce((acc, val) => acc + val, '');
    }
    
    function calcularMediaPonderada(notas, pesos) {
        if (notas.length !== pesos.length) return 0;
        let soma = 0;
        let somaPesos = 0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i] * pesos[i];
            somaPesos += pesos[i];
        }
        return soma / somaPesos;
    }
    
    // Array gigante não utilizado
    const bigArray = new Array(10000).fill().map((_, i) => ({
        id: i,
        nome: `Item ${i}`,
        valor: Math.random() * 1000
    }));
    
    // Requisição AJAX desnecessária
    $.ajax({
        url: 'https://api.exemplo.com/dados',
        method: 'GET',
        success: function(data) {
            console.log("Dados carregados:", data);
        },
        error: function(error) {
            console.log("Erro:", error);
        }
    });
});

// Funções utilitárias não utilizadas
function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function gerarSlug(texto) {
    return texto.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^\w\s]/g, '')
                .replace(/\s+/g, '-');
}

// Classe não utilizada
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    
    saudacao() {
        return `Olá, eu sou ${this.nome}`;
    }
}

// Manipulação DOM ineficiente
for (let i = 0; i < 100; i++) {
    $('body').append(`<div style="display:none;">Item ${i}</div>`);
}

// Timeout desnecessário
setTimeout(function() {
    console.log("Isso não precisava estar aqui");
}, 5000);