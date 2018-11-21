module.exports = function findTheLongestWord(sen) {
  
 var longestlength=0;
 var longestWord='';

sen.map(word => {
  //iterates through the array
if(word.length>longestlength) {
  //checks if current word is longer than the current longest word
longestlength=word.length;
//if so, it changes the longestlength to the length of that word...
longestWord=word;
//...and the longest word to the word
}
})
return longestWord;
//returns the longest word





  





}
