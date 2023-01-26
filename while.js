/*let i =0;


while (i <=10){
console.log(i);
if (i==5){
break;

}

i++;
}


let j =1;
do {
    console.log(j);
    
    
    j++;
}
while (j <=10);*/

////////////////////////
//Pattern
let string = "The cat in the hat, the second cat is not a cat";
let pattern = /cat/;
let result = string.match(pattern);
console.log(result);

let string1 = "The cat in the hat";
let pattern1 = /[c]at/;
let result1 = string1.match(pattern1);
console.log(result1);

let emailRegex = /\S+@\S+\.\S+/;
console.log(emailRegex.test("example@gmail.com"));  // true
console.log(emailRegex.test("examplegmailcom"));   // false