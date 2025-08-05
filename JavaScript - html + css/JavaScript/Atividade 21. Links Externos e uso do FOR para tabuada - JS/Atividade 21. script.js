function calcular(){
      let Num = document.getElementById('Num')
      let tab = document.getElementById('seltab')

      if(Num.value.length == 0){
          window.alert('[ERROR!] Selecione um Valor!')
      } else {
          let n = Number(Num.value)
          tab.innerHTML = '' // Limpa o select antes de adicionar novos resultados
          c = 1
         while(c <= 10){
              let option = document.createElement('option')
              option.text = `${n} x ${c} = ${n * c}`
              tab.appendChild(option)   // adicionar!!!
              c++
         }    
      }
  }

