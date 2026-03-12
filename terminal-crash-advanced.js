const input = document.getElementById("input");
const output = document.getElementById("output");
const errorSound = document.getElementById("errorSound");
const crashContainer = document.getElementById("crashContainer");
const endCrash = document.getElementById("endCrash");

// Função dance
function danceAnimation() {
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

// Função ataque
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

// Função crash avançada
function crashAdvanced() {
    endCrash.style.display = "block"; // mostrar botão de voltar

    let maxImages = 50;
    for(let i=0;i<maxImages;i++){
        setTimeout(()=>{
            const img = document.createElement("img");
            img.src = "bsod.png";
            img.classList.add("crashImage");

            // Começa pequeno e aleatório
            let size = 20 + Math.random()*30; // tamanho inicial 20-50px
            img.style.width = size+"px";
            img.style.height = size+"px";
            img.style.top = Math.random()*(window.innerHeight - size) + "px";
            img.style.left = Math.random()*(window.innerWidth - size) + "px";
            crashContainer.appendChild(img);

            // Toca som
            errorSound.currentTime = 0;
            errorSound.play();

            // Anima crescimento e deslocamento aleatório
            setTimeout(()=>{
                img.style.transition = "all 2.5s ease";
                let newSize = 150 + Math.random()*200; // cresce 150-350px
                img.style.width = newSize+"px";
                img.style.height = newSize+"px";

                // deslocamento aleatório durante crescimento
                img.style.top = Math.random()*(window.innerHeight - newSize) + "px";
                img.style.left = Math.random()*(window.innerWidth - newSize) + "px";
            },50);

        }, i*150); // pequenas diferenças de tempo para espalhar
    }
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
