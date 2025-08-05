function verificar(){
  var agora = new Date()
  var ano = agora.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')
  var img = window.document.getElementById('img')
  if(fano.value == 0 || Number(fano.value) > ano){
    window.alert('[ERROR] Verifique se os dados estão corretos e tente novamente!')
  } else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'Masculino'
    } else if (fsex[1].checked){
        genero = 'Feminino'
    }
    res.style.textAlign = 'center'  // centraliza usando JavaScript!!
    res.innerHTML = `Idade Calculada: ${idade} anos - Gênero ${genero}`
  }  if (idade >= 0 && idade <= 12 && genero == 'Masculino'){
    img.src = 'criança m.jpg'
  } else if (idade >= 13 && idade <= 18 && genero == 'Masculino'){
    img.src = 'jovem m.jpg'
  } else if (idade >= 19 && idade <= 50 && genero == 'Masculino'){
    img.src = 'adulto m.jpg'
  } else if (idade >= 51 && genero == 'Masculino'){
  img.src = 'idoso m.jpg'
  }


   if (idade >= 0 && idade <= 12 && genero == 'Feminino'){
  img.src = 'criança f.jpg'
  } else if (idade >= 13 && idade <= 18 && genero == 'Feminino'){
  img.src = 'jovem f.jpg'
  } else if (idade >= 19 && idade <= 50 && genero == 'Feminino'){
  img.src = 'adulta f.jpg'
  } else if (idade >= 51 && genero == 'Feminino'){
  img.src = 'idosa f.jpg'
  }
}
