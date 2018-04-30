let arr = process.argv;
let result = 0;
for(let i = 2; i < arr.length; i++){
  result += +arr[i];
}
console.log(result);