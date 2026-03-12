const input = document.getElementById("input");
const output = document.getElementById("output");
const errorSound = document.getElementById("errorSound");
const crashContainer = document.getElementById("crashContainer");
const endCrash = document.getElementById("endCrash");

// Função de animação "dance"
function danceAnimation(){
    const steps = ["💃 ","🕺 ","🎵 ","💃 ","🕺 "];
    let i = 0;
    const interval = setInterval(()=>{
        output.innerHTML += steps[i];
        i++;
        if(i>=steps.length){
            clearInterval(interval);
            output.innerHTML += "\nSimulação de dança concluída!\n\n";
        }
        output.scrollTop = output.scrollHeight;
    }, 200);
}

// Função de ataque simulado
function attackSimulate(){
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

// Função crash avançada
function crashAdvanced() {
    endCrash.style.display = "block"; // mostrar botão de voltar
    let count = 0;
    const max = 50; // número de imagens
    const interval = setInterval(()=>{
        if(count>=max) { clearInterval(interval); return; }

        const img = document.createElement("img");
        img.src = "bsod.png"; // sua imagem de erro
        img.classList.add("crashImage");

        // posição aleatória
        img.style.top = Math.random()*window.innerHeight + "px";
        img.style.left = Math.random()*window.innerWidth + "px";
        img.style.width = "30px";
        img.style.height = "30px";
        crashContainer.appendChild(img);

        // animação para crescer
        setTimeout(()=>{
            img.style.width = "200px";
            img.style.height = "200px";
        }, 50);

        // toca som
        errorSound.currentTime = 0;
        errorSound.play();

        count++;
    }, 150);
}

// Comandos
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
    "crash": crashAdvanced
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

// Botão para encerrar crash
endCrash.addEventListener("click", ()=>{
    crashContainer.innerHTML = "";
    endCrash.style.display = "none";
});
