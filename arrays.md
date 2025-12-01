// Arrays
// get last element of an array:
let array1 = [2, 4, 6, 8]
console.log(array1[array1.length -1])

// add item to end of array: push()
array1.push(10)
console.log(array1[array1.length -1])
console.log(array1)

// add item to begigging of array: unshift()
array1.unshift(0)
console.log(array1[array1.length -1])
console.log(array1)

// join arrays: concat()
array2 = [12,14,16]
array3 = array1.concat(array2)
console.log(array1[array3.length -1])
console.log(array3)