// var criar = window.document.getElementById('mostrarnum')

// criar.addEventListener('click', criartabuada)

// function criartabuada() {
//     var caixanumero = window.document.getElementById('inumero')
//     var num = Number(caixanumero.value)

//     if (num == 0) {
//         window.alert('Insira um valor valido! O valor não pode ser 0.')
//     } else {
//         var tabuada = window.document.getElementById('tabuada')
//         tabuada.innerHTML = ''
//         for (var i = 1; i <= 10; i++) {
//             var res = num * i
//             tabuada.innerHTML += num + " x " + i + " = " + res + "<br>";
//         }
//     }
// }

// // Minha versão com ajuda do gpt

var gertab = window.document.getElementById('gt')
gertab.addEventListener('click', tabuada)

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let i = document.createElement('option')
            
        }
    }
}