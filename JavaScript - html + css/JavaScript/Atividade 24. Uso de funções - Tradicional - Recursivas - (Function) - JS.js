function parimp(n){
    if(n%2==0){
        return 'Esse número e par!'               // par ou impar!!
    } else {
        return 'Esse número é impar!'
    }
}
var res = parimp(13)
console.log(res)





function soma(n1=0, n2=0){           // soma!!
    return n1 + n2
}

console.log(soma(2,3))




var v = function(x){       // da para armazenar função na variável!!
    return x*2
}
console.log(v(5))





function fatorial(n){          // fatorial tradicional!!
   var fat = 1
   var resul = 1
   for (n; n >= fat; n--){
      resul *= n
   } 
   return resul
}

console.log(fatorial(6))





function fat(n){
    if(n == 1){
        return n     // e usado o 1!!
    } else {
        return n * fat(n-1)      // função recursiva!!
    }
}

console.log(fat(5))