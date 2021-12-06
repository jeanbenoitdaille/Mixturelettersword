function shuffleWord(word) {
    let wordList = word.toLowerCase().split("");
    let randomizedWordList = wordList.sort(() => Math.random() - 0.5)
    let randomizedWord = randomizedWordList.join("");
    return randomizedWord.charAt(0).toUpperCase() + randomizedWord.slice(1);
}
 
let resultat = shuffleWord("Bonjour")
console.log(resultat);