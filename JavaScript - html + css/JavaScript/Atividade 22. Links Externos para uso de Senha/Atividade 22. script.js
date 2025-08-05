function verificar(){
   var s = window.document.getElementById('senha')

 if(s.value == 'azeite'){
    var url = 'https://www.tiktok.com/@mr_yanpror'; // Substitua pela URL que você deseja abrir
            window.open(url, '_blank') // Abre a URL em uma nova guia
 } else {
    window.alert('[ERROR!] Informe a Senha Válida')
 }


}


