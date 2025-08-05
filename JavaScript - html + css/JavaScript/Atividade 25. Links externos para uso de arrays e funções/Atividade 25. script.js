var num = window.document.getElementById('num')
var sel = window.document.getElementById('sel')
var res = window.document.getElementById('res')
var valores = []


function isnumero(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    } else {
        return false
    }

}
function inlist(num, valores){
    if(valores.indexOf(Number(num)) == -1){
        return true
    } else {
        return false
    }
}

function Add(){
    if(isnumero(num.value) && inlist(num.value, valores)){
            valores.push(Number(num.value))
            var item = window.document.createElement('option')             // cria opções para lista!!
            item.innerHTML = `Número ${num.value} adicionado!`          // escreve para colocar na lista!!
            sel.appendChild(item)                                        //adiciona valores na lista!!!!!
            res.innerHTML = ''
    }else{
        window.alert('Valor Inválido ou já encontrado na lista!!')
    }
    num.value = ''
    num.focus()                    // para focar no cursor do mouse piscante!!!
}


function Finalizar(){
     if(valores.length == 0){
        window.alert('[ERROR!]')
     } else {
        let tot = valores.length

        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var i=0; i<=valores.length; i++){         //var i in valores e mais prático para somar ae
            var n = Number(valores[i])
            if (!isNaN(n)){
            soma += n
            }
            if(n > maior){
                maior = n
            } if (n < menor){
                menor = n
            }
            media = soma / tot
        }



        res.innerHTML = ''
        res.innerHTML += `<p>A quantidade de valores na array é: ${tot}</p>`
        res.innerHTML += `<p>O maior número da lista é: ${maior}</p>`              //IMPORTANTE O += PARA CONCATENAR("JUNTAR!!")
        res.innerHTML += `<p>O menor número da lista é: ${menor}</p>`
        res.innerHTML += `<p>A soma dos números da lista é: ${soma}</p>`
        res.innerHTML += `<p>A média da soma dos números da lista é: ${media}</p>`
     }
}