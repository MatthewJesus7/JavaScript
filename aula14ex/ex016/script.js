var botao = window.document.getElementById('contar')

botao.addEventListener('click', contar)

function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('saida')

    if (inicio.value <= 0|| fim.value <= 0 || passo.value <= 0 || inicio.value > fim.value) {
        window.alert('Impossivel contar!')
    } else {

        var nuini = Number(inicio.value)
        var nufim = Number(fim.value)
        var pass = Number(passo.value)
        var resultado = ''
        while (nuini <= nufim) {
            resultado += `${nuini} &#x1F449; `
            nuini = nuini + pass
        }
        res.innerHTML = resultado + ('&#9872;')
    }
}

