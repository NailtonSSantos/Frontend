let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagens: 'Neo',
      filmes: 'The Matrix',
    },
    {
      nome: 'David Prowse',
      personagens: 'Darth Vader',
      filmes: 'Star Wars Episódios IV-VI',
    },
    {
      nome: 'Bruce Wayne',
      personagens: 'Batman',
      filmes: 'Batman - O Início'
    },
  ]

let htmlAtores = ''

for (let i = 0; i < listaAtores.length; i++){

    let ator = listaAtores[i]

    let nome = ator.nome
    let personagem = ator.personagens
    let filme = ator.filmes

    htmlAtores += `
      <div class = "actor">
        <h3>${nome}</h3><br>
        <p>Interpreta o personagem ${personagem} no Filme ${filme}</p>     
      </div>
    `
}

document.querySelector('#listaAtores').innerHTML = htmlAtores