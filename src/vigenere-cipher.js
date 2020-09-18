const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.isStraight = isStraight
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }

  encrypt(message, key) {
    let result = []
    if (!message || !key) throw new Error('Not anougth parametres')

    message = message.toUpperCase().split('')
    key = key.toUpperCase().split('')

    while (key.length  < message.length) {
      key = key.concat(key)
    }
    let j = 0
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        result[i] = message[i]
        continue
      }
      result[i] = this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[j])
      j++
      if (result[i] >= 26) result[i] -= 26
      result[i] = this.alphabet[result[i]]
    }
    if(this.isStraight) {
      return result.join('')
    } else {
      return result.reverse().join('')  
    }
    
  }    

  decrypt(message, key) {
    let result = []
    if (!message || !key) throw new Error('Not enough parameters')
  
    message = message.toUpperCase().split('')
    key = key.toUpperCase().split('')
     
    while (key.length  < message.length) {
      key = key.concat(key)
    }
    let j = 0
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        result[i] = message[i]
        continue
      }
      result[i] = this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[j])
      j++
      if (result[i] < 0) result[i] += 26
      result[i] = this.alphabet[result[i]]
    }
    if(this.isStraight) {
      return result.join('')
    } else {
      return result.reverse().join('')  
    } 
  }
}


module.exports = VigenereCipheringMachine;
