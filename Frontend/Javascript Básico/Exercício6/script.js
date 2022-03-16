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
                <h3>${nome}</h3>
                <p>Interpreta o Personagem ${personagem} no Filme ${filme}.</p>
            </div>
      `
  }

  const content = document.querySelector('#content')
  content.innerHTML = htmlAtores