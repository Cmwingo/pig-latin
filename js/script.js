$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userSentence = $("input#english").val();
    var words = userSentence.split(" ");
    var userInput = "";
    var translation = "";
    var result = "";

    result = translateSentence(words);
    $(".translation-result").text(result);
  });
});

function isVowel(letter){
  var vowels = ('aeiouyAEIOUY');

    if (vowels.indexOf(letter) > -1) {
      return true;
    } else {
      return false;
    }
};

function translate(userInput) {

  var userInputSplit = userInput.split("");
  var leadingConsonants = [];
  var consonant = "";

  for(i = 0; i < userInput.length; i++) {
    if(isVowel(userInput[0])) {
      translation = userInput + "ay";
      return translation;
    } else if(userInput[0].toLowerCase() === "y") {
        consonant = userInputSplit.shift();
        leadingConsonants.push(consonant);
        translation = resolveWord(userInputSplit, leadingConsonants);
        return translation;
    } else if(isVowel(userInput[i])){
        translation = resolveWord(userInputSplit, leadingConsonants);
        return translation;
    } else if(userInput[i].toLowerCase() === "q") {
        if(userInput[i+1].toLowerCase() === "u") {
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

function resolveWord(wordBase, leadingConsonants) {
  var translationArray = [];
  var translation = "";
  var result = "";

  translationArray = wordBase.concat(leadingConsonants);
  translation = translationArray.join("") + "ay";
  return translation;
};

function translateSentence(words) {

  var translatedWords = [];
  var translation = "";

  for(y = 0; y < words.length; y++){
    userInput = words[y];
    if(!errorCheck(userInput)){
      translation = translate(userInput);
      translatedWords.push(translation);
    }
  }
  result = translatedWords.join(" ");
  return result;
}
