

let toast = document.querySelector('.toast')

let botaoCadastrar = document.querySelector('#botaoCadastrar')

let tarefa = document.getElementsByTagName('.tarefa')


function removerToast(){
    toast.classList.remove('visible')
}

botaoCadastrar.onclick = function(){

    console.log(tarefa)

    toast.classList.add('visible')
    setTimeout(removerToast, 4000)
}