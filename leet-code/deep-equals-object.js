const deepEquals = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < object1Keys.length; i++) {
    const key = object1Keys[i];
    const value1 = object1[key];
    const value2 = object2[key];
    if (typeof value1 === 'object') {
      if (deepEquals(value1, value2)) {
        count += 1;
      }
    } else {
      if (value1 === value2) {
        count += 1;
      }
    }
  }
  if (count === object1Keys.length) {
    return true;
  } else {
    return false;
  }
};

// Tests

console.log('True Tests')
console.log(deepEquals({},{}));
console.log(deepEquals({a: 5}, {a: 5}));
console.log('Nestsed Objects', deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log('Nestsed Empty Objects', deepEquals({a:1, b: {}},{a:1, b: {}})); // true


console.log('False Tests')
console.log(deepEquals({},{a: 5}));
console.log('Nestsed Objects', deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
console.log('Nestsed Objects Empty', deepEquals({a:1, b: {}},{a:1, b: {c:6}})); // false