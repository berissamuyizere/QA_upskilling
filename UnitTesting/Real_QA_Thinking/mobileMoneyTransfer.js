function transfer(balance, amount) {
 if(amount < 10) {
   throw new Error('Minimum transfer is 10');
 }

 if(amount > balance) {
   throw new Error('Insufficient balance');
 }

 return balance - amount;
}
 module.exports = {transfer};