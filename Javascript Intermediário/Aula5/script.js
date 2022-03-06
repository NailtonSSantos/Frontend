

let botaoTeste = document.querySelector('#botaoTeste')
let contador = 0

/*botaoTeste.onclick = function(){
    console.log('Mensagem 1')
}
botaoTeste.onclick = function(){
    console.log('Mensagem 2')
}*/

function cliqueBotao(){
    contador++
    console.log('Mensagem')

    if(contador >= 5){
        botaoTeste.removeEventListener('click', cliqueBotao)
    }
}

//addEventListener - Adicionar um evento de esculta
//Parâmetros: (Evento - click, e Função (pode chamar uma função anônima, "criar uma função", exemplo 1, ou chamar uma função pronta, exemplo 2)

//Exemplo 1: botaoTeste.addEventListener('click', cliqueBotao)

//Exemplo 2: botaoTeste.addEventListener('click', function(){
//  console.log('Mnesagem 1')
//})

botaoTeste.addEventListener('click', cliqueBotao)
//onclick
//botaoTeste.onclick = cliqueBotao


//removeEventListener - Posso usar para ele tirar o evento do botão, assim o botão só roda a função uma vez