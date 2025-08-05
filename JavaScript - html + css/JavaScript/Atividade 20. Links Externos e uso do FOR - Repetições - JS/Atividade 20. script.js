function contar(){
  let i = window.document.getElementById('txti')
  let f = window.document.getElementById('txtf')
  let p = window.document.getElementById('txtp')
  let res = window.document.getElementById('res')
  
 if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){   //length pegará o 0 do laço FOR!!
    res.innerHTML = 'Impossível Contar!'
    window.alert('[ERROR!] Insira os Dados!!')
 } else {
   res.innerHTML = 'Contando: <br>'
   let ini = Number(i.value) 
   let fin = Number(f.value)
   let pas = Number(p.value)
   if(pas <= 0){
      window.alert('Passo Inválido!! Considerando Passo = 1')
      pas = 1
   }
   if (ini < fin){
      //Contagem Crescente
   for(ini; ini<=fin; ini+=pas){
      res.innerHTML += ` ${ini} \u{1F449} ` //uso do emoji!! 
   }
   
} else {
   //Contagem Regressiva!
   for(ini; ini>=fin; ini-=pas){
      res.innerHTML +=  ` ${ini} \u{1F449} ` //uso do emoji!! 
   }
   
}
    res.innerHTML += `\u{1f3c1}`
 }

}

