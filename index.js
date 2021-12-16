var alunos = [
  {
    nome: "Amanda",
    descricao: "",
    imagem: "",
    site: "",
    status: "desistiu"
  },
  {
    nome: "Breno",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Camille",
    descricao: "",
    imagem: "",
    site: "",
    status: "desistiu"
  },
  {
    nome: "Douglas",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Felipe",
    descricao: "",
    imagem: "",
    site: "",
    status: "desistiu"
  },
  {
    nome: "Guilherme",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Gustavo",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Iorrana",
    descricao: "",
    imagem: "",
    site: "",
    status: "desistiu"
  },
  {
    nome: "Lucca",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Matheus",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Nathália",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Nicolas",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Pedro",
    descricao: "",
    imagem: "",
    site: "",
    status: "desistiu"
  },
  {
    nome: "Stephanie",
    descricao: "",
    imagem: "",
    site: "",
    status: "desistiu"
  },
  {
    nome: "Vitória",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
  },
  {
    nome: "Yuri",
    descricao: "",
    imagem: "",
    site: "",
    status: "aprovado"
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

  main.appendChild(card);
});
