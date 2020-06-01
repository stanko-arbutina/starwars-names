const expect = require('chai').expect;
const starWars = require('./index');

describe('starwars-names', function () {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(starWars.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(itm => typeof itm === 'string' )
            }
        });

        it('Should contain "Luke Skywalker"', () => {
            expect(starWars.all).to.include('Luke Skywalker');
        });
    });

    describe('random', function () {
        it('should return random item from starwars.all', () => {
            const randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })
    });
});