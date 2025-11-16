function creteBankAccount() {
  let balance = 1000;
  return {
    deposit(amount) {
      balance += amount;
      console.log('Blance : ', balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log('Balance :', balance);
    },
  };
}
let acc = creteBankAccount();
acc.deposit(500); //1500
acc.withdraw(200); //1300
