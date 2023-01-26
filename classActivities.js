/////////////////////////////////////////////////////////////////
/*#1*/
console.log("Question number 1: ");
function checkVariable(){
 let x= 10;

 if (x > 5){

return " x is greater than 5"
 }else {

    
    return "x is not greater than 5"
 }

}

console.log(checkVariable());

//////////////////////////////////////////////
/*Second*/
console.log("\nQuestion number 2: ");

function checkArray(string){
let word = string.length;

if (word > 5){
return "the name is longer than 5 characters"
}else 
{
    return "the name is 5 characters or less"
}


}

console.log(checkArray("luis"));

///////////////////////////////////////////////////////////////////////////////////////////
/*#3*/ 
console.log("\nQuestion number 3: ");
function ageX(){
    let age = 45;

if (age >= 18 && age <=65){

    return "you are an adult"

}else {

    return "you are not an adult"
}

}
console.log(ageX());

///////////////////////////////////////////////////////////////////////////////////////////
/*#4*/
console.log("\nQuestion number 4: ");
function multiply(x,y){

    let productResult = x*y;
    return productResult

}

console.log(multiply(4,5));

///////////////////////////////////////////////////////////////////////////////////////////
/*#5*/
console.log("\nQuestion number 5: ");
function greet(name){

    console.log("Hello, "+ name + " !");

}

greet("John");

//////////////////////////////////////////////////////////////////////////////////////////
/*6*/
console.log("\nQuestion number 6: ");
function arrays3(arr){
for (i=0; i<=arr.length -1;i++){
    console.log(arr[i]);
}
}
arrays3([5,6,8,10,15,16,25]);

/////////////////////////////////////////////////////////////////////////////////////////
/*#7*/
console.log("\nQuestion number 7: ");
let counter =0;
while (counter < 10){
    console.log(counter);
    counter++;


}



//////////////////////////////////////////////////////////////////////////////////////////
/*#8*/
console.log("\nQuestion number 8: ");
    let array5=[5,2,3,4,5];
    let sumArr =0;

for (i=0; i<=array5.length -1;i++){

   sumArr= sumArr+array5[i];                                               
}


console.log("la suma de todos los numeros del arreglo es : " + sumArr);

///////////////////////////////////////////////////////////////////////////////////////////
/*9*/
console.log("\nQuestion number 9: ");
    let array6=[5,225,30,4,5];
    let greaterThan =0;
    let variable =0;

    while(variable <= array6.length -1){

        if (greaterThan < array6[variable]){
greaterThan =  array6[variable];
        }

variable++;

    }

    console.log("the maximum number is  : " + greaterThan + "\n");
    


//////////////////////////////////////////////////////////////////////////////////////////
/*#10*/
console.log("Question number 10: ");
function reverseString(sentence){
let array1= sentence.split("");
return array1.reverse(); //requiered an array mandatory , single string does not work
}

console.log(reverseString("hola como estas "));