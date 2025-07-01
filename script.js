// biglietto minorenne 
const price = 0.21; // Biglietto costo 0.21
const km = 100; // km 100
const age = 10;  // anni 10
const discount = 20; // sconto 20%
let baseprice = price * km; // 21€
let finalprice = baseprice
if (age < 18) {
  const discountapplied = baseprice * (discount / 100);
  finalprice = baseprice - discountapplied;
}
console.log(finalprice)
// biglietto over 65
const ageoldman = 70;  // anni 70
const discountold = 40; // sconto 40%
if (ageoldman > 65) {
  const discountapplied = baseprice * (discountold / 100)
  finalprice = baseprice - discountapplied
}
console.log(finalprice)

