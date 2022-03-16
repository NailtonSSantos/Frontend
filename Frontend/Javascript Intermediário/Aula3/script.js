
//SELETORES - Ex: querySelector


//SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>Mudei o Título</i>'

//SELETOR POR TAG - ELE MUDA SOMENTE A PRIMEIRA OCORRÊNCIA/ELEMENTO
document.querySelector('a').innerText= '<b> Mudei o Link </b>' //innerText não reconhece tag. Comentar o link no innerHTML para ver o erro

document.querySelector('a').innerHTML= '<b> Mudei o Link </b>'

let teste = ['a', 'b', 'c']

teste.forEach(function(item){
    console.log(item)
})

//SELECIONANDO MAIS DE 1 ITEM POR TAG
let anconras = document.querySelectorAll('a')

//forEach percorre apenas Arrays, é um método apenas pra Arrays
anconras.forEach(function(elemento){ //Função Anônima ou Call Back = Uma função que passo pra outra função, e esta pode manipulá-la
    elemento.innerHTML = 'Teste'
})

//SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

let count
boxes.forEach(function(box, index){
    box.innerHTML = 'BOX ' + (index +1)
})