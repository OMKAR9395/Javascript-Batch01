try {
  let age = 7;
  if (age < 5) {
    throw 'Age cannot be Negative';
  } else if (age > 10) {
    throw console.log('Age Will be less than 10');
  } else {
    console.log('Program will be executed successfully');
  }
} catch (param) {
  console.log('Error Occured', param);
} finally {
  console.log('we are in the finally block');
}
