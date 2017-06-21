//todo create single function named addExcitement that will use console.log() to print out a sentence to the browser console.
// console log rows of words. It should take an array containing the words of a sentence and output them in the developer console.
// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement(theWordArray) {

    let string = "";
    let excited = "!";
    for (var i = 0; i < theWordArray.length; i++) {
        if((i + 1) % 3 === 0 && i != 0){
            string += theWordArray[i] +  excited + " "
        }else{
        string += theWordArray[i] + " ";
        }   
        console.log(string)
    }

    

}
addExcitement(sentence)

