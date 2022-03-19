

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
function validaEmail() {

    let txt = document.querySelector('#txtEmail')
    let regex = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

    if (email.value.match(regex)){
        txt.innerHTML = "E-mail Válido";
        email.style.border = "3px solid green"
    } else {
        txt.innerHTML = "E-mail Inválido";
        email.style.border = "3px solid red"
    }
}



