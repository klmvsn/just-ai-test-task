function getRandomWordKey(keys) {
    var i = 0
    keys.forEach(function(elem) {
        i++
    })
    return  $jsapi.random(i);
}

function setUnderscores(word) {
    var underscores='';
    for(var i = 0; i< word.length; i++)
        underscores+='_ '
    return underscores
}

function searchLetter(word,letter){
    return word.split("").indexOf(letter) > -1
} 

function changeLetters(word,letter,underscored) {
    for(var i = 0; i< word.length; i++){
        if(word[i] === letter){
            underscored =  underscored.substr(0, i*2) + letter + " " + underscored.substr(i*2+2);
        }
    }
    return underscored
}