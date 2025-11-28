function gun(xyz) {
  console.log('This Funnction Normal');
  xyz();
}

let fun = function () {
  console.log('Hello From Function Anonymous');
};
gun(fun);
