
const botoesCarrossel = document.querySelectorAll(".conteudo__carrosselbotoesitem");

const imagens = document.querySelectorAll(".carrossel__imagem");


botoesCarrossel.forEach((botao, i) => {
  botao.addEventListener('click', () =>{
    
    desativarBotaoSelecionado();

    selecionarBotaoCarrossel(botao);

    esconderImagemAtiva();

    mostrarImagemFundo(i);
  })
})

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".conteudo__carrosselbotoesitem--selecionado");
  
  botaoSelecionado.classList.remove("conteudo__carrosselbotoesitem--selecionado");
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add("conteudo__carrosselbotoesitem--selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".carrossel__imagem--ativa");

  imagemAtiva.classList.remove("carrossel__imagem--ativa");
}

function mostrarImagemFundo(i) {
  imagens[i].classList.add("carrossel__imagem--ativa");
}