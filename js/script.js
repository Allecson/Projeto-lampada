const imagem = document.getElementById('img')
const btn=document.getElementById('button1')
let quebrada = false
function ligar(){
    if(quebrada) return
    const novoSrc='ligada.jpg'
    btn.textContent='DESLIGAR'
    imagem.src = novoSrc
}

function desligar(){
    if(quebrada) return
    const novoSrc='desligada.jpg'
    btn.textContent='LIGAR'
    imagem.src = novoSrc
}
function quebrar(){
    quebrada=true
    const novoSrc='quebrada.jpg'
    imagem.addEventListener('dblclick' , function(){
        imagem.src = novoSrc
        btn.textContent='QUEBRADA'
    })  
}
function onOff(){
    if(quebrada) return
    if(btn.textContent === 'LIGAR'){
        ligar()
        btn.textContent = 'DESLIGAR'
    }else {
        desligar()
        btn.textContent = 'LIGAR'
    }
}

imagem.addEventListener('mouseover',ligar)
imagem.addEventListener('mouseout',desligar)
