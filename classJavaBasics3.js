

let name = "martin melchor";
let arrayName=[];
let array2=[];



function capitalization(sentence){
    let array4= [];

if (sentence){
// declaration of arrayName (which become the sentence in the first array)
arrayName = sentence.split (" ");

//to start foor loop
for (let i=0; i<=arrayName.length-1; i++){
//declaration of array2(the which  will take every word from arrayName)
array2 =arrayName[i];
//wordX variable type string, the whicjh will save every word already capitalized
let wordX =array2[0].toUpperCase() + array2.slice(1);
//array4 push every word capitalized from wordX to array4
array4.push(wordX);

}


//return the array4 as a sentence and not as an array using the method "join"
return array4.join(" ")

}

else {
    //return the next sentence if nobody gave a sentence for capitilization
    return "you dont have any sentence"

}

}


console.log(capitalization("a short sentence"));
console.log(capitalization("a lazy fox"));
console.log(capitalization("look, it is working"));
console.log(capitalization());


