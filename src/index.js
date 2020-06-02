const starWarsNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');
const getRandomItem = uniqueRandomArray(starWarsNames);

function random(number){
    if (number === undefined) {
        return getRandomItem();
    }
    const randomItems = [];
    for (let i = 0; i < number; i++) randomItems.push(getRandomItem());
    return randomItems;
}



module.exports = {
    all: starWarsNames,
    random: random
}