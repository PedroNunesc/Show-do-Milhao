class Pergunta {
    constructor(id, texto, certa, erradas, premio) {
        this.id = id;
        this.texto = texto;
        this.respostaCerta = certa;
        this.respostasErradas = erradas;
        this.premio = premio;
    }
}

const perguntas = [
    new Pergunta(
        1,
        "Quais são as cores primárias?",
        "Vermelho, azul e amarelo",
        ["Vermelho, verde e azul", "Amarelo, verde e azul", "Vermelho, amarelo e verde"],
        "R$1.000,00"
    ),
    new Pergunta(
        2,
        "Em que ano o Brasil foi descoberto?",
        "1500",
        ["1480", "1550", "1822"],
        "R$2.000,00"
    ),
    new Pergunta(
        3,
        "Quanto é 9 x 8?",
        "72",
        ["64", "81", "83"],
        "R$3.000,00"
    ),
    new Pergunta(
        4,
        "Em que país ficam as pirâmides de Gizé?",
        "Egito",
        ["México", "Peru", "Índia"],
        "R$4.000,00"
    ),
    new Pergunta(
        5,
        "Quais são as duas seleções com mais títulos da Copa do Mundo depois do Brasil?",
        "Alemanha e Itália",
        ["Argentina e França", "Alemanha e Argentina", "Itália e França"],
        "R$5.000,00"
    ),
    new Pergunta(
        6,
        "Qual é o elemento químico mais abundante no universo?",
        "Hidrogênio",
        ["Oxigênio", "Carbono", "Nitrogênio"],
        "R$10.000,00"
    ),
    new Pergunta(
        7,
        "Qual é o menor osso do corpo humano?",
        "Estribo",
        ["Fêmur", "Bigorna", "Rádio"],
        "R$20.000,00"
    ),
    new Pergunta(
        8,
        "Quais são os três modos verbais da língua portuguesa?",
        "Indicativo, Subjuntivo e Imperativo",
        ["Presente, Passado e Futuro", "Ativo, Passivo e Reflexivo", "Simples, Composto e Perfeito"],
        "R$30.000,00"
    ),
    new Pergunta(
        9,
        "Qual é o maior deserto do mundo em área total?",
        "Antártida",
        ["Saara", "Deserto Árabe", "Gobi"],
        "R$40.000,00"
    ),
    new Pergunta(
        10,
        "Quem escreveu a obra filosófica 'A República'?",
        "Platão",
        ["Aristóteles", "Sócrates", "Descartes"],
        "R$50.000,00"
    ),
    new Pergunta(
        11,
        "Qual é a capital da Índia?",
        "Nova Délhi",
        ["Mumbai", "Bangalore", "Hyderabad"],
        "R$100.000,00"
    ),
    new Pergunta(
        12,
        "Qual destes números é primo?",
        "7919",
        ["7907", "7921", "7933"],
        "R$200.000,00"
    ),
    new Pergunta(
        13,
        "Qual destes nomes é de um povo indígena brasileiro?",
        "Yanomami",
        ["Ainu", "Cherokee", "Maori"],
        "R$300.000,00"
    ),
    new Pergunta(
        14,
        "Qual é considerado o maior animal terrestre que já existiu?",
        "Paraceratherium",
        ["Mammuthus", "Giraffatitan", "Argentinosaurus"],
        "R$400.000,00"
    ),
    new Pergunta(
        15,
        "Qual país tem a maior quantidade de ilhas no mundo?",
        "Suécia",
        ["Japão", "Estados Unidos", "Indonésia"],
        "R$500.000,00"
    ),
    new Pergunta(
        16,
        "Quem foi o primeiro medalhista olímpico brasileiro?",
        "Guilherme Paraense",
        ["Robert Scheidt", "Torben Grael", "Sérgio Vieira"],
        "R$1.000.000,00"
    )
];

let indiceAtual = 0;
let acertos = 0;

function embaralhar(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function mostrarPergunta() {

    const perguntaAtual = perguntas[indiceAtual];
    if (!perguntaAtual) return;

    document.getElementById("premio").textContent =
        "Prêmio atual: " + perguntaAtual.premio;

    document.getElementById("texto-pergunta").textContent =
        perguntaAtual.texto;

    const divRespostas = document.getElementById("respostas");
    divRespostas.innerHTML = "";

    const todasRespostas = [
        perguntaAtual.respostaCerta,
        ...perguntaAtual.respostasErradas
    ];

    const respostasEmbaralhadas = embaralhar(todasRespostas);
    const letras = ["A", "B", "C", "D"];

    respostasEmbaralhadas.forEach((resposta, index) => {

        const botao = document.createElement("button");
        botao.textContent = `${letras[index]}) ${resposta}`;

        botao.addEventListener("click", () => {
            verificarResposta(resposta);
        });

        divRespostas.appendChild(botao);
    });
}

function verificarResposta(respostaSelecionada) {

    const perguntaAtual = perguntas[indiceAtual];

    if (respostaSelecionada === perguntaAtual.respostaCerta) {

        acertos++;
        indiceAtual++;

        if (indiceAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            finalizarJogo(true);
        }

    } else {
        finalizarJogo(false);
    }
}

function finalizarJogo(ganhou) {

    localStorage.setItem("acertos", acertos);

    if (ganhou) {
        window.location.href = "vitoria.html";
    } else {
        window.location.href = "derrota.html";
    }
}

/* 🚀 INICIA O JOGO AUTOMATICAMENTE */
document.addEventListener("DOMContentLoaded", () => {
    mostrarPergunta();
});
