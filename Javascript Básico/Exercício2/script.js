let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

if (idade >= 18){
    document.write(`Olá ${nome}, você é maior de idade`)
} else {
    document.write(`Olá ${nome}, Você NÃO é maior de idade`)
}
if(nome == "Thomas Anderson" || nome == 'thomas anderson' || nome == 'Thomas anderson' || nome == 'thomas Anderson'){
    document.write(`<br> Olá, ${nome}, você é o personagem de um filme famoso`)
}