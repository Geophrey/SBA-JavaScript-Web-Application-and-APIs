import { randMoji, emojifier, wordList as mainWordList } from "./cipher-moji_Functions.js";

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

let emojiSet = [];

for (let y = 0; y < 26; y++) {}

// include a switch case for difficulty setting?
// might have to include the emoji categories?
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

async function start() {
    let testVariable = await axiosDefaults.get();
    
    //let testVariable2 = await axiosCategories.get();
    // for (let y = 0; y < 26; y++) {
    //     let randMoji = Math.floor(Math.random() * 1599);
    //     emojiSet.push(testVariable.data[randMoji].character)
    // }
    console.log(testVariable);
    // console.log(testVariable2);
    // console.log(randMoji)
    // console.log(testVariable.data[randMoji].character);
    // console.log(testVariable.data[randMoji].unicodeName);
    // console.log(emojiSet)

    let testArray = randMoji(testVariable)

    // console.log(randMoji(testVariable))
    console.log(testArray)
    // console.log(emojifier(randMoji(testVariable)))
    console.log(emojifier(testArray))

}

start();