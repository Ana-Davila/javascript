function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.jpg'; 
    window.document.body.style.background ='#e2cd9f' 
}
else if(hora >=12 && hora <=18){
    //Boa tarde
    img.src ='tarde.jpg';
    window.document.body.style.background='#b9846f'
}
else {
    //boa noite
    img.src = 'noite.jpg';
    window.document.body.style.background='#0f1519ff'
}
}