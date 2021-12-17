var alunos = [
  {
    nome: "Breno",
    descricao: "Grande fã de um tal de Flávio.",
    imagem: "imagens/breno.jpg",
    site: "https://breno-carlini-portifolio.netlify.app"
  },
  {
    nome: "Camille",
    descricao: "Minha internet tá uma #@$%!",
    imagem: "imagens/not_found.jpg",
    site: ""
  },
  {
    nome: "Douglas",
    descricao: "O garoto da chamada.",
    imagem: "imagens/not_found.jpg",
    site: ""
  },
  {
    nome: "Gustavo",
    descricao: "Fiscal de treino da turma.",
    imagem: "imagens/gustavo.jpg",
    site: "https://gustavowaki.netlify.app"
  },
  {
    nome: "Lucca",
    descricao: "Só agradece!",
    imagem: "imagens/lucca.jpg",
    site: "https://lucca-sabino.netlify.app"
  },
  {
    nome: "Matheus",
    descricao: "Tem foto, mas na real não sabemos quem é.",
    imagem: "imagens/matheus.jpg",
    site: ""
  },
  {
    nome: "Nathália",
    descricao: "Ta sempre quietinha.",
    imagem: "imagens/nathalia.jpg",
    site: "https://nathalia-ramos.netlify.app"
  },
  {
    nome: "Nicolas",
    descricao: "Conhece a banda Shaman?",
    imagem: "imagens/nicolas.jpg",
    site: "https://fichadonicolas.netlify.app"
  },
  {
    nome: "Pedro",
    descricao: "Pedro? Little? Cê tá ai?",
    imagem: "imagens/not_found.jpg",
    site: ""
  },
  {
    nome: "Vitória",
    descricao: "A grande defensora do frango.",
    imagem: "imagens/vitoria.jpg",
    site: ""
  },
  {
    nome: "Yuri",
    descricao: "Grande conhecedor de shoppings.",
    imagem: "imagens/yuri.jpg",
    site: "https://yuribatista.netlify.app"
  }
]

var main = document.querySelector("main");
var template = document.querySelector("template");

alunos.forEach((aluno) => {
  var card = template.content.cloneNode(true);

  var title = card.querySelector(".mdl-card__title-text");
  title.innerText = aluno.nome;

  var img = card.querySelector("img");
  img.src = aluno.imagem;

  var description = card.querySelector(".mdl-card__supporting-text");
  description.innerText = aluno.descricao;

  var button = card.querySelector(".mdl-button")

  if (aluno.site !== "") {
    button.href = aluno.site;
  } else {
    button.classList.add("disabled");
  }

  main.appendChild(card);
});
