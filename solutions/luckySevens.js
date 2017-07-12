// write a function that takes in an array and returnts true if any of the consecutive numbers add up to 7

function luckySevens(arr) {
  for (var i = 0; i < arr.length; i++) {
    var answer = arr[i]
    for (var j = i+1; j < arr.length; j++) {
      answer += arr[j]
      if (answer === 7) {
        return true
      } else if (answer > 7) {
        answer = 0
      }
    }
  }

  if (answer === 7) {
    return true
  } else {
    return false
  }

}

console.log(luckySevens([1,2,5,3,5])) // => true
console.log(luckySevens([1,2,2,6])) // => false