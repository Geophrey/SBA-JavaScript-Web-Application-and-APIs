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

export function emojifier(emojiArray) {
    let mysteryWord = wordList[Math.floor(Math.random() * 10)];
    let emojifiedWord = "";

    mysteryWord = mysteryWord.split("");
    for (
        let mysCount = 0, objCount = 0;
        mysCount < mysteryWord.length;
        mysCount++
    ) {
        emojiArray.forEach((emojiObject) => {
            if (
                emojiObject.letterMatch.toLowerCase() == mysteryWord[mysCount]
            ) {
                emojifiedWord += emojiObject.icon;
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

    return emojifiedWord;

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
            letterMatchIndex: y,
        };

        emojiSet.push(emoji);
    }

    return emojiSet;
}

// could refactor in the future to make this function work as an import
// export function createGamePlayStage() {
//     let gamePlayStage = document.createElement("div");
//     gamePlayStage.classList.add("gamePlayStage");
//     mainSection.appendChild(gamePlayStage);

//     let mysteryWord = document.createElement("div");
//     mysteryWord.setAttribute("id", "mysteryWord");
//     mysteryWord.textContent = "Loading...";
//     console.log(mysteryWord);
//     gamePlayStage.appendChild(mysteryWord);

//     let availableEmojis = document.createElement("div");
//     availableEmojis.setAttribute("id", "availableEmojis");
//     availableEmojis.textContent = ""; //"Available Emojis test placeholder";
//     gamePlayStage.appendChild(availableEmojis);

//     let mainUserInput = document.createElement("div");
//     mainUserInput.setAttribute("id", "mainUserInput");
//     gamePlayStage.appendChild(mainUserInput);
//     // mainUserInput.textContent = "Main user input test placeholder"

//     let guessBoxLabel = document.createElement("label");
//     guessBoxLabel.for = "guessBox";
//     guessBoxLabel.classList.add("gameplayStuff");
//     mainUserInput.appendChild(guessBoxLabel);

//     let guessTextBox = document.createElement("input");
//     guessTextBox.type = "text";
//     guessTextBox.classList.add("gameplayStuff");
//     guessTextBox.setAttribute("id", "guessBox");
//     guessTextBox.setAttribute("placeholder", "You have 1 attempt");
//     mainUserInput.appendChild(guessTextBox);

//     console.log(gamePlayStage);
// }
