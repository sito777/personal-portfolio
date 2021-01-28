const texts = ['    problem solver', 'optimizer', 'developer']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if (count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);

    // als het helewoord is uitgetypt dan wordt de count +1 en 
    //springt dus naar volgede item in de array texts
    document.querySelector('.type').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,160)

}());


