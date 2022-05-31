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
- `console.log(arr.splice(1, 2)); //picks from caharacter at index 1 and delete 2 elements`

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

- `console.log(letters.join('-')); //a-d-e-f-g-h-i-j`

## at() method

- Early Version of getting array values
- `const arr = [23, 11, 64];`
- `console.log(arr[0]);`

- new version
- `console.log(arr.at(0));`
- It also works on strings

