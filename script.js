const botoes = document.querySelectorAll('#botoes-problemas button');
const solucao = document.getElementById('solucao');
const inputProblema = document.getElementById('input-problema');
const btnBuscar = document.getElementById('btn-buscar');

// Problemas e soluções simuladas
const dados = {
    "nao-liga": {
        "Samsung Galaxy S22": "Pressione o botão de energia por 10s. Se não ligar, conecte ao carregador.",
        "iPhone 14": "Segure o botão lateral + volume por 10s até aparecer o logo da Apple."
    },
    "tela-travando": {
        "Samsung Galaxy S22": "Reinicie o aparelho. Se persistir, limpe cache do sistema.",
        "iPhone 14": "Reinicie o aparelho e atualize o iOS."
    },
    "bateria": {
        "Samsung Galaxy S22": "Reduza brilho, feche apps em segundo plano.",
        "iPhone 14": "Ative modo de baixo consumo e veja apps que gastam bateria."
    }
};

// Clique nos botões
botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        let problema = btn.getAttribute('data-problema');
        solucao.innerHTML = gerarSolucao(problema);
    });
});

// Função para gerar solução (mostrando modelos)
function gerarSolucao(problema) {
    let modelos = dados[problema];
    let html = `<h3>Selecione seu modelo:</h3>`;
    for (let modelo in modelos) {
        html += `<button onclick="alert('${modelos[modelo]}')">${modelo}</button>`;
    }
    return html;
}

// Busca por problema digitado
btnBuscar.addEventListener('click', () => {
    let texto = inputProblema.value.toLowerCase();
    let encontrado = false;
    for (let chave in dados) {
        if (texto.includes(chave.replace("-", " "))) {
            solucao.innerHTML = gerarSolucao(chave);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        solucao.innerHTML = "Não encontramos uma solução rápida para esse problema. Tente escolher acima.";
    }
});
