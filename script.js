'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111, 
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

//computing usernames
//const user = 'Stephen Thomas Williams'; //username should be: stw
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
  // console.log(accounts);
};
createUsernames(accounts);
/*
//filter()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits, `Deposits`);

//using for of to handle the same like above
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor, `using for of`);

//withdrawals usinf for of
// const withdrawals = [];
// for (const mov of movements) {
//   if (mov < 0) {
//     withdrawals.push(mov);
//   }
// // }
// console.log(withdrawals, `Withdrawals`);
//using filter
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);


//reduce() method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (
  accumulator,
  currentValue,
  index,
  array
) {
  // console.log(`Iteration ${index} : ${accumulator} and the Array is: ${array}`);
  console.log(`Iteration ${index} : ${accumulator}`);
  return accumulator + currentValue;
},
0);
console.log(`Accumulatated value: ${balance}`);

//maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and 
calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age *4);
// console.log(humanAges);
//filter dogs atleast 18 years old
const adults= humanAges.filter(age => age >= 18);
// console.log(humanAges);
// console.log(adults);

//  const average = adults.reduce((acc,age) => acc + age,0) / adults.length;
 const average = adults.reduce((acc,age,i,arr) => acc + age / arr.length,0);
return average;
};


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1,avg2);
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log('######## slice() ###############');
//slice() method
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']

console.log('######## splice() ###############');
//splice()
// console.log(arr.splice(2)); //['c', 'd', 'e']
// console.log(arr.splice(-1)); //removing last element
console.log(arr.splice(1, 2)); //picks from caharacter at index 1 and delete 2 elements
console.log(`Original array has been changed to:`, arr); //['a', 'b']

console.log('######## reverse() ###############');
//reverse()
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
console.log(arr2); //['f', 'g', 'h', 'i', 'j'] since it mutates to the new array
console.log('######## concat() ###############');
//concat()
const letters = arr.concat(arr2);
console.log(letters); //['a', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//join()
console.log('######## join() ###############');
console.log(letters.join('-')); //a-d-e-f-g-h-i-j


//at() method
//Early Version of getting array values
const arr = [23, 11, 64];
console.log(arr[0]);

//new version
console.log(arr.at(0));

//get last element, assuming you dont know the last value
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
//using at()
console.log(arr.at(-1));

//at() on strings
console.log('benson'.at(0)); //b
console.log('benson'.at(-1)); //n


//For Each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('########### for of#############');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //get absolute value without signs
  }
}
console.log('########### forEach #############');
movements.forEach(function (move, index, array) {
  if (move > 0) {
    console.log(`movement ${index + 1}: You deposited ${move}`);
  } else {
    console.log(`movement ${index + 1}: You withdrew ${Math.abs(move)}`); //get absolute value without signs
  }
});

//forEach with maps and sets

//Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  // console.log(`${key}: ${value}`);
  console.log(` ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
 A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
 and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or
 a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];

const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctedJuliaDogs = dogsJulia.slice();
  correctedJuliaDogs.splice(0, 1); //[5, 2]
  correctedJuliaDogs.splice(-2); //[16, 6]
  // console.log(correctedJuliaDogs);

  const corrected = correctedJuliaDogs.concat(dogsKate);
  // console.log(corrected);
  const dogAge = corrected.forEach(function (age, i) {
    let str = '';
    if (age >= 3) {
      str = `Dog number ${i + 1} is an adult and is ${age} years old`;
    } else {
      str = `Dog number ${i + 1} is still a puppy 🐶`;
    }
    console.log(str);
  });
};
checkDogs(julia1, kate1);
console.log('######## TEST DATA 2 ########');
checkDogs(julia2, kate2);


//map() method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//task convert them to USD from euros
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

//arrow function version
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `movement ${i + 1}: You withdrew ${Math.abs(mov)}`; //get absolute value without signs
  }
});
console.log(movementsDescriptions);
*/

//Chaining Methods - PIPELINE
const eurToUsd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc,mov) => acc + mov,0);
console.log(totalDepositsUSD);