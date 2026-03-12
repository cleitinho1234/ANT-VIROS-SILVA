const input = document.getElementById("input");
const output = document.getElementById("output");

// comandos simulados
const comandos = {
    "echo hello": "Hello World",
    "date": new Date().toString(),
    "whoami": "guest_user",
    "pwd": "/home/guest_user",
    "uptime": "up 3 days, 4 hours, 12 minutes",
    "help": "Comandos disponíveis: echo hello, date, whoami, pwd, uptime"
};

// envia comando
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        const comando = input.value.toLowerCase().trim();
        if(comandos[comando]){
            output.innerHTML += `$ ${comando}\n${comandos[comando]}\n\n`;
        } else {
            output.innerHTML += `$ ${comando}\nComando não reconhecido. Digite 'help' para ver os comandos.\n\n`;
        }
        input.value = "";
        output.scrollTop = output.scrollHeight;
    }
});

// copiar código do lado para input
const codeBlocks = document.querySelectorAll("#codes pre");
codeBlocks.forEach(block => {
    block.addEventListener("click", () => {
        input.value = block.textContent;
        input.focus();
    });
});
