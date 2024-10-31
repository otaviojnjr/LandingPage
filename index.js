var setaDireita = window.document.getElementById("seta-direita");
var leonardo = window.document.getElementById("Leonardo");
var samantha = window.document.getElementById("Samantha");
var bruna = window.document.getElementById("Bruna");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
  leonardo.style = "display:none";
  bruna.style = "display:flex";
  setaEsquerda.style = "display: flex; margin-top: 40%";
  setaDireita.style = "display: none";
}

function RolarParaEsquerda() {
  leonardo.style = "display: flex";
  bruna.style = "display: none";
  setaEsquerda.style = "display: none";
  setaDireita.style = "display: flex";
}
