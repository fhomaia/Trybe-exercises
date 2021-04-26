function stringToUpperCase(string) {
    return string.toUpperCase();
}

function firstLetter(string) {
    return string[0];
}

function concatStrings(string1, string2) {
    return string1 + string2;
}

function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((dogs) => dogs.json)
    .catch(() => 'Not found')
}

module.exports = {
stringToUpperCase,
firstLetter,
concatStrings,
fetchDogs,
}