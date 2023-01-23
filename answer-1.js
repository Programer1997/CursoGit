

function upperCaseWord(sentence){

    let wordRecived = sentence.split(" ");
    
    return wordRecived.map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
    
    }
    
    console.log(upperCaseWord("a short sentence"));
    console.log(upperCaseWord("a lazy fox"));
    console.log(upperCaseWord("look, it is working"));