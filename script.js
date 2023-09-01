const handleEvent = document.querySelector(".template1")
const handleEvent2 = document.querySelector(".template2")

const elementoPhrase = document.getElementById("title");
const elementoPhrase2 = document.getElementById("author");
const elementoPhrase3 = document.getElementById("phrase")
const botao = document.getElementById("button");
const callPhrase = document.querySelector("#callPhrase")


const phrases = [
    {
        title: "Não espere, ponha em prática!",
        phrases: "Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.",
        author: "Frank Tibolt"
    },
    {
        title: "Mesmo que pareça difícil, não pare!",
        phrases: "Não importa que você vá devagar, contanto que você não pare.",
        author: "Confúcio"
    }, {
        title: "Só trabalhando é possível trilhar o caminho!",
        phrases: "A inspiração existe, porém temos que encontrá-la trabalhando.",
        author: "Pablo Picasso"
    }, {
        title: "Tenha coragem!",
        phrases: "Coragem é saber o que não temer.",
        author: "Platão"
    }, {
        title: "Descubra quem você realmente é…",
        phrases: "Conhecer a si mesmo é o começo de toda sabedoria.",
        author: "Aristóteles"
    }, {
        title: "Não espere que as respostas caiam do céu!",
        phrases: "Acredite em milagres, mas não dependa deles.",
        author: "Immanuel Kant"
    }, {
        title: " Veja sempre o que há de positivo nas coisas!",
        phrases: "Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.",
        author: "Paulo Coelho"

    }, {
        title: "Não seja vítima das dificuldades, tente ultrapassá-las!",
        phrases: "A vida é 10% o que acontece a você e 90% como você reage a isso.",
        author: "Charles Swindoll"
    }, {
        title: "Desistir à primeira é para os fracos, tente sempre mais uma vez!",
        phrases: "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
        author: "Thomas Edison"
    }, {
        title: " Enxergue outros pontos de vista, e tenha sempre presente o objetivo final!",
        phrases: "Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.",
        author: "Wayne Dyer"
    },
];

botao.addEventListener("click", alterarFrase);

callPhrase.addEventListener("click", toggleScreen)


function alterarFrase() {

    let randomNumber = Math.round(Math.random() * 10)

    elementoPhrase.textContent = phrases[randomNumber].title;
    elementoPhrase2.textContent = phrases[randomNumber].author;
    elementoPhrase3.textContent = phrases[randomNumber].phrases;

}
function toggleScreen(event) {
    event.preventDefault()

    alterarFrase()
    handleEvent.classList.toggle("hide")
    handleEvent2.classList.toggle("hide")
}
