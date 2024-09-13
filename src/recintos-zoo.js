class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    let tipoAnimal = {
      LEAO: {
        nome: 'LEAO',
        tamanho: 3,
        biomas: ['savana'],
        carnivoro: true
      },
      HIPOPOTAMO: {
        nome: 'HIPOPOTAMO',
        tamanho: 4,
        biomas: ['savana', 'rio'],
        carnivoro: false
      },
      MACACO: {
        nome: 'MACACO',
        tamanho: 1,
        biomas: ['savana', 'floresta'],
        carnivoro: false
      },
      CROCODILO: {
        nome: 'CROCODILO',
        tamanho: 3,
        biomas: ['rio'],
        carnivoro: true
      },
      GAZELA: {
        nome: 'GAZELA',
        tamanho: 2,
        biomas: ['savana'],
        carnivoro: false
      },
      LEOPARDO: {
        nome: 'LEOPARDO',
        tamanho: 4,
        biomas: ['savana'],
        carnivoro: false
      }
    }
    let recintos = [
      {
        nome: 'Recinto 1',
        biomas: ['savana'],
        tamanho_total: 10,
        espaco_livre: 7,
        animais_existentes: ['MACACO', 'MACACO', 'MACACO']
      },
      {
        nome: 'Recinto 2',
        biomas: ['floresta'],
        tamanho_total: 5,
        espaco_livre: 5,
        animais_existentes: ['vazio']
      },
      {
        nome: 'Recinto 3',
        biomas: ['savana', 'rio'],
        tamanho_total: 7,
        espaco_livre: 6,
        animais_existentes: ['gazela']
      },
      {
        nome: 'Recinto 4',
        biomas: ['rio'],
        tamanho_total: 8,
        espaco_livre: 8,
        animais_existentes: ['vazio']
      },
      {
        nome: 'Recinto 5',
        biomas: ['savana'],
        tamanho_total: 9,
        espaco_livre: 6,
        animais_existentes: ['LEAO']
      }
    ]
    if (!tipoAnimal[animal]) return { erro: 'Animal inválido' }
    if (quantidade <= 0 || isNaN(quantidade))
      return { erro: 'Quantidade inválida' }
    let recintosViavel = []
    for (let indice = 0; indice < recintos.length; indice++) {
      const elemento = recintos[indice]
      if (quantidade > elemento.espaco_livre)
        return { erro: 'Não há recinto viável' }
      if (
        elemento.biomas.includes('rio') && // Verifica se o recinto tem o bioma 'rio'
        animal === 'CROCODILO' // Verifica se o animal é 'CROCODILO'
      ) {
        recintosViavel.push(
          `${elemento.nome} (espaço livre: ${elemento.espaco_livre} total: ${elemento.tamanho_total})`
        )
      }
    }
    if (recintosViavel.length > 0) {
      return { recintosViavel }
    }
    return { erro: 'Não há recinto viável' }
  }
}

// Exportando a classe para uso externo
export { RecintosZoo as RecintosZoo }
