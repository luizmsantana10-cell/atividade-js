const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let num1 = parseFloat(objFormDados.get('num1'))
    let num2 = parseFloat(objFormDados.get('num2'))
    let num3 = parseFloat(objFormDados.get('num3'))

    let media = parseFloat(num1 + num2 + num3)/ parseFloat(3)
   

    divResultado.innerHTML = `A MEDIA É: ${media.toFixed(2).replace('.',',')} `

    formDados.reset()
})