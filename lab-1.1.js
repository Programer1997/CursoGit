


function largestArray(array){

    let largest = 0;

for (let i=0;i <= array.length-1;i++){

let valorArray =array[i];

    if (largest < valorArray){

        largest = valorArray;

    }else {
        
        largest = largest
    }

}


return largest

}

console.log(largestArray([5,7,8,9,10]));
console.log(largestArray([20,7,8,9,10]));
console.log(largestArray([5,-7,18,-9,10]));