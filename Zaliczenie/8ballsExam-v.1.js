//               [0, 1, 2, 3, 4, 5, 6, 7] indexy
//               [1, 2, 3, 4, 5, 6, 7, 8] kolejnosc

// jak wybieram indeksy to maja byc losowo wybierane
// czyli nie  zawsze peirwsze 3  a losowe 3 z tablicy

const EightBalls = [1, 1, 1, 1, 1, 2, 1, 1];
const sentence = "Heavier position (from 1 to 8) is:"

console.log("EightBalls:", EightBalls);

function getMultipleRandom(EightBalls) {
  const randomIndex = Math.floor(Math.random() * 8) //randomowo wybiera miejsce 
  EightBalls[randomIndex] = 2

  return EightBalls
}

function weightOfSide(array, start, end) {
  return array.slice(start, end).reduce((sum, currentElement) => {
    return (sum += currentElement)
  }, 0)
}

function scale(array) {

  let FirstGroup = weightOfSide(EightBalls, 0, 3)
  console.log(FirstGroup)

  let SecondGroup = weightOfSide(EightBalls, 3, 6)
  console.log(SecondGroup)


  if (FirstGroup === SecondGroup) {
    if (array[6] > array[7]) {
      return `${sentence} 7`
    } else {
      return `${sentence} 8`
    }
  } else if (FirstGroup > SecondGroup) {
    if (array[0] === array[1]) {
      return `${sentence} 3`
    } else if (array[0] > array[1]) {
      return `${sentence} 1`
    } else {
      return `${sentence} 2`
    }
  } else if (SecondGroup > FirstGroup) {
    if (array[3] === array[4]) {
      return `${sentence} 6`
    } else if (array[3] > array[4]) {
      return `${sentence} 4`
    } else {
      return `${sentence} 5`
    }
  }
}
console.log(scale(getMultipleRandom(EightBalls)))