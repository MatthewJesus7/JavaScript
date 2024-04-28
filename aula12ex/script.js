corpo.addEventListener('load', carregar())

function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora são ${hora}h${min}`

hora = 16

if (hora < 6){
    img.src = "imagens/madrugada.jpg"
    document.body.style.background = '#102A37'
} else {
    if (hora < 12) {
        img.src = "imagens/manha.jpg"
        document.body.style.background = '#98A1A0'
} else {
    if (hora < 18) {
        img.src = "imagens/tarde.jpg"
        document.body.style.background = 'rgb(247, 128, 0)'
} else {
    img.src = "imagens/noite.jpg"
    document.body.style.background = '#011831'
}}}}