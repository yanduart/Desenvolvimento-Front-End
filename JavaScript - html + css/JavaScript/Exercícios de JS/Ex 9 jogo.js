var dano 
var vida
function jogador(dano, vida=100){
    if(dano >= vida){
        console.log('Você morreu!')
    }else{
        console.log('Você permanesse vivo!')
        vida = vida - dano
        console.log(`Vida restante: ${vida}`)
    }
}

jogador(50)









