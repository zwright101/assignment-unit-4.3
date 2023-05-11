let assert;
let expect;
if (typeof window === 'object') {
    // Run tests in browser
    assert = chai.assert;
    expect = chai.expect;
    // 'bdd' stands for "behavior driven development"
    mocha.setup('bdd');
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;

    const {
        basket,
        addItem,
        listItems,
        empty,
    } = require('../assignment/scripts/cart.js');
}

describe('Automated tests', function () {
    describe('Created global variable for `basket` as empty array', function () {
        it('Created global variable for `basket` as empty array', function () {
            expect(basket).to.be.a('array');
        });
    });
    describe('`addItem` function takes in an item, adds to the array', function () {
        it('`addItem` function takes in an item, adds to the array', function () {
            addItem('Kale');
            expect(basket.length).to.be.greaterThan(0);
            assert.equal(basket[basket.length - 1], 'Kale');
        });
    });
    describe('`addItem` function returns true', function () {
        it('`addItem` function returns true', function () {
            const result = addItem('Kale');
            expect(result, 'addItem() does not return anything').to.exist;
            expect(result).to.be.a('boolean');
            assert.equal(result, true);
        });
    });
});
if (typeof window === 'object') {
    mocha.run();
}
