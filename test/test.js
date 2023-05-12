/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let testItems = {};
if (typeof window === 'object') {
    // Run tests in browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    testItems = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
    };
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    testItems = require('../assignment/scripts/cart.js');
}

/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {
    describe('Created global variable for `basket` as empty array', function () {
        it('Created global variable for `basket` as empty array', function () {
            let { basket } = testItems;
            expect(basket).to.be.a('array');
        });
    });
    describe('`addItem` function takes in an item, adds to the array', function () {
        it('`addItem` function takes in an item, adds to the array', function () {
            let { basket, addItem } = testItems;
            addItem('Kale');
            expect(basket.length).to.be.greaterThan(0);
            assert.equal(basket[basket.length - 1], 'Kale');
        });
    });
    describe('`addItem` function returns true', function () {
        it('`addItem` function returns true', function () {
            let { addItem } = testItems;
            const result = addItem('Kale');
            expect(result, 'addItem() does not return anything').to.exist;
            expect(result).to.be.a('boolean');
            assert.equal(result, true);
        });
    });
    describe('`listItems` loops over `basket` array and logs each item', function () {
        it('`listItems` loops over `basket` array and logs each item', function () {
            let { listItems } = testItems;
            // clear basket
            basket.length = 0;
            basket.push('Kale', 'Spinach');
            let tempLog = console.log;
            let result = '';
            // Temporarily override console.log
            console.log = (item) => result += item;
            listItems(basket);
            // Set it back to default
            console.log = tempLog;
            expect(result, 'listItems() does not return anything').to.exist;
            expect(result).to.be.a('string');
            assert.equal(result.includes('Kale'), true);
            assert.equal(result.includes('Spinach'), true);
        });
    });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
