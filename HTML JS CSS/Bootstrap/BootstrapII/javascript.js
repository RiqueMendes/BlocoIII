let nome = window.document.getElementById('nome')
let sobrenome = window.document.getElementById('sobrenome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
       } else {
           txtNome.innerHTML = 'Nome Válido'
           txtNome.style.color = 'green'
           nomeOk = true
       }

}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#txtSobrenome')
    if (sobrenome.value.length < 3) {
        txtSobrenome.innerHTML = 'Sobrenome Inválido'
        txtSobrenome.style.color = 'red'
       } else {
           txtSobrenome.innerHTML = 'Sobrenome Válido'
           txtSobrenome.style.color = 'green'
           sobrenomeOk = true
       }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    } else {
         txtAssunto.style.display = 'none'
         assuntoOk = true
    }
    function enviar() {
        if (nomeOk == true && assuntoOk == true) {
            alert ('Formulário enviado com sucesso!')
        } else {
            alert ('Preencha o formulário corretamente antes de enviar...')
        }
    }
}