
const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach ((botao, indice) => {
    botao.addEventListener ('click' , () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
        
        mostrarImagemDeFundoAtiva(indice);
 })
})


function mostrarImagemDeFundoAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

