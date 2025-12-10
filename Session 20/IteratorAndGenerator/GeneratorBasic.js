function* myFun() {
  yield 10;
  yield 20;
}

const num = myFun();

console.log(num.next());
console.log(num.next());
console.log(num.next());
