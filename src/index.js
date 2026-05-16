import starWarsNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';
const getRandomItem = uniqueRandomArray(starWarsNames);

function random(number){
    if (number === undefined) {
        return getRandomItem();
    }
    const randomItems = [];
    for (let i = 0; i < number; i++) randomItems.push(getRandomItem());
    return randomItems;
}


// function which returns a random name up to certain length of characters
function randomName(maxLength) {
    let name;
    do {
        name = getRandomItem();
    } while (name.length > maxLength);
    return name;
}

module.exports = {
    all: starWarsNames,
    random: random,
    randomName: randomName
}