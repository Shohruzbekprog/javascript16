// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).




function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    }
  }
  return false;
}

console.log(isTriangle(3, 4, 5)); 
console.log(isTriangle(1, 2, 4));
console.log(isTriangle(7, 10, 5));
function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    }
  }
  return false;
}

console.log(isTriangle(3, 4, 5)); 
console.log(isTriangle(1, 2, 4));
console.log(isTriangle(7, 10, 5));
