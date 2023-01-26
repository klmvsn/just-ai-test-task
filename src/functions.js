//получить ключи для выбора слова
function getRandomWordKey(keys) {
    var i = 0
    keys.forEach(function(elem) {
        i++
    })
    return  $jsapi.random(i);
}

//задать слово в виде нижних подчеркиваний
function setUnderscores(word) {
    var underscores='';
    for(var i = 0; i< word.length; i++)
        underscores+='_ '
    return underscores
}

//проверить, вводил ли пользователь букву
function isLetterRepeat(letter,array){
    return array.indexOf(letter) !== -1
}

//запомнить введенную букву
function addNewLetter(letter,array){
    return array.concat(letter)
}

//поиск введенной буквы в загалданном слове
function searchLetter(word,letter){
    return word.split("").indexOf(letter) > -1
} 

//заменить нижнее подчеркивание на угаданную букву
function changeLetters(word,letter,underscored) {
    for(var i = 0; i< word.length; i++){
        if(word[i] === letter){
            underscored =  underscored.substr(0, i*2) + letter + " " + underscored.substr(i*2+2);
        }
    }
    return underscored
}

//проверить, угаданы ли все буквы в слове
function hasUnderscores(underscored){
    return underscored.indexOf('_') === -1
}