export const wordList = [
    "jockey",
    "wolf",
    "upset",
    "gallon",
    "delay",
    "activate",
    "negative",
    "pot",
    "genetic",
    "flow",
];

export function emojifier(emojiArray){
    let mysteryWord = wordList[Math.floor(Math.random() * 10)]
    let emojifiedWord = ""

    mysteryWord = mysteryWord.split("")
    for (let mysCount = 0, objCount = 0; mysCount < mysteryWord.length; mysCount++){
        emojiArray.forEach(emojiObject => {
            if (emojiObject.letterMatch.toLowerCase() == mysteryWord[mysCount]){
            emojifiedWord += emojiObject.icon
            //mysCount++
        }
        });
        // if (emojiArray[objCount].letterMatch.toLowerCase() == mysteryWord[mysCount]){
        //     emojifiedWord += emojiArray[objCount].icon
        //     mysCount++
        // }
        // else {
        //     continue;
        // }
    }

    return emojifiedWord

    //console.log(emojiArray[7].icon)
}

export function randMoji(allEmojis) {
    //creates a random set of emoji objects
    const emojiSet = [];
    const letterSet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let y = 0; y < 26; y++) {
        let randMoji = Math.floor(Math.random() * 1599);
        //emojiSet.push(allEmojis.data[randMoji].character);
        const emoji = {
            name: allEmojis.data[randMoji].unicodeName,
            icon: allEmojis.data[randMoji].character,
            letterMatch: letterSet[y],
            letterMatchIndex: y
        };

        emojiSet.push(emoji);
    }

    return emojiSet;
}

// export function setLetters() {
//     const letterSet = [];

//     for (let l = 0; l < 26; l++) {
//         const letter = {
//             letter: ,
//             index: l
//         }
//     }
// }
