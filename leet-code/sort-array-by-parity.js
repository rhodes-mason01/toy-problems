var sortArrayByParity = function(array) {
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      if (number % 2 === 0) {
        var evenNumbers = array.slice(0, 2);
      } else {
        var newArray = evenNumbers.push(number);
      }
    }
    return newArray;
};
