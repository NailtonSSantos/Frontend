//for (let contador = 0; contador <= 5000; contador++){
/*for (let i = 1; i <= 10; i++){
    document.write(`Hello World ${i} <br>`)
}*/

let opcoes

for (let i = 2022; i >= 1900; i--){
    opcoes += `<option>${i}</option>`
}
document.querySelector('#ano').innerHTML = opcoes


let lista = ''
//Tive que definir um valor em branco, pq a tag li, reconhece como undefined, e acrescenta esse valor na lista. Diferente da Tag anterior, a Option

let clientes = ['Nailton', 'Thiago', 'Rafaela', 'Rafael']
for(let i = 0; i <= clientes.length - 1; i++){
    lista += `<li>${clientes[i]}</li>`
}

document.querySelector('#listaDeClientes').innerHTML = lista