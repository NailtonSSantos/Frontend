

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    //console.log(document.forms['formCadastro']
    //console.log(document.forms['formCadastro']['nome']

    let temErro = false

    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value){
        temErro = true
        inputNome.classList.add('inputError')
        let spanNome = inputNome.nextSibling.nextSibling
        spanNome.innerText = 'Digite o Nome corretamente'
        
    } else {
        inputNome.classList.remove('inputError')
        let spanNome = inputNome.nextSibling.nextSibling
        spanNome.innerText = ''
    }
    
    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')
        let spanEmail = inputEmail.nextSibling.nextSibling
        spanEmail.innerText = 'Digite o Email corretamente'
    } else {
        inputEmail.classList.remove('inputError')
        let spanEmail = inputEmail.nextSibling.nextSibling
        spanEmail.innerText = ''
    }
    
    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectCidade.value){
        temErro = true
        selectCidade.classList.add('inputError')
        let spanSelectCidade = selectCidade.nextSibling.nextSibling
        spanSelectCidade.innerText = 'Selecione uma cidade'
    } else {
        selectCidade.classList.remove('inputError')
        let spanSelectCidade = selectCidade.nextSibling.nextSibling
        spanSelectCidade.innerText = ''
    }

    if (!temErro){
        formulario.submit()
    }
}