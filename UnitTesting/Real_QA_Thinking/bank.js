function withdraw(balance, amount) {
 if(amount <= 0) {
   throw new Error('Invalid amount');
 }

 if(amount > balance) {
   throw new Error('Insufficient funds');
 }

 return balance - amount;
}

module.exports = {withdraw};