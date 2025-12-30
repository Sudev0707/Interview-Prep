// 1. Array Mutators
// These methods modify the original array.

// | **Method**     | **Syntax**                                            | **Description**                                                                                 |
// | -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
// | `push()`       | `array.push(element1, element2, ...)`                 | Adds one or more elements to the end of an array and returns the new length of the array.       |
// | `pop()`        | `array.pop()`                                         | Removes the last element from an array and returns it.                                          |
// | `shift()`      | `array.shift()`                                       | Removes the first element from an array and returns it.                                         |
// | `unshift()`    | `array.unshift(element1, element2, ...)`              | Adds one or more elements to the beginning of an array and returns the new length of the array. |
// | `splice()`     | `array.splice(start, deleteCount, item1, item2, ...)` | Changes the contents of an array by removing, replacing, or adding elements.                    |
// | `reverse()`    | `array.reverse()`                                     | Reverses the array in place.                                                                    |
// | `sort()`       | `array.sort(compareFunction)`                         | Sorts the elements of an array in place.                                                        |
// | `fill()`       | `array.fill(value, start, end)`                       | Changes all elements in an array to the specified value.                                        |
// | `copyWithin()` | `array.copyWithin(target, start, end)`                | Shallow copies part of an array to another location within the same array.                      |


// 2. Array Accessors
// These methods do not modify the array but return a new array or value.


// | **Method**      | **Syntax**                                                                           | **Description**                                                                                              |
// | --------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
// | `concat()`      | `array.concat(value1, value2, ...)`                                                  | Merges two or more arrays and returns a new array.                                                           |
// | `slice()`       | `array.slice(begin, end)`                                                            | Returns a shallow copy of a portion of an array into a new array object.                                     |
// | `map()`         | `array.map(callback(currentValue, index, array))`                                    | Creates a new array populated with the results of calling a provided function on every element in the array. |
// | `filter()`      | `array.filter(callback(currentValue, index, array))`                                 | Creates a new array with all elements that pass the test implemented by the provided function.               |
// | `reduce()`      | `array.reduce(callback(accumulator, currentValue, index, array), initialValue)`      | Applies a function against an accumulator and each element to reduce it to a single value.                   |
// | `reduceRight()` | `array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)` | Similar to `reduce()`, but iterates from right to left.                                                      |
// | `some()`        | `array.some(callback(currentValue, index, array))`                                   | Tests whether at least one element in the array passes the test.                                             |
// | `every()`       | `array.every(callback(currentValue, index, array))`                                  | Tests whether all elements in the array pass the test.                                                       |
// | `find()`        | `array.find(callback(currentValue, index, array))`                                   | Returns the first element that satisfies the provided testing function.                                      |
// | `findIndex()`   | `array.findIndex(callback(currentValue, index, array))`                              | Returns the index of the first element that satisfies the provided function.                                 |
// | `indexOf()`     | `array.indexOf(searchElement, fromIndex)`                                            | Returns the first index at which a given element is found.                                                   |
// | `lastIndexOf()` | `array.lastIndexOf(searchElement, fromIndex)`                                        | Returns the last index at which a given element is found.                                                    |
// | `includes()`    | `array.includes(element, fromIndex)`                                                 | Checks if a certain element exists in the array, returning `true` or `false`.                                |
// | `reverse()`     | `array.reverse()`                                                                    | Returns a new array with the elements reversed (does **not** mutate original array).                         |
// | `flat()`        | `array.flat(depth)`                                                                  | Creates a new array with all sub-array elements concatenated into it.                                        |
// | `flatMap()`     | `array.flatMap(callback(currentValue, index, array))`                                | Maps each element using a mapping function, then flattens the result into a new array.                       |
// | `at()`          | `array.at(index)`                                                                    | Returns the element at the specified index, allowing negative indices for counting from the end.             |


// 3. Iteration Methods
// These methods allow you to loop through arrays or perform operations on them.

// | **Method**  | **Syntax**                                            | **Description**                                                                    |
// | ----------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
// | `forEach()` | `array.forEach(callback(currentValue, index, array))` | Executes a provided function once for each element in the array.                   |
// | `keys()`    | `array.keys()`                                        | Returns a new array iterator object that contains the keys (indexes) of the array. |
// | `values()`  | `array.values()`                                      | Returns a new array iterator object that contains the values of the array.         |
// | `entries()` | `array.entries()`                                     | Returns a new array iterator object that contains key-value pairs of the array.    |


// 4. Conversion Methods
// These methods are used for creating array s or converting other structures to arrays.

// | **Method**  | **Syntax**                                    | **Description**                                                                                           |
// | ----------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
// | `from()`    | `Array.from(arrayLike, mapFunction, thisArg)` | Creates a new Array from an array-like or iterable object. Optionally, a mapping function can be applied. |
// | `isArray()` | `Array.isArray(value)`                        | Determines if the provided value is an array, returning `true` or `false`.                                |


// 5. Utility Methods
// These methods perform utility functions like testing, searching, or determining array properties.

// | **Method**     | **Syntax**                             | **Description**                                                          |
// | -------------- | -------------------------------------- | ------------------------------------------------------------------------ |
// | `copyWithin()` | `array.copyWithin(target, start, end)` | Copies part of the array to another location in the same array.          |
// | `includes()`   | `array.includes(element, fromIndex)`   | Checks if a certain element is present in the array.                     |
// | `find()`       | `array.find(callback)`                 | Returns the first element that satisfies the test function.              |
// | `findIndex()`  | `array.findIndex(callback)`            | Returns the index of the first element that satisfies the test function. |

// 6. Array Iterator Methods
// These methods return new array iterators to loop through the array's indices or values.

// | **Method**  | **Syntax**        | **Description**                                                             |
// | ----------- | ----------------- | --------------------------------------------------------------------------- |
// | `keys()`    | `array.keys()`    | Returns a new array iterator that contains the keys (indexes) of the array. |
// | `values()`  | `array.values()`  | Returns a new array iterator that contains the values of the array.         |
// | `entries()` | `array.entries()` | Returns a new array iterator that contains key-value pairs of the array.    |
