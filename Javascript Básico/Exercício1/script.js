let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

if (idade >= 18){
    document.write(`Olá ${nome}, você é maior de idade`)
} else {
    document.write(`Olá ${nome}, Você NÃO é maior de idade`)
}