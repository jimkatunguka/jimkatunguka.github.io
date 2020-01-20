
window.onload = function(){
    let timer = null; // stores ID of interval timer 
    document.getElementById("bigger_decorations").onclick = 
    function () {
 if (timer === null) {
 		timer = setInterval(resize, 500); 
	} else {
 		clearInterval(timer);
 		timer = null;
 } 
} 

document.getElementById("Malkovitch").onclick = function() {
  let textarea = document.getElementById("myText");
  const originalText = textarea.value;
  let newText = "";
  let nextWord = "";
  for(let i = 0; i < originalText.length; ++i) {
      let letter = originalText.substring(i, i+1);
      nextWord += letter;
      if(letter === ' ' || letter === '\n' || i >= originalText.length-1) {
          if(nextWord.trim().length >= 5)
              nextWord = "Malkovitch ";
          newText += nextWord;
          nextWord = "";
      }
  }
  textarea.value = newText;
};

   // document.getElementById("bigger_decorations").onclick = resize;
    document.getElementById("bingo").onchange = styleup;

    document.getElementById("igpay_atinlay").onclick = function() {
        let textarea = document.getElementById("myText");
        const originalText = textarea.value;
        let newText = "";
        let nextWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter === '\n' || i >= originalText.length-1) {// 
                nextWord = pigLatinizeWord(nextWord);
                newText += nextWord;
                nextWord = "";
            }
        }
        textarea.value = newText;
    };

    
}

function resize(){
//alert("Hello, world!");

let textarea = document.getElementById("myText");

//textarea.style.fontSize = "24pt";

textarea.style.fontSize = parseInt(textarea.style.fontSize) + 2 + 'pt';

}

function styleup(){
    //alert("styled up");

    let textarea = document.getElementById("myText");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "green";
    textarea.style.textDecoration = "underline";

    document.getElementById("body")
            .style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            
}

function pigLatinizeWord(word) {
  const firstLetter = word.substring(0,1);
  
  if(!checkIfVowel(firstLetter)) {
      let consonantClusterSize = 1;
      for(let i = 1; i < word.length; ++i) {
          let letter = word.substring(i, i+1);
          if(!checkIfVowel(letter)) {
              consonantClusterSize++;
          } else {
              break;
          }
      }
      word = word.substring(consonantClusterSize, word.length).trim() + word.substring(0,consonantClusterSize);
  }
  return word.trim() + "ay ";
}
function checkIfVowel(letter) {
  const l = letter.toLowerCase();
  return l === 'a' || l === 'e' || 
  l === 'i' || l === 'o' || l === 'u';
}

  //parseInt(window.getComputedStyle(document.getElementById("textarea").fontSize)) + 2




