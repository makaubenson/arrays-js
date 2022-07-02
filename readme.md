# Arrays -Js

- Arrays are also objects
- Array methods are just functions.

## slice() method

- Extract piece of an array without affecting the original array
- `let arr = ['a', 'b', 'c', 'd', 'e'];`
- `console.log(arr.slice(2)); `//['c', 'd', 'e']
- `console.log(arr.slice(2, 4)); //['c', 'd']`
- `console.log(arr.slice(-2)); //['d', 'e']`
- `console.log(arr.slice(-1)); //['e']`
- `console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']`

## splice()

- Mutates the original array.
- `console.log(arr.splice(2)); //['c', 'd', 'e']`
- `console.log(`Original array has been changed to:`, arr); //['a', 'b']`
- `console.log(arr.splice(1, 2)); //picks from character at index 1 and delete 2 elements`

## reverse()

- It mutates the original array

- `const arr2 = ['j', 'i', 'h', 'g', 'f'];`
- `console.log(arr2.reverse());`- ['f', 'g', 'h', 'i', 'j']
- `console.log(arr2);`- `['f', 'g', 'h', 'i', 'j']` since it mutates from `['j', 'i', 'h', 'g', 'f']`

## concat()

- Used to concatinate 2 arrays
- `const letters = arr.concat(arr2);`
- `console.log(letters);`

## join()

- The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
- If the array has only one item, then that item will be returned without using the separator.
- `console.log(letters.join('-')); //a-d-e-f-g-h-i-j`

## at() method

- Early Version of getting array values
- `const arr = [23, 11, 64];`
- `console.log(arr[0]);`

- new version
- `console.log(arr.at(0));`
- It also works on strings

## for of

- `for (const [i, movement] of movements.entries()) {}`
- first param, in this case i must be the index, while second param must be the current element

## forEach()

- Loops over the array and through each iteration it executes the callbeck function
- As it loops, it parses, `current element of the array`, `index` and `entire array that we are looping`
- `movements.forEach(function (movement, index, array) {}`
- The condition of parsing all params is, the order of parsing them:
- First Must be the `current element`.
- Second must be `index`.
- Third must be `array`.

## when to use forEach()

- Loops over the whole array, it doesnt break

## when to use for of

- if there is need to break out of a loop

## forEach with Maps and Sets

#### maps

- `const currencies = new Map([ ['USD', 'United States dollar'], ['EUR', 'Euro'], ['GBP', 'Pound sterling'], ]);`

- `currencies.forEach(function (value, key, map) { console.log(`${key}: ${value}`); });`

- Here on map, the callback function also has three values that it parses.`value, key, map`

#### sets

- `const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']); console.log(currenciesUnique);`

- `currenciesUnique.forEach(function (value, key, map) { console.log(`${key}: ${value}`); });`

- output
  `USD: USD`
  ` GBP: GBP`
  ` EUR: EUR`
- here the `key` is same as the `value`.
- `currenciesUnique.forEach(function (value, _, map) {}`
- Throw away variable(`_`)

## insertAdjacentHTML()

- Inserts html in the required zone
- `const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;`

- accepts two arguments,`first`: area to insert html(`afterbegin`) and `second` the string that should be inserted.
- html in the context below is the variable containing the string that should be parsed.
- `insertAdjacentHTML('afterbegin', html);`

## map , filter , reduce methods

### map()

- loops over an arrays, applys the callback function
- maps contents of original array to a new array
- It DOES NOT MUTATE or CHANGE the original array just CREATES a new array.
- `const currencies = new Map([ ['USD', 'United States dollar'], ['EUR', 'Euro'], ['GBP', 'Pound sterling'], ]);`

- `currencies.forEach(function (value, key, map) { console.log(`${key}: ${value}`); });`

- Here on map, the callback function also has three values that it parses.`value, key, map`
- `map((element, index, array) => { /* ... */ })`

### filter()

- used to filter elements from original array that meet a certain condition
- returns a new array containing the array elements that passed a specified condition
- parses 3 arguments `current element, index, array`
- `movements.filter(function (mov, index, arr) {});`
- example
- `const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];`
- `const deposits = movements.filter(function (mov) { return mov > 0; });`
- console.log(movements); `[200, 450, -400, 3000, -650, -130, 70, 1300]`
- console.log(deposits);`[200, 450, 3000, 70, 1300]`

### reduce()

- boils down all array elements down to one single value.(e.g adding elements together)
- loops over the array and calls the callback function in every iteration
- no new array, just 1 reduced value
- In its callback it parses: `accumulator`, `the current element/value`, `the index` and the `entire array`
- `const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; ` - Array
- `movements.reduce(function (accumulator, currentValue, index, array) {`
- ` return accumulator + currentValue; },x);` x- here represents the current value of the accumulator at the start of the loop.(can be set to any number)
- `return accumulator + currentValue; },0)`
- The above three functions are very important in js

- `NOTE: It is Bad Practice to chain js methods that mutate the original array e.g splice(), reverse() methods `

### find() method

- This method is used to retrive one element of an array based on a condition.
- It accepts a `condition` and a `callback` which is called as the method loops over the array.
- `find()` method needs a callback function that returns a boolean.
- It `does not return a new array` but the first element of an array that meets the specified condition.
  This method returns `undefined` if the condition is not met.
- `blur()` can be used to make input fields lose `focus`.
- `Math.abs()` -Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

### The findindex() Method

- Works closely the same as the `find()` method though `findindex()` returns the `index` of the found element.
- `find() method` returns the one element based on the condition parsed, `findindex()` returns the index of the element retrieved.

#### Note

- Both find() and findIndex() methods get access of the current index and the entire array.
- These functions were introduced in ES6 thus they cant work in old browsers.

### flat()

- These methods were introduced in ES2019, Thus they wont work in supper old browsers.
- The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

- The flat method only goes one level deep by default.
- `const arr = [[1, 2, 3], [4, 5, 6], 7, 8];`
- `console.log(arr.flat());` - output -`[1, 2, 3, 4, 5, 6, 7, 8]`
- `console.log(arr.flat(1));` - output -`[1, 2, 3, 4, 5, 6, 7, 8]`
- The flat method accepts the depth argument which specifies how deep the method should go to flatten the sub -arrays.

- `const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];`
- `console.log(arrDeep.flat());`- Output `[Array(2), 3, 4, Array(2), 7, 8]`

##### specify depth argument

- The depth level specifies how deep a nested array structure should be flattened. Defaults to 1.
- after specifying depth argument the flat method flattens all sub arrays on the same depth level as the one specified in the flat method. ` e.g flat(3)`
- `console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]`

### flatMap() Method

- Since using `map()` method and flattening the result is a common use case, thus for that reason `flatMap()` was introduced.
- flatMap() combines ``map` and `flat` method into one function for perfomance functions.
- sample code is in script.js
- ### Note: flatMap() only goes to 1 level of depth, if the need be for several levels of depth, then flat() method is the way.

### some()

- The `some() method` tests whether at least one element in the array passes the test implemented by the provided callback function.
- It returns `true` if, in the array, it finds an element for which the provided function returns true; otherwise it returns `false`.
- It doesn't modify the array.
- Example
- `const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];`
- `const anyDeposits = movements.some(function (mov) { return mov > 0; });`
- Here the callback checks if there is any movement > 0
- `console.log(anyDeposits);` - `output: true`

### every() methods
