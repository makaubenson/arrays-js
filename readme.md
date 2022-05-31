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
