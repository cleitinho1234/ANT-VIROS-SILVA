const botoes = document.querySelectorAll('#botoes-problemas button');
const solucao = document.getElementById('solucao');
const inputProblema = document.getElementById('input-problema');
const btnBuscar = document.getElementById('btn-buscar');

const modal = document.getElementById('modal');
const textoSolucao = document.getElementById('texto-solucao');
const fechar = document.getElementById('fechar');
const btnCopiar = document.getElementById('btn-copiar');

// Dados dos problemas e soluções detalhadas
const dados = {
    "android-xiaomi": {
        "Modelos Gerais, Redmi, Poco": [
            "**Superaquecimento e Bateria:** Comum em intermediários (linha Note) e flagships sob uso intenso (jogos/5G), resultando em degradação rápida da bateria.\nSolução: Remova a capa, interrompa jogos pesados, desative 5G se não necessário, feche apps em segundo plano.",
            "**Bloatware e Performance:** Grande quantidade de apps pré-instalados (Xiaomi/MIUI/HyperOS) gera consumo de memória.\nSolução: Desative ou desinstale apps pré-instalados que não utiliza para melhorar a velocidade.",
            "**Bugs de Sistema (HyperOS/Android):** Falhas na câmera frontal, travamentos no gerenciamento de arquivos e apps nativos fechando sozinhos.\nSolução: Reinicie o dispositivo e limpe cache de apps.",
            "**Fim do Suporte:** Alguns modelos (Redmi Note 12, Poco X5) perderão atualizações de segurança em 2026.\nSolução: Atualize para a versão mais recente do sistema enquanto disponível ou considere substituir o aparelho futuramente.",
            "⚠️ Se nada funcionar, leve o dispositivo a um técnico autorizado."
        ]
    },
    "iphone": {
        "iPhone 13-15 e Outros": [
            "**Drenagem de Bateria (Pós-update):** Comum após atualizações do iOS 26.\nSolução: Verifique apps que consomem mais energia, reinicie o aparelho e ative modo baixo consumo.",
            "**Falhas de Conexão:** Problemas com CarPlay, Wi-Fi, Bluetooth e erros de 'Nenhum SIM Instalado'.\nSolução: Reinicie o aparelho, redefina ajustes de rede em Ajustes > Geral > Redefinir.",
            "**Tela Colorida da Morte:** Relatada em iPhone 13, a tela exibe cor sólida e trava.\nSolução: Reinicie, se persistir, procurar assistência técnica.",
            "**Lentidão e Travamento:** iPhone 15 e anteriores podem apresentar lags, Face ID falhando.\nSolução: Atualize para a versão mais recente do iOS e reinicie.",
            "⚠️ Se nada funcionar, leve o dispositivo a um técnico autorizado."
        ]
    },
    "comum-ambos": {
        "Android & iOS": [
            "**Falhas de Hardware:** Problemas na tela (toque fantasma, manchas) devido a quedas ou defeitos de fabricação.\nSolução: Leve a assistência autorizada.",
            "**Botão Power/Conexão:** Dificuldades no botão de energia e oxidação/sujeira na porta de carregamento (USB-C).\nSolução: Limpe a porta com cuidado e use assistência se persistir.",
            "**Vulnerabilidades de Segurança:** Riscos de execução remota de código em componentes de áudio.\nSolução: Mantenha o sistema atualizado e instale patches de segurança.",
            "⚠️ Se nada funcionar, procure um técnico autorizado imediatamente."
        ]
    }
};

// Função para mostrar o modal
function mostrarModal(lista) {
    textoSolucao.innerHTML = lista.map(item => `<p>${item}</p>`).join('');
    modal.style.display = "block";
}

// Fechar modal
fechar.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if(event.target==modal) modal.style.display="none"; }

// Copiar solução
btnCopiar.onclick = () => {
    const text = textoSolucao.innerText;
    navigator.clipboard.writeText(text).then(()=> alert("Solução copiada!"));
}

// Gerar botões de modelos
function gerarSolucao(problema) {
    let modelos = dados[problema];
    let html = `<h3>Selecione seu modelo:</h3>`;
    for(let modelo in modelos) {
        html += `<button onclick='mostrarModal(dados["${problema}"]["${modelo}"])'>${modelo}</button>`;
    }
    return html;
}

// Clique nos botões principais
botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        let problema = btn.getAttribute('data-problema');
        solucao.innerHTML = gerarSolucao(problema);
    });
});

// Busca por problema digitado
btnBuscar.addEventListener('click', () => {
    let texto = inputProblema.value.toLowerCase();
    let encontrado = false;
    for(let chave in dados) {
        if(texto.includes(chave.replace("-", " "))) {
            solucao.innerHTML = gerarSolucao(chave);
            encontrado = true;
            break;
        }
    }
    if(!encontrado){
        solucao.innerHTML = "Não encontramos uma solução rápida para esse problema. Tente escolher acima.";
    }
});
