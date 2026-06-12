const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nome = objFormDados.get('nome')
    let idade = Number(objFormDados.get('idade'))

    let situacaoidade = ''

    if (idade >= 18) {
        situacaoidade = `${nome}, você é maior de idade`
    } else {
        situacaoidade = `${nome}, você é menor de idade`
    }

    divResultado.innerHTML = situacaoidade
})