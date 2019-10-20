let range = [];

function makeRange(endNum) {
  for (let i = 2; i <= endNum; i++) {
    range.push(i);
  }
console.log('Range: ',range);
}

function getPrimes() {
  let primes = [];

while (range.length > 0) {
let nextPrime = range.shift();
console.log('Next prime: ', nextPrime);    
primes.push(nextPrime);
console.log('Primes: ',primes);
  range = range.filter(function (num) {
  return num % nextPrime !== 0;
    });

    console.log('Range: ',range);
  }
  console.log('Primes 2: ',primes);
}

makeRange(100);
getPrimes();