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



module.exports = {
    all: starWarsNames,
    random: random
}