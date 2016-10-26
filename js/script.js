$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#english").val();

    console.log(isVowel(userInput[0]));
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
