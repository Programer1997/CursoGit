/*How Much is True?
Create a function which returns the number of true values there are in an array.
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0


Return 0 if given an empty array.
All array items are of the type bool (true or false).*/

let arr= [true,false,false,true,false];
let arr1= [false, false, false, false];


function manyTrue(array){
    let countTrue =0;

for  (i=0; i<= array.length -1; i++){

let value = array[i];

    if (value == true){

        countTrue++;

    }else {
        countTrue = countTrue;
    }

    
}

return countTrue

}

console.log(manyTrue(arr));
console.log(manyTrue(arr1));
console.log(manyTrue([]));