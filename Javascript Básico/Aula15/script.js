//Parâmetros ou argumentos, é a mesma coisa

/*function escreverNoConsole(){
    console.log('Hello World')
}
function escreverNoConsole2(mensagem){
    console.log(mensagem)
}
escreverNoConsole()
escreverNoConsole2('Oi')
escreverNoConsole2('Testando Funções')
escreverNoConsole2('Hello World')*/

function escreverNoConsole(mensagem, nome){
    console.log(`Olá ${nome}, ${mensagem}`)
}

escreverNoConsole('Seja muito bem-vindo(a)!', 'Nailton')

//Console.log, parseInt são funções, inclusive precisam de parâmetros
console.log(parseInt('12'))