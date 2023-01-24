let residuoOf3=0; // 'N' numero % '3' --> 0,1,2 - 0,1,2 ;
let residuoOf5=0; // 'N' numero % '5' --> 0,1,2,3,4 - 0,1,2,3,4 ;

let count3=0;
let count5=0;
let count3And5=0;

function  printNumbers(){

    for (i=1; i<=100; i++){

        residuoOf3 =i%3;
        residuoOf5=i%5;

        if (residuoOf3 ==0 && residuoOf5 != 0){
            console.log("Fizz"); 
            count3++;
        }
        if (residuoOf5 == 0 && residuoOf3 !=0 ){
            console.log("Buzz"); 
            count5++;
        }
        if (residuoOf3 !=0 && residuoOf5 != 0 ){
          console.log(i);  
        }
        if (residuoOf3 ==0 && residuoOf5 == 0 ){
            console.log("FizzBuzz");  
            count3++;
            count5++;
            count3And5++;
          }

         
    }

}


printNumbers();
console.log("\n");
console.log("There are : " + count3 + " Multiples of 3");
console.log("There are : " + count5 + " Multiples of 5");
console.log("There are : " + count3And5 + " Multiples of 5 and 3 at the same time");


