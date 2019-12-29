// https://repl.it/@istrate/WildJumpyBlocks
// Rollercoaster Tycoon

// FunCoaster 3000 is the most popular attraction at FunLand!
// Unfortunately, this means long lines.  Most people want to 
// get on the ride with their friends and family,
// so they want to be placed as groups, rather than individually.
// The problem for the ride ushers is that, often, the next 
// group in line is larger than the available seats on the next
// train.  That means empty seats - and angry line-waiters!

// Help the ride ushers seat groups more efficiently, by looking
// for the next group in line that will fit the available seats,
// until all seats are filled, or the end of the line is reached.

// 1. Write a function to naively place groups into trains - keep
// placing groups until the current group is larger than the
// available seats.  Assume groups are between 1 and 8 people, with
// a line of 100 people total. There are 16 seats per train.  
// The function takes an array of
// numbers, representing the sizes of the groups in line, and returns
// an array of trains.  Each train is a subarray of numbers, representing
// the group sizes in that train.  The groups and
// trains must be in correct order, the line starting at the beginning
// of the array.

// Example input: [3, 7, 2, 6, 1, 5]
// Example output: [[3, 7, 2], [6, 1, 5]]

// 2. Write a function to smartly place groups - keep placing groups until
// available seats are filled, or the end of the line is reached, only skipping
// groups too large to fit the available seats in the current train.

// Example input: [3, 7, 2, 6, 1, 5]
// Example output: [[3, 7, 2, 1], [6, 5]]

// 3. Determine the efficiency gains of the smart placement.  How many cars
// does it take to place 100 groups with the naive vs. the smart placement?

//1. 
// Example input: [3, 7, 2, 6, 1, 5]
// Example output: [[3, 7, 2], [6, 1, 5]]
const seatQueue2 = (queue) => {
  let sequenceOfTrains = []
  let individualTrain = []
  let availableSeats = 16
  queue.forEach((group, i) => {
      if (group <= availableSeats) {
        individualTrain.push(group)
        availableSeats -= group
      } else {
        sequenceOfTrains.push(individualTrain)
        individualTrain = [group]
        availableSeats = 16 - group
      }
  })
  if(individualTrain.length !== 0) sequenceOfTrains.push(individualTrain)
  return sequenceOfTrains
}
// TEST CASES
// console.log(seatQueue([8,8,8]))
// console.log(seatQueue([8,8,8,8]))
// console.log(seatQueue([8,8,8,8,8]))
// console.log(seatQueue([8,4,2,1,1,7,5,]))
// console.log(seatQueue([8,4,2,7,1,1,7,5,]))

//2. OPTIMIZATION
const seatQueue = (publicQueue) => {
  let queue = [...publicQueue]
  let sequenceOfTrains = []
  let individualTrain = []
  let availableSeats = 16
  queue.forEach((group, i) => {
      if (group <= availableSeats) {
        individualTrain.push(group)
        availableSeats -= group
      } else {
        fillCurrentTrain(queue, i+1, individualTrain)
        sequenceOfTrains.push(individualTrain)
        individualTrain = [group]
        availableSeats = 16 - group
      }
  })
  if(individualTrain.length !== 0) sequenceOfTrains.push(individualTrain)
  return sequenceOfTrains
}

const fillCurrentTrain = (queue, index, currentTrain) => {
  let numberOfPeople = currentTrain.reduce((a,b)=> a+b)
  for(let i=index; i < queue.length; i++){
    if(numberOfPeople === 16) break;
    if(numberOfPeople + queue[i] <= 16) {
      currentTrain.push(queue[i])
      numberOfPeople += queue[i]
      delete queue[i]
    }
  }
} 

const makeRandomQueue = () => {
  let queue = []
  for(let i=0; i < 100; i++){
    let random = Math.floor(Math.random() * 8) +1
    queue.push(random)
  }
  return queue
}


// TEST CASES
let randomQueue = makeRandomQueue()
console.log("RandomQueue: ", randomQueue.length)



let resultingSequence = seatQueue(randomQueue)
console.log("Result1: ",  resultingSequence.length)
let resultingSequence2 = seatQueue2(randomQueue)
console.log("Result2: ",  resultingSequence2.length)

// 100 - 28-31
//5 4 4 6 3 5


// console.log(seatQueue([8,8,8]))
// console.log(seatQueue([8,8,8,8]))
// console.log(seatQueue([8,8,8,8,8]))
// console.log(seatQueue([8,4,2,1,1,7,5,]))
// console.log(seatQueue([8,4,2,7,1,1,7,5,]))

// 8 4 2 1 1 , 7 7 , 5




// console.log(seatQueue([3, 7, 2, 6, 1, 5]))
//return new array of trains
//16 per train 