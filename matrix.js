const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Ajusta canvas ao tamanho da tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras e símbolos
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()!<>?/|";
const lettersArray = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for(let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = matrixColor || "#0F0"; // cor da página
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
        const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
