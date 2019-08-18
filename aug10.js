"use stict";
//OOPS  Class

// class Bank {
//   constructor() {
//     let balance = 0;

//     this.withdraw = function withdraw(amt) {
//       balance = balance - amt;
//       return balance 
//     }

//     this.deposit = function deposit(amt) {
//       balance = balance + amt;
//       return balance 
//     }

//     this.checkBal = function checkBal() {
//       return balance;
//     }
//   }
// }


// var steve = new Bank;

// console.log(steve.checkBal());
// console.log(steve.deposit(1));
// console.log(steve.deposit(1));


// console.log(steve.withdraw(12));

// console.log(steve.checkBal());

// steve.balance = 1000; // cant do that
// console.log(steve.checkBal())


//! inheritance encourage code reuse. inheriting 

// class Building {
//   constructor() {
//     let isFrontDoorOpen = false;

//     this.openDoor = function() {
//       isFrontDoorOpen = true;
//       console.log("The door is opening");
//     }

//     this.closeDoor = function() {
//       isFrontDoorOpen = false;
//       console.log("The door is closing");
//     }

//     this.doorStatus = function() {
//       if (isFrontDoorOpen) {
//         console.log("The door is OPEN!");
//       } else {
//         console.log("The door is CLOSED!");
//       }
//     }

//   }
// }

// let myHouse = new Building
// myHouse.openDoor()
// myHouse.closeDoor()
// myHouse.doorStatus()

//!
// class House extends Building {
//   constructor() {
//     super();
//     let garage = false;

//     this.closeGarage = function() {
//       garage = false; 
//       console.log("The garage is closed now");
//     }

//     this.openGarage = function() {
//       garage = true;
//       console.log("The garage is open now")
//     }

//     this.garageStatus = function() {
//       (garage) ? console.log("The garage is open") : console.log("The garege is closed.");
//     }

//   }
// }



// var crib = new House;

// crib.doorStatus();
// crib.openDoor();
// crib.doorStatus();
// crib.garageStatus();
// crib.openGarage();