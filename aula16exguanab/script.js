let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isnumero(num.value && !inlista(num.value, valores))) {
        valores.push(Number(num.value)) //Empurra os números para dentro de valores
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //Faz o item aparecer na lista
        res.innerHTML = '' //Vemos aqui um sinal de continuidade, logo após o appendChild, executa-se esse comando abaixo.
    }else {
        window.alert('Valor inválido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos] 
            } 
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando de todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
}  

