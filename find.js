// Array.prototype.find()

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = number.find((currentValue) =>{
return currentValue>5;
})

console.log(result);