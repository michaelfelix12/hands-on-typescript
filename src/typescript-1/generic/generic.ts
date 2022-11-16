//Generic memberikan kita sebuah batasan dalam memberikan tipe data

function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random() * theArray.length)
    return theArray[randomIndex]
}

let positions = [20, 23, 24]
let randomPosition = randomElem(positions)

let colors = ['red', 'green', 'yellow']
let randomColor = randomElem(colors)

console.log(randomPosition)
console.log(randomColor)