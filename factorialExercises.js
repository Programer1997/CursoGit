/* function factorial(number){


 }
console.log(factorial(5)) // 120
console.log(factorial(6)) // 720*/

function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;
     
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1) 
      return 1; 
   
    // Step 2. Create the WHILE loop 
    while (num > 1) { 
      num--; 
      result = result * num; 
      
    }
       
    // Step 3. Return the factorial of the provided integer
    return result; 
  }
  console.log(factorialize(3));
