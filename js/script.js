$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#english").val();
    var translation = "";
    console.log(isVowel(userInput[0]));
    translation = translate(userInput);
    console.log(translation);

  });
});

function isVowel(letter){
  var vowels = ('aeiou');

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
