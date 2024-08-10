const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')
const descricoes = document.querySelectorAll('.informacoes')

botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        const imagemAtual = document.querySelector('.ativa')
        const botaoAtual = document.querySelector('.selecionado')
        const informacaoAtiva = document.querySelector('.informacoes.ativa')

        botaoAtual.classList.remove('selecionado')
        imagemAtual.classList.remove('ativa')
        informacaoAtiva.classList.remove('ativa')

        imagens[i].classList.add('ativa')
        botoesCarrossel[i].classList.add('selecionado')
        descricoes[i].classList.add('ativa')
    })
})