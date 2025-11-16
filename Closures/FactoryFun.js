function greet(name) {
  return function (messege) {
    console.log(name + ': ' + messege);
  };
}

let greetOmkar = greet('Welcome Omkar');
greetOmkar('Good Morning');
greetOmkar('This Is Closures');
