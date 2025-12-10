const arr = [10, 20, 30];
const it = arr[Symbol.iterator]();

console.log(it.next()); // {value:10, done:false}
console.log(it.next()); // {value:20, done:false}
console.log(it.next()); // {value:30, done:false}
console.log(it.next()); // {value:undefined, done:true}
