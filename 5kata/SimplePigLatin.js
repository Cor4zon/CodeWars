//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

function isAlpha(symbol) {
    return symbol.toLowerCase() !== symbol.toUpperCase()
 }

const pigWord = (word) => {
    let firstAlphaIndex = -1;
    for (let i = 0; i < word.length; i++) {
        if (isAlpha(word[i])) {
           firstAlphaIndex = i;
           break;
        }
    }
    if (firstAlphaIndex === -1) {
        return word;
    }
    return word.slice(0, firstAlphaIndex) + word.slice(firstAlphaIndex+1, word.length) + word[firstAlphaIndex] + 'ay';
}

function pigIt(str){
    const words = str.split(' ');
    let res = ``;
    for (let i = 0; i < words.length; i++) {
       res += pigWord(words[i]) + ` `
    }

    console.log(res);
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
pigIt('!Hello world !');     // elloHay orldway !
