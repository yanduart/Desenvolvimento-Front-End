function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var second = data.getSeconds()

            hora = hora < 10 ? '0' + hora : hora;
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;

            msg.innerHTML = 'Agora são ' + hora + ':' + minute + ':' + second + ' Horas';
    
    if(hora >= 0 && hora <= 12){
        //bom dia
        img.src = 'manha.jpg'
        window.document.body.style.background = '#dcedc8'
        saud = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.jpg'
        window.document.body.style.background = '#ffe0b2'
         saud = 'Boa Tarde!'
    } else {
        //boa noite
        img.src = 'noite.jpg'
        window.document.body.style.background = '#1e3d59'
         saud = 'Boa Noite!'
    }
     
    var saudação = window.document.getElementById('saudação')
    saudação.innerHTML = saud

}
setInterval(carregar, 1000); 



