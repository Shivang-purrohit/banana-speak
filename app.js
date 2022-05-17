var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var txtOutput = document.querySelector("#text-output");

function clickHandler() {
   
    txtOutput.innerText = "ajajajja " + txtInput.value;
};

 btnTranslate.addEventListener("click", clickHandler) 


