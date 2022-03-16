function caixaDeMensagem(){
    let nome = prompt('Digite seu nome')
    let idade = prompt('Digite sua idade')

    if (idade >= 18){
        document.write(`<h1> Olá ${nome}, você é maior de idade </h1>`)
    } else {
        document.write(`<h1> Olá ${nome}, Você NÃO é maior de idade </h1>`)
    }
    if(nome == "Thomas Anderson" || nome == 'thomas anderson' || nome == 'Thomas anderson' || nome == 'thomas Anderson'){
        document.write(`<h3> Olá, ${nome}, você é o personagem de um filme famoso </h3>`)
    }
}