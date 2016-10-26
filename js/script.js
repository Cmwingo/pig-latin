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
};

function translate(userInput) {

  var userInputSplit = userInput.split("");
  var translation = "";
  var leadingConsonants = [];
  var translationArray = [];
  var consonant = "";

  for(i = 0; i < userInput.length; i++) {
    if(isVowel(userInput[0])) {
      translation = userInput + "ay";
      return translation;
    } else if(userInput[0] === "y" || userInput[0] === "Y") {
        consonant = userInputSplit.shift();
        leadingConsonants.push(consonant);
        translationArray = userInputSplit.concat(leadingConsonants);
        translation = translationArray.join("") + "ay";
        return translation;
    } else if(isVowel(userInput[i])){
        console.log(leadingConsonants);
        console.log(userInputSplit);
        translationArray = userInputSplit.concat(leadingConsonants);
        translation = translationArray.join("") + "ay";
        return translation;
    } else if(userInput[i] === "q" || userInput[i] === "Q") {
        if(userInput[i+1] === "u" || userInput[i+1] === "U") {
          consonant = "qu";
          userInputSplit.shift();
          userInputSplit.shift();
          leadingConsonants.push(consonant);
        }
    } else {
      consonant = userInputSplit.shift();
      leadingConsonants.push(consonant);
    }
  }
};


function errorCheck (userInput) {

var userInputSplit = userInput.split("");

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
};

function isSentence(sentence){

  var sentenceSlice = sentence.split("");
  for(i = 0; i < sentenceSlice.length; i++){

    var character = sentenceSlice[i];

    if(!isLetter(character)) {
      return false;
    }
  }
  return true;
};
