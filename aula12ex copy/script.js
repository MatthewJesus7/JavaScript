// var ver = window.document.getElementById('ver')

// ver.addEventListener('click', veridade)

// function veridade() {
//     var caixaano = window.document.getElementById('nasc')
//     var ano = Number(caixaano.value)
//     var res = window.document.getElementById('res')
//     var anoatual = new Date().getFullYear()

//     var masc = window.document.getElementById('sm')
//     var fem = window.document.getElementById('sf')

//     if (sm.checked) {
//         sexo = `um homem`
//     } else {
//         sexo = `uma mulher`
//     }

//     idade = anoatual - ano
//     res.innerHTML = `Detectamos ${sexo} de ${idade} anos`   
// }

// MINHA VERSÃO ACIMA

var ver = window.document.getElementById('ver')
ver.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1907) {
        window.alert('[ERRO]')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        // 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // Criamos um HTML através do JavaScript, e determinamos suas propriedades, dentro de uma função específica (Linhas 42 e 43).

        if (sex[0].checked) {
            genero = 'um homem'
            if (idade >=0 && idade < 10) {
                // criança
                // img.setAttribute('src', 'foto-bebe-m.png')
                // Configura a imagem que vai aparecer/ define o source da img
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // adulto
            } else {
                // idoso
            }
        } else
        genero = 'uma mulher'
        if (idade >=0 && idade < 10) {
            // criança
        } else if (idade < 21) {
            // Jovem
        } else if (idade < 50) {
            // adulto
        } else {
            // idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    // res.appendChild(img)
    // adicionar um elemento -> img
}
