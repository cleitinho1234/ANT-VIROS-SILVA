const input = document.getElementById("input");
const output = document.getElementById("output");
const crashScreen = document.getElementById("crashScreen");
const errorSound = document.getElementById("errorSound");

// Função para animação de "dança"
function danceAnimation() {
    let steps = ["💃 ","🕺 ","🎵 ","💃 ","🕺 "];
    let i = 0;
    const interval = setInterval(()=>{
        output.innerHTML += steps[i];
        i++;
        if(i>=steps.length) {
            clearInterval(interval);
            output.innerHTML += "\nSimulação de dança concluída!\n\n";
        }
        output.scrollTop = output.scrollHeight;
    }, 200);
}

// Função para ataque simulado
function attackSimulate() {
    const bars = ["[#####-----] 50%","[########--] 80%","[##########] 100%"];
    let i=0;
    const interval = setInterval(()=>{
        output.innerHTML += bars[i]+"\n";
        i++;
        if(i>=bars.length){
            clearInterval(interval);
            output.innerHTML += "Ataque simulado concluído!\n\n";
        }
        output.scrollTop = output.scrollHeight;
    }, 500);
}

// Comandos simulados
const comandos = {
    'echo "hello world"': "Hello World",
    "date": new Date().toString(),
    "whoami": "guest_user",
    "pwd": "/home/guest_user",
    "uptime": "up 3 days, 4 hours, 12 minutes",
    "dance": danceAnimation,
    "attack simulate": attackSimulate,
    "matrix": "Exibindo códigos caindo... (simulação)",
    "clear": function(){ output.innerHTML = ""; return ""; },
    "help": "Comandos disponíveis: echo \"hello world\", date, whoami, pwd, uptime, dance, attack simulate, matrix, crash, clear",
    "crash": function(){
        crashScreen.style.display = "flex";
        errorSound.play();
        return "";
    }
};

// Executa comando
input.addEventListener("keydown", function(e){
    if(e.key==="Enter"){
        const comando = input.value.trim().toLowerCase();
        let resposta;
        if(comandos[comando]){
            if(typeof comandos[comando]==="function"){
                resposta = comandos[comando]();
            } else {
                resposta = comandos[comando];
            }
        } else {
            resposta = "Comando não reconhecido. Digite 'help' para ver os comandos.";
        }
        if(resposta) output.innerHTML += `$ ${input.value}\n${resposta}\n\n`;
        input.value = "";
        output.scrollTop = output.scrollHeight;
    }
});
