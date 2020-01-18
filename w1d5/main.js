    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
          return "TEST SUCCEEDED";
        } else {
          return "TEST FAILED.  Expected " + expected + " found " + found;
        }
      }
  
      /* max returns the maximum of 2 arguments */
      function max(a, b) {
        if (a > b) {
          return a;
        } else {
          return b;
        };
      }
      console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
      /* maxOfThree takes 3 numbers as arguments and returns the largest */
      function maxOfThree(a, b, c) {
        return max(max(a, b), c);
  
      }
      console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
     
      /*isVowel takes a character and returns true if its a vowel and false if otherwise*/
      function isVowel(x) {
        const vowels = new Array("a", "e", "i", "o", "u");
        for (let i = 0; i < vowels.length; i++) {
          if (vowels[i] === x.ignoreCase) { return true; }
          return false;
        }
      }
      console.log("Expected output of isVowel(z) is false " + myFunctionTest(false, isVowel("Z")));
  
      /*Define a function sum() and a function multiply() that sums and multiplies
         (respectively) all the numbers in an array of numbers. For example, 
        sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24./
      */
      function sum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
          sum += array[i];
        }
        return sum;
      }
      console.log("Expected output of sum([1,2,3,7]) is 13 " + myFunctionTest(13, sum([1, 2, 3, 7])));
      function multiply(array) {
        let product = 1;
        for (let i = 0; i < array.length; i++) {
          product *= array[i];
        }
        return product;
      }
      console.log("Expected output of multiply([2,3]) is 6 " + myFunctionTest(6, multiply([2, 3])));
  
      /*Define a function reverse() that computes the reversal of a string. 
      For example, reverse("jag testar") should return the string "ratset gaj".*/
      function reverse(string) {
        let reversed = "";
        for (let i = string.length; i >= 0; i--) {
          reversed = reversed + string.charAt(i);
        }
        return reversed;
      }
      console.log("Expected output of reverse('jim is a boy') is 'yob a si mij' " + myFunctionTest('yob a si mij', reverse("jim is a boy")));
  
      /*Write a function findLongestWord() that takes an array of words 
      and returns the length of the longest one.*/
      function findLongestWord(words) {
        let longest = words[0].length;
  
        for (let i = 0; i < words.length; i++) {
          if ((words[i].length) > longest) {
            longest = words[i].length
          }
        }
        return longest;
      }
      console.log("Expected output of findLongestWord(['go', 'come', 'stay', 'going']) is 5 " + myFunctionTest(5, findLongestWord(['go', 'come', 'stay', 'going'])));
  
      /*Write a function filterLongWords() that takes an array of words and 
      an integer i and returns the array of words that are longer than i.*/
      function filterLongWords(words, i) {
        return words.filter(w => w.length > i);
      }
      const output = new Array('come', 'stay', 'going');
      const input = new Array('go', 'come', 'stay', 'going');
      console.log("Expected output of filterLongWords(['go', 'come', 'stay', 'going']) is ['come', 'stay', 'going'] " + myFunctionTest(output, filterLongWords(input, 3)));
  
      /*Modify the jsfiddle on the map/filter/reduce slide as follows:
      a) multiply each element by 10; 
      b) return array with all elements equal to 3; 
      c) return the product of all elements;*/
  
      const a = [1,3,5,3,3];
  
      const b = a.map(function (num){
        return num * 10;
      });
      console.log(b);
  
      const c = a.filter(function(num){
        return num === 3;
      });
      console.log(c);
  
      const d = a.reduce(function(init, num){
        return init * num;
      });
      console.log(d);

      /*Using console.assert */
      console.log("/*--using console.assert--*/");

      /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest2(expected, found) {
      if (expected === found) {
        return true;
      } else {
        return false;
      }
    }

    console.assert(myFunctionTest2(20, max(20, 10)), 'Expected output of max(20,10) is 20');
    console.assert(myFunctionTest2(44, maxOfThree(5, 4, 44)), 'Expected output of maxOfThree(5, 4, 44) is 44');
    console.assert(myFunctionTest2(false, isVowel("Z")), 'Expected output of isVowel("Z") is false');
    console.assert(myFunctionTest2(13, sum([1, 2, 3, 7])), 'Expected output of sum([1, 2, 3, 7]) is 13');
    console.assert(myFunctionTest2(6, multiply([2, 3])), 'Expected output of multiply([2, 3]) is 6');
    console.assert(myFunctionTest2('yob a si mij', reverse('jim is a boy')), "Expected output of reverse('jim is a boy') is 'yob a si mij'");
    console.assert(myFunctionTest2(5, findLongestWord(['go', 'come', 'stay', 'going'])), "Expected output of findLongestWord(['go', 'come', 'stay', 'going']) is 5");
