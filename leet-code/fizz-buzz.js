const fizzBuzz = function(n) {
  const numbers = [];
  for (let i = 0; i < n.length; i++) {
    const number = n[i];
    if ( number % 5 === 0 && number % 3 === 0 ) {
      numbers.push('FizzBuzz');
    } else if ( number % 3 === 0 ) {
      numbers.push('Fizz');
    } else if ( number % 5 === 0 ) {
      numbers.push('Buzz');
    } else {
      numbers.push(number);
    }
  }
  return numbers;
};

// Test

console.log(fizzBuzz([3, 3, 2]) === ['Fizz', 'Fizz', 2]);
