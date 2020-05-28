//KATA 01
//Write a function named "add" which takes two arguments (as input variables) and returns their sum.
function add(x, y) {
    return x + y
}
console.log(add(2, 4))

//KATA 02
//Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
function multiply(x, y){
    let answer = x
    for(var i = 0; i < y - 1; i ++){
        answer += x
    }
    return answer
}
console.log(multiply(6, 4))

//KATA 03
//Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
//6 + 6 + 6 + 6 = 24
function power(x, n) {
    var p = 1
    for(var i = 0; i < n; i++){
        p *= x;
    }
    return p;
}
console.log(power(2, 8))
console.log(power(3, 4))
//KATA 04
//Write a function named "factorial" which takes a single argument and returns the factorial of that value.
//  4 * 3 * 2 * 1 = 24
function factorial(n) {
  let fact = 1
  if(n > 1) {
      for(let i = 2; i <= n; i++){
          fact *= i;
      }
      return fact;
  }
}
console.log(factorial(4))

//KATA 05
//Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.
//0  1  1  2  3  5  8  [13]  21
function fibonacci (n) {
   if ( n < 3){
      return 1;
   } else {
       return fibonacci(n - 3) + fibonacci(n - 1);
   }
}
console.log(fibonacci(8));
