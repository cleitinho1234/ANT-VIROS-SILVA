const input = document.getElementById("input");
const output = document.getElementById("output");
const errorSound = document.getElementById("errorSound");

// Cria elemento de crash
const crashScreen = document.createElement("div");
crashScreen.id = "crashScreen";
document.body.appendChild(crashScreen);

// Comandos simulados
const comandos = {
    'echo "hello world"': "Hello World",
    "date": new Date().toString(),
    "whoami": "guest_user",
    "pwd": "/home/guest_user",
    "uptime": "up 3 days, 4 hours, 12 minutes",
    "dance": "💃🕺🎵 Simulação de dança... 💃🕺🎵",
    "attack simulate": "Iniciando ataque simulado...\n[#####---------] 50%\nAtaque concluído (simulação).",
    "matrix": "Exibindo códigos caindo... (simulação)",
    "clear": function(){ output.innerHTML = ""; return ""; },
    "help": "Comandos disponíveis: echo \"hello world\", date, whoami, pwd, uptime, dance, attack simulate, matrix, crash, clear",
    "crash": function(){
        showCrashScreen();
        return "Tela travada! Erro crítico (simulação).";
    }
};

// Função para mostrar crash
function showCrashScreen() {
    crashScreen.style.display = "block";
    let erros = [];
    for(let i=0;i<200;i++){
        erros.push(`ERROR 0x${Math.floor(Math.random()*65535).toString(16).padStart(4,'0')} - Sistema instável`);
    }
    crashScreen.innerHTML = erros.join('<br>');
    // toca som de erro
    errorSound.play();
}

// Executa comando
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        const comando = input.value.trim().toLowerCase();
        let resposta;
        if(comandos[comando]){
            if(typeof comandos[comando] === "function") {
                resposta = comandos[comando]();
            } else {
                resposta = comandos[comando];
            }
        } else {
            resposta = "Comando não reconhecido. Digite 'help' para ver os comandos.";
        }

        output.innerHTML += `$ ${input.value}\n${resposta}\n\n`;
        input.value = "";
        output.scrollTop = output.scrollHeight;
    }
});
