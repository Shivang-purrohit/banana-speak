var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-area");
var outputBox = document.querySelector("#output")

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with the server! try again after sometime")
}

function clickHandler(){
    
    //taking input
    var inputText = txtArea.value; 

    //calling server for processing
    var translatedText = fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        outputBox.innerHTML = json.contents.translated;
    })
    .catch(errorHandler)
    
}

btnTranslate.addEventListener("click", clickHandler);