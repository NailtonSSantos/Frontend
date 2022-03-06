

let quadrado = document.querySelector('.quadrado')

/*function minhaFuncao(){
    console.log('Mensagem')
}*/

//quadrado.onclick = minhaFuncao


//Detecta o movimento do Mouse dentro do quadrado
//quadrado.onmousemove = minhaFuncao


//Todas as vezes que o mouse entra no quadrado ele imprime a função
//quadrado.onmouseenter = minhaFuncao


//Todas as vezes que o mouse sai do quadrado ele imprime a função
//quadrado.onmouseout = minhaFuncao



//Objeto do Evento mostra os dados do Evento
/*function minhaFuncao(evento){
    //console.log(evento)
    console.log(evento.target.innerWidth)
}
quadrado.onclick = minhaFuncao*/



//Objeto do Evento também mostra os dados do Evento de Janela também
/*function minhaFuncao(evento){
    console.log(evento)
}
//Mostra o tamanho da Janela - resize
window.addEventListener('resize', minhaFuncao)*/



//Evento para descobrir qual tecla foi pressionada
function minhaFuncao(evento){
    //console.log(evento)
    console.log(evento.key)
}
window.addEventListener('keypress', minhaFuncao)

//JS events - pesquisa no google - Developers.mozilla.org ou w3schools



/*Para usar dessa forma...
quadrado.onclick = minhaFuncao

..no addEventListener, eu removo o "on":
window.addEventListener('keypress', minhaFuncao)*/