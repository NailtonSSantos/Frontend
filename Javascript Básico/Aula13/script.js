let clientes = [
    {
        nome: 'Nailton',
        idade: 25,
        linguagens: ['Javascript', 'Python', 'Java']
    },
    {
        nome: 'Rafaela',
        idade: 22,
        linguagens: ['HTML', 'CSS', 'SASS']
    },
    {
        nome: 'Danniel',
        idade: 20,
        linguagens: ['AWS', 'Python', 'Javascript']
    },
]

/*for (let i = 0; i < clientes.length; i++){
    console.log(clientes[i].nome)
}*/
let htmlClientes = ''

for(let cliente of clientes){
    let listaLinguagens = ''

    for (let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
        <li>
            <b>Nome: </b>${cliente.nome} <br>
            <b>Idade: </b>${cliente.idade} <br>
            <b>Linguagens: </b> <br>
            <ul>
               ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes