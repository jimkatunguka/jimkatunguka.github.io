
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

   // document.getElementById("bigger_decorations").onclick = resize;
    document.getElementById("bingo").onchange = styleup;
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


