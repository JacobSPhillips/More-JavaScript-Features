// using a default param
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// using spread
const nums = [12, 1, 2, 3, 13, 23, 4, 5, 6, 7, 8]
Math.max(...nums)
Math.min(...nums)

const cats = ["olivia", "bo", "hazel"]
const dogs = ["pete", "ralph", "rocksy"]

const allPets = [...cats, ...dogs]


const feline = { legs: 4, family: "Felidea" }
const canine = { legs: 4, family: "Caninea", isFury: true }

const catDog = { ...feline, ...canine }

// using rest

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to ${gold}`)
    console.log(`Silver medal goes to ${silver}`)
    console.log(`Gold medal goes to ${everyoneElse}`)
}

