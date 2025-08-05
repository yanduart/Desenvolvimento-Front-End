var vel = 60.5
var nação = 'brasil'
console.log(`A velocidade do seu carro é ${vel}Km/h`)
console.log(`Dirija sempre usando cinto de segurança!`)
if(vel > 60.5){
      console.log('você ultrapassou a velocidade permitida. MULTADO!')
} else {
    console.log('Você está com a velocidade rasuável. PARABENS!')
}
console.log(`Essa pessoa vive na/o ${nação}`)
if(nação != 'Brasil' && nação != 'brasil'){
    console.log('Logo ela é estrangeria')
} else {
    console.log('Logo ela é Brasileira')
}