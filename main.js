const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");


const temposObjetivos = [
    new Date("2026-12-31T00:00:00"),
    new Date("2026-08-18T15:37:07"),
    new Date("2026-10-10T10:00:00"),
    new Date("2027-01-01T00:00:00")  
];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal < 0) {
        return "Prazo encerrado";
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

   
    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}


function atualizaContadores() {
    for (let i = 0; i < contadores.length; i++) {
        const objetivoAtual = temposObjetivos[i] || temposObjetivos[0];
       
        if (botoes[i].classList.contains("ativo")) {
            contadores[i].textContent = calculaTempo(objetivoAtual);
        }
    }
}


atualizaContadores();


for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
       
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
       
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

       
        atualizaContadores();
    };
}


setInterval(atualizaContadores, 1000);
