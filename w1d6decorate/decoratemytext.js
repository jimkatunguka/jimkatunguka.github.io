
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
            if(letter === '\n' || i >= originalText.length-1) {//letter === ' ' || 
                nextWord = pigLatin(nextWord);
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

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "ay";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

  //parseInt(window.getComputedStyle(document.getElementById("textarea").fontSize)) + 2




