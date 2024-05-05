let num = [5, 8, 2, 9]

num.sort()
console.log(`Nosso vetor é o ${num[0]}`)

let posicao = num.indexOf(8)
if (posicao == -1) {
    console.log('o valor, não foi encontrado.')
} else {
   console.log(`O valor está na posição ${posicao}`) 
}

