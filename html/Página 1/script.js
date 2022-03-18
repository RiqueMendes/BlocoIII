

/* 
podemos acessar por tag: getElementByTagName()
por id: : getElementById()
por nome: : getElementByName()
por classe: : getElementsByClasse() <- elementS por ter vários elementos
por seletor: : querySelector()
*/

let nome = window.document.getElementById('nome')
let email = documento.querySelecotr ('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
     
        let txt = document.querySelector('#txtNome')
        if(nome.value.length < 3){
        txtNome.innerHTML ='Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'black'
    }
}
function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail Invalido'
        
    }else {
        txtEmail.innerHTML = 'E-mail valido'
    }
    function validaAssunto(){
        let txtAssunto = document.querySelector('#assunto')

        if(assunto.value.length >= 10) {
            txtAssunto.innerHTML = 'nao ultrapassar 100 caracteres'
        }

    }

}

