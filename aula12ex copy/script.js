var agora = new Date()
var hora = agora.getHours

var horario = window.document.getElementById('horario')

if (hora < 12){
    horario.innerHTML = `Agora são ${hora}`
}