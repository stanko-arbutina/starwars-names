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
        });
        it('should return an array of random items if passed an integer', () => {
            const randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(item => {
                expect(starWars.all).to.include(item);
            });
        });
    });
});