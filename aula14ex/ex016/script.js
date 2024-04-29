var botao = window.document.getElementById('contar')

botao.addEventListener('click', contar)

function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('saida')

    if (inicio.value <= 0|| fim.value <= 0 || passo.value <= 0 || inicio.value > fim.value) 
    // Falta de concisão (antes)
{
        window.alert('Impossivel contar!')
    } else {

        var nuini = Number(inicio.value)
        var nufim = Number(fim.value)
        var pass = Number(passo.value)
        var resultado = ''
        // Não havia colocado uma string vazia, isso fazia o número mudar a cada contagem, e mostrando apenas o último
        while (nuini <= nufim) {
            resultado += `${nuini} &#x1F449; `
            // Não tinha colocado espaço dentro da string após o emogi
            nuini = nuini + pass
        }
        res.innerHTML = resultado + ('&#9872;')
        // Não coloquei isso pois não havia colocado o resultado.
    }
}

// 3 erros no total.

