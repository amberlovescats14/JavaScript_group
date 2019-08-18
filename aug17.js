//NOT USING ANY BUILT IN FUNCTIONS

let cars = [{
  brand: 'mazda',
  miles: 5000
},{
  brand: 'ford',
  miles: 100000
},{
  brand: 'honda',
  miles: 40000
},{
  brand: 'hyundai',
  miles: 0
}]

// Find the honda object, given an array of car objects, using a for loop (do not use built-in array functions).  Let the result be null if there's no honda in the array.

// in a function

function findHonda(cars) {
  for(let car of cars) {
    if(car.brand === 'honda') {
      return car
    }
  }
  return null
}

// in scope

let honda = null

for(let car of cars) {
  if(car.brand === 'honda') {
    honda = car
  }
}

// console.log(findHonda(cars))
// console.log(honda)


// Practice: Make an array of animal objects, each with "species" and "averageLifespan" properties.  Find the lion object, both with a function, and in scope, using a for loop (do not use built-in array functions).

const animals = [
  {
    species: 'cat',
    lifeSpan: 18
  },
  {
    species: 'dog',
    lifeSpan: 12
  },
  {
    species: 'fish',
    lifeSpan: 2
  },
  {
    species: 'lion',
    lifeSpan: 12
  }
]
const getLion = arr => {
for(let animal of animals){
  if(animal.species === 'lion') return animal
}
  return null
}
// console.log(getLion(animals))

let myFavorite;
for(let animal of animals) {
  if(animal.species === 'lion') myFavorite = animal
}
// console.log(myFavorite)
// Find the car with the highest number of miles



let currentMaximumMiles = 0
let currentMaximumCar = null

for(let car of cars) {
  if(car.miles > currentMaximumMiles) {
    currentMaximumCar = car
    currentMaximumMiles = car.miles
  }
}

// console.log(currentMaximumCar)


// Practice: Find the animal with the shortest average lifespan.
let longestLife = -1
let currentAnimal;

for(let animal of animals ){
  if(animal.lifeSpan > longestLife ) {
    longestLife = animal.lifeSpan
    currentAnimal = animal
  }
}
// console.log(longestLife)
// console.log(currentAnimal)


// Sort the array by highest miles first, using a loop (do not use built-in array sort functions).


function findCarWithHighestMiles(cars) {
  let currentMaximumMiles = -1
  let currentMaximumCar = null

  for(let car of cars) {
    if(car.miles > currentMaximumMiles) {
      currentMaximumCar = car
      currentMaximumMiles = car.miles
    }
  }

  return currentMaximumCar
}


let sortedCars = []

while(cars.length > 0) {
  let maximumCar = findCarWithHighestMiles(cars)
  sortedCars.push(maximumCar)
  let maximumIndex = cars.indexOf(maximumCar)
  cars.splice(maximumIndex, 1)
}

// console.log(sortedCars)
// console.log(cars)


//! Practice: Sort the animals array from shortest to longest lifespan.
// const findLongestLife = arr => {
//   let longestLife = -1
//   let animalWithLongest;
//   for(let a of arr){
//     if(a.lifeSpan > longestLife){
//       longestLife = a.lifeSpan
//       animalWithLongest = a
//     }
//   }
//   return animalWithLongest
// }
// let sortedAnimals = []

// while(animals.length > 0){
//   let maxAnimal = findLongestLife(animals)
//   sortedAnimals.unshift(maxAnimal)
//   let indexOfAnimal = animals.indexOf(maxAnimal)
//   animals.splice(indexOfAnimal, 1)
// }
// console.log(sortedAnimals)


// Get an array of cars that have a hatchback option.

// let cars = [{
//   brand: 'mazda',
//   miles: 5000,
//   hatchbackOption: true
// },{
//   brand: 'ford',
//   miles: 100000,
//   hatchbackOption: false
// },{
//   brand: 'honda',
//   miles: 40000,
//   hatchbackOption: true
// },{
//   brand: 'hyundai',
//   miles: 0,
//   hatchbackOption: false
// }]


//! Practice: Add a "mammal" boolean property to your animals.  Find the mammals in the array.

for(let animal of animals){
  if(animal.species == 'fish' || 
      animal.species === 'reptile') animal.mammal = false
  else animal.mammal = true
}
console.log(animals)

