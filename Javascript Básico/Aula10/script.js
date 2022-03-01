let inputNota1
let inputNota2
inputNota1 = prompt('Digite a primeira nota:')
inputNota2 = prompt('Digite a segunda nota:')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) /2

if (media >= mediaMinima) {
    document.write('Ok, Passou de Ano')
} else if (media < mediaMinima) {
    document.write('Ops, não passou de ano')
}

document.write('<br>')

if (media >= mediaMinima && media === 10){
    document.write(`Média: ${media}, NOSSA, você foi muito bem, continue assim!`)
} else if (media > mediaMinima && media === 9){
    document.write(`Média: ${media}, Você mandou bem, vamos tentar chegar na média 10?`)
} else if (media >= mediaMinima && media >= 7.5){
    document.write(`Média: ${media}, Você passou, mas não se conforme com essa nota, você é capaz de ir além!`)
} else if (media >= mediaMinima) {
    document.write(`Média: ${media}, Legal, você passou. Mas cuidado, foi por pouco!`)
} else {
    document.write(`Média: ${media}, Você não passou, que Pena!`)
}