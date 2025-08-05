let amigo = {nome: 'José',
     sexo: 'M',
     peso: 85.4,
    engordar(p=0){           // se o p nao passar ele vai ser 0!!!
        console.log('Engordou!')
        this.peso += p             //this e referência ao objeto!!
     }
    }

amigo.engordar(2)                // . e referência por atributo!!


console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)     // pega apenas o nome!!