var res = window.document.getElementById('ress')

function check(){
     res.innerHTML += '<br>Acão <mark><strong>1</strong></mark> <ins>iniciada!</ins>'
}
function check2(){
    res.innerHTML += '<br>Ação <mark><strong>2</strong></mark> <ins>iniciada!</ins>'
}
function check3(){
    res.innerHTML += '<br>Ação <mark><strong>3</strong></mark> <ins>iniciada!</ins>'
}
var chec4 = 0
function check4(){
    res.innerHTML += '<br>Ação <mark><strong>4</strong></mark> <ins>iniciada!</ins>'
    Number(chec4) 
    chec4 += 1
    if(chec4 == 4){
        window.alert('Muitas ações em ação 4')
    }
    if(chec4 == 8){
        window.alert('Muitas ações em ação 4')
    } 

    if(chec4 == 12){
        window.alert('Muitas ações em ação 4')
    } 
}

