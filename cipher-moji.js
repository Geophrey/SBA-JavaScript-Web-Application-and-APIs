import {
    randMoji,
    emojifier,
    wordList,
    arrayScrambler
    //createGamePlayStage
} from "./cipher-moji_Functions.js";

const API_KEY = "9bdb1f8b7be859e599793110b1e737762a9ce0b3";

let axiosDefaults = axios.create({
    baseURL: `https://emoji-api.com/emojis?access_key=${API_KEY}`,
});

let axiosCategories = axios.create({
    baseURL: `https://emoji-api.com/categories?access_key=${API_KEY}`,
});

axiosDefaults.defaults.headers.common["Content-Type"] = "application/json";
axiosCategories.defaults.headers.common["Content-Type"] = "application/json";
console.log(axiosDefaults.defaults.headers);
console.log(axiosDefaults.defaults.headers.common);
console.log(axiosDefaults);

// include a switch case for difficulty setting?
// might have to include the emoji categories?
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

async function start() {
    try {
        setTimeout(async () => {
            let List_Of_All_Emojis = await axiosDefaults.get();
            console.log(List_Of_All_Emojis);
            let randMojiSet = randMoji(List_Of_All_Emojis);
            console.log(randMojiSet);
            console.log(emojifier(randMojiSet));

            mysteryWord.textContent = emojifier(randMojiSet)[0];
            let scrambledMojiSet = arrayScrambler(randMojiSet)
            // arrayScrambler(randMojiSet).forEach((emojiObj) => {
            //     availableEmojis.textContent += emojiObj.icon + " \n" + emojiObj.name + " \n" + emojiObj.letterMatch + "   ";
            // });

            // let emojiGroup = document.createElement("div")
            // emojiGroup.classList.add("emojiGroup")
            // emojiGroup.setAttribute("id", "index")
            // console.log(emojiGroup)

            for (let k = 0; k < 26; k++){
                let emojiGroup = document.createElement("div")
                emojiGroup.classList.add("emojiGroup")
                emojiGroup.setAttribute("id", `index${k}`)
                availableEmojis.appendChild(emojiGroup)

                let emojiElement1 = document.createElement("p")
                emojiElement1.classList.add("availableEmojisElements")
                emojiElement1.setAttribute("id2", "icon")
                emojiElement1.setAttribute("id", `emojiIcon${k}`)

                let emojiElement2 = document.createElement("p")
                emojiElement2.classList.add("availableEmojisElements")
                emojiElement2.setAttribute("id", `emojiName${k}`)

                let emojiElement3 = document.createElement("p")
                emojiElement3.classList.add("availableEmojisElements")
                emojiElement3.setAttribute("id", `emojiAnswerCheck${k}`)

                emojiGroup.appendChild(emojiElement1)
                emojiGroup.appendChild(emojiElement2)
                emojiGroup.appendChild(emojiElement3)

                emojiElement1.textContent = scrambledMojiSet[k].icon
                emojiElement2.textContent = scrambledMojiSet[k].name
                //emojiElement3.textContent = scrambledMojiSet[k].
            }

            console.log(availableEmojis)
        }, 1000);
    } catch (error) {
        console.log(error);
    }

    // //let List_Of_All_Emojis2 = await axiosCategories.get();
    // // for (let y = 0; y < 26; y++) {
    // //     let randMoji = Math.floor(Math.random() * 1599);
    // //     emojiSet.push(List_Of_All_Emojis.data[randMoji].character)
    // // }
    // console.log(List_Of_All_Emojis);
    // // console.log(List_Of_All_Emojis2);
    // // console.log(randMoji)
    // // console.log(List_Of_All_Emojis.data[randMoji].character);
    // // console.log(List_Of_All_Emojis.data[randMoji].unicodeName);
    // // console.log(emojiSet)

    // let randMojiSet = randMoji(List_Of_All_Emojis)

    // // console.log(randMoji(List_Of_All_Emojis))
    // console.log(randMojiSet)
    // // console.log(emojifier(randMoji(List_Of_All_Emojis)))
    // console.log(emojifier(randMojiSet))
}

// start();

const startButton = document.getElementById("startButton");
let mainSection = document.getElementById("mainSect");

startButton.addEventListener("click", (event) => {
    start();

    let thingToDelete = document.querySelectorAll("div");
    while (thingToDelete[0].firstElementChild) {
        thingToDelete[0].firstElementChild.remove();
    }
    thingToDelete[0].remove();

    console.log(mainSection);

    let gamePlayStage = document.createElement("div");
    gamePlayStage.classList.add("gamePlayStage");
    mainSection.appendChild(gamePlayStage);

    let mysteryWord = document.createElement("div");
    mysteryWord.setAttribute("id", "mysteryWord");
    mysteryWord.textContent = "Loading...";
    console.log(mysteryWord);
    gamePlayStage.appendChild(mysteryWord);

    let availableEmojis = document.createElement("div");
    availableEmojis.setAttribute("id", "availableEmojis");
    availableEmojis.textContent = ""; //"Available Emojis test placeholder";
    gamePlayStage.appendChild(availableEmojis);

    let mainUserInput = document.createElement("div");
    mainUserInput.setAttribute("id", "mainUserInput");
    gamePlayStage.appendChild(mainUserInput);
    // mainUserInput.textContent = "Main user input test placeholder"

    let guessBoxLabel = document.createElement("label");
    guessBoxLabel.for = "guessBox";
    guessBoxLabel.classList.add("gameplayStuff");
    mainUserInput.appendChild(guessBoxLabel);

    let guessTextBox = document.createElement("input");
    guessTextBox.type = "text";
    guessTextBox.classList.add("gameplayStuff");
    guessTextBox.setAttribute("id", "guessBox");
    guessTextBox.setAttribute("placeholder", "You have 1 attempt");
    mainUserInput.appendChild(guessTextBox);

    // for (let k = 0; k < 26; k++){
    //     let emojiGroup = document.createElement("div").classList.add("emojiGroup").setAttribute("id", `index${k}`)
    //     availableEmojis.appendChild(emojiGroup)

    //     let emojiElement1 = document.createElement("p").classList.add("availableEmojisElements").setAttribute("id", `emojiIcon${k}`)
    //     let emojiElement2 = document.createElement("p").classList.add("availableEmojisElements").setAttribute("id", `emojiName${k}`)
    //     let emojiElement3 = document.createElement("p").classList.add("availableEmojisElements").setAttribute("id", `emojiAnswerCheck${k}`)

    //     emojiGroup.appendChild(emojiElement1)
    //     emojiGroup.appendChild(emojiElement2)
    //     emojiGroup.appendChild(emojiElement3)
    // }

    console.log(gamePlayStage);
});
