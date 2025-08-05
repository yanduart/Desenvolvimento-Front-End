let num = [30, 20, 10]

console.log(`Nosso vetor é o: ${num}`)

num[3] = 6

console.log(`Nosso vetor com Acrescimo é o: ${num}`)

num[0] = 4

console.log(`Nosso vetor com Alteração é o: ${num}`)

num.push(7)   // coloca no final!

console.log(`Nosso vetor com Acrescimo sem determinar a vaga é: ${num}`)

num[10] = 30

console.log(`Nosso vetor com Acrescimo mais à distante é: ${num}`)

num.push(7)   // coloca no final!

console.log(`Nosso vetor com Acrescimo sem determinar a vaga é: ${num}`)

console.log(`O comprimento do vetor é: ${num.length}`)   // determina o comprimento!!

// num.sort() // ordena os números em ordem crescente!!

// console.log(`A ordem crescente fica: ${num}`)

console.log('Ordem usando FOR!!')
for (var i = 0; i<num.length; i++){
    console.log(`Passo: ${num[i]}         ${i}º Posição do Vetor(array)`)
    if(num[i] == '30'){
        console.log('Salve!')
    }
}



//for simplificado

console.log('Forma simplificada do FOR!!')
for(let i in num){
    console.log(`A posição ${i}º tem exatamente o valor ${num[i]}`)
}


let pos = num.indexOf(7) // mostra que posição está o 7!!          // se nao tiver o valor da erro de -1!!
console.log(`Position ${pos}`)

// ou
console.log('Posições com valoes repetidos no Vetor')
let posicao = []
let j = 0
for(let i = 0; i<num.length; i++){
    if(num[i] == 7){
       posicao[j++] = i
    } 
}
 
console.log(`As posições são ${posicao}`)