const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Ajusta o canvas para o tamanho da tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras que vão cair (pode colocar números e símbolos)
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";

// Transformar em array
const lettersArray = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize; // número de colunas
const drops = [];

// Inicializa cada coluna
for(let x = 0; x < columns; x++) drops[x] = 1;

// Função de desenhar
function draw() {
    // Fundo preto sem apagar tudo, criando rastro
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // cor verde clássica (pode mudar por página)
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
        const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // reinicia a coluna depois de sair da tela
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

// Atualiza a cada 35ms
setInterval(draw, 35);

// Redimensiona o canvas ao redimensionar a tela
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
