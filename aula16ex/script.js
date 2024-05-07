const entrada = window.document.getElementById('inuen');
const botaoadd = window.document.getElementById('add');
const saida = window.document.getElementById('inusa');

let arnum = []

botaoadd.addEventListener('click', addnum)
function addnum() {
let num = Number(entrada.value)

if (num < 1 || num > 100) {
    window.alert('Número invalido!')
}else {
    let opt = document.createElement('option')
    opt.text = `Valor ${num} adicionado.`
    saida.appendChild(opt)
    arnum.push(num)
}
}

const botaofin = window.document.getElementById('fin');
botaofin.addEventListener('click', analisar)

function analisar() {
    let fim = window.document.getElementById('fim')
    // fim.innerHTML += `Ao todo, temos ${arnum.length} Números cadastrados`
    for (let i = 0; i < arnum.length; i++) {
        fim.innerHTML += `${arnum[i]}`
        arnum.sort()
    }
}
