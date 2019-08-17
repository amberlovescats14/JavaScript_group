// View this code at: https://repl.it/@istrate

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


// Practice: Sort the animals array from shortest to longest lifespan.




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


// Practice: Add a "mammal" boolean property to your animals.  Find the mammals in the array.