function createIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const it = createIterator([10, 20, 30]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
