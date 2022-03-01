/*

string
number
boolean
array
object
undefined
null

*/

//tipo string
let nome = "Nailton"
console.log(nome)

//string concatenada
let sobrenome = "Silva"

//console.log(nome + " " + sobrenome)
//Atualmente usa-se String Literal, veja o exemplo:
console.log(`${nome} ${sobrenome}`)

//Number
let idade = 35
console.log(idade)
console.log(idade + 10)

//Float
let porcentagem = 10.2
console.log(`${porcentagem}%`)

//Boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//Array
let habilidades = ['Javascript', 'PHP', 'Python']
console.log(habilidades)
console.log(habilidades[0])
console.log(habilidades.length)

//Object
let pessoa = {
    nome: 'Rafaela',
    sobrenome: 'lima',
    idade: 22,
    habilidades: ['C', 'Python', 'Html', 'CSS']
}
console.log(pessoa.habilidades[2])

//Undefined
let endereco
console.log(endereco)

//Null
let cidade = null
console.log(cidade)