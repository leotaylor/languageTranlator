var spanish = 
    {"merry": "alegre", "christmas": "navidad", "happy": "contento", "new": "nuevo", "year": "ano", "have": "tener", "a": "un", "and": "y", "holiday": "fiesta", "we": "nosotros", "wish": "deseo", "you": "tu"};

var german =
    {"merry": "frohlich", "christmas": "weihnachten", "happy": "gluklich", "new": "neu", "year": "jahr", "have": "haben", "a": "haben", "and": "und", "holiday": "urlaub", "we": "wir", "wish": "wunsch", "you": "sie"};

var italian =
    {"merry": "allegro", "christmas": "natale", "happy": "contento", "new": "nuovo","year": "anno", "have": "avere", "a": "un", "and": "e", "holiday": "vacanza", "we": "noi", "wish": "desiderio", "you": "tu"};

// var userWords = [];

// function targetButton(){
//         if(document.getElementById("italianBTN").addEventListener("click", translator(italian))){
//             userWords = document.getElementById("textBox").value;
//             }
//             if(document.getElementById("spanishBTN").addEventListener("click", translator(spanish))){
//                 userWords = document.getElementById("textBox").value;
//                 }
//                 if(document.getElementById("germanBTN").addEventListener("click", translator(german))){
//                     userWords = document.getElementById("textBox").value;
//                     }
// };

// function translator(languageArray) {
//     for (var i = 0; i < userWords.length; i++){
//         var languageString = [];
//         if (userWords === languageArray.i){
//         return languageString;
//         }   
//     languageString += "<h4>" + languageArray.i + "</h4>";
//     printToDom(languageString, "output_box");
//     }
// };

// function printToDom(stringToPrint, divId){
//     var myDiv = document.getElementById(divId);
//     myDiv.innerHTML += stringToPrint;
// };


const inputBox = document.getElementById('textBox');
const spanishClick = document.getElementById('spanishBTN');
const italianClick = document.getElementById('italianBTN')
const germanClick = document.getElementById('germanBTN');
const outputBox = document.getElementById('output_box');
const allTheButtons = document.getElementsByClassName('btn btn-success');

for (let i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener('click', (event) => {
        const userInput = inputBox.value.toLowerCase().trim();
        const userInputArray = userInput.split(' ');
        let domOutput = '';
        if (event.target.id === 'spanishBTN'){
            domOutput = spanish[userInputArray];
        } else if (event.target.id === 'italianBTN'){
            domOutput = italian[userInputArray];
        } else {
            domOutput = german[userInputArray];
        }
        outputBox.innerHTML = domOutput;
        console.log(userInput);
        console.log(domOutput);
    });
};
