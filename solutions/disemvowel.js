// write a function that takes in a string and returns the string with all the vowels removed.

function disemvowel (str) {
  let result = []
  let vowels = 'aeiou'.split('')
  let letters = str.split('')

  for (var i = 0; i < letters.length; i++) {
    if (!vowels.includes(letters[i])) {
      result.push(letters[i])
    }
  }
  return result.join('')

}

console.log(disemvowel('javascript')) // => jvscrpt