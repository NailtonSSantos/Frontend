let num = prompt('Digite o número da Tabuada que deseja visualizar')

for (let i = 1; i <= 10; i++){
    let calculo = (i * num)
    
    document.write(`<br>${num} x ${i} = ${calculo}`)
}

