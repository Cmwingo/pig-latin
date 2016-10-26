$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#english").val();
    var translation = "";
    console.log(isVowel(userInput[0]));
    if(!errorCheck(userInput)){
      translation = translate(userInput);
    }

    console.log(translation);

  });
});

function isVowel(letter){
  var vowels = ('aeiouAEIOU');

    if (vowels.indexOf(letter) > -1) {
      return true;
    } else {
      return false;
    }
}

function translate(userInput) {

  var userInputSlice = userInput.split();
  var translation = "";

  for(i = 0; i < userInput.length; i++) {
    if(isVowel(userInput[i])) {
      translation = userInput + "ay";
      return translation;
    } else {
      return translation;
    }
  }
}

function errorCheck (userInput) {

var userInputSlice = userInput.split();

  if (!userInput){
    alert("Please enter a sentence to translate");
    return true;
  } else if (!isSentence(userInput)){
    alert("Please enter only alphabetic characters");
    return true;
  } else {
    return false;
  }
};

function isLetter(x) {
  return x.toUpperCase() != x.toLowerCase();
}

function isSentence(sentence){

  var sentenceSlice = sentence.split();
  for(i = 0; i < sentenceSlice.length; i++){

    var character = sentenceSlice[i];

    if(!isLetter(character)) {
      return false;
    }
  }
  return true;
}
