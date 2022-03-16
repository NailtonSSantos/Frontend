
let contador = document.querySelector('#contador')

let i = -1

let intervalo = setInterval(function(){
    i++
    contador.innerText = i
}, 1000)

let botaoPausar = document.querySelector('#botaoPausar')
let botaoContinuar = document.querySelector('#botaoContinuar')
let botaoReload = document.querySelector('#botaoReload')

botaoPausar.onclick = function(){
    window.clearInterval(intervalo)
}

botaoContinuar.onclick = function(){
    intervalo = setInterval(function(){
        i++
        contador.innerText = i
    }, 1000)
}

botaoReload.onclick = function(){
    i = -1
    //window.location.reload()
}