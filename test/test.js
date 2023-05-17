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
        // Functions
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
        // Variables
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        basket: typeof basket !== 'undefined' ? basket : undefined,
    };
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    testItems = require('../assignment/scripts/cart.js');
}
let originalBasket;
/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {
    /**
     * We need to modify the the basket for tests. Make a copy of
     * the original and set it back after the tests are run.
     */
    before(function () {
        // runs once before the first test in this block
        let { basket } = testItems;
        if(typeof basket === 'array') {
            originalBasket = [...basket];
        }    
    });
    after(function () {
        // runs once after the last test in this block
        if(typeof basket === 'array') {
            basket = [...originalBasket];
        } 
    });
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
            let { listItems, basket } = testItems;
            let result;
            if (typeof basket === 'array') {
                result = '';
                // clear basket
                basket.length = 0;
                basket.push('Kale', 'Spinach');
                let tempLog = console.log;
                
                // Temporarily override console.log
                console.log = (item) => result += item;
                listItems(basket);
                // Set it back to default
                console.log = tempLog;
            }
            expect(result, 'listItems() does not return anything').to.exist;
            expect(result).to.be.a('string');
            assert.equal(result.includes('Kale'), true);
            assert.equal(result.includes('Spinach'), true);
        });
    });
    describe(`Functions are tested using console.log()`, function () {
        it(`Functions are tested using console.log()`, function () {
            if (typeof counter === 'undefined') {
                // Skip this test if running on the server
                this.skip();
            } else {
                // Only run this test in the browser
                expect(counter, `console.log() was only called ${counter} times.`).to.be.greaterThan(5);
            }
        });
    });
    describe('STRETCH: Added a global const named `maxItems` and set it to 5', function () {
        it('STRETCH: Added a global const named `maxItems` and set it to 5', function () {
            let { maxItems } = testItems;
            if (maxItems === undefined) {
                // Skip the stetch goal if not attempted
                this.skip();
            } else {
                // Only add the stretch goal if attempted
                expect(maxItems).to.be.a('number');
                assert.equal(maxItems, 5);
            }
        });
    });
    describe('STRETCH: `isFull` function correctly returns boolean `false`', function () {
        it('STRETCH: `isFull` function correctly returns boolean `false`', function () {
            let { isFull, basket } = testItems;
            if (isFull === undefined) {
                // Skip the stetch goal if not attempted
                this.skip();
            } else {
                basket.length = 0;
                let result = isFull()
                // Only add the stretch goal if attempted
                expect(result).to.be.a('boolean');
                assert.equal(result, false);
            }
        });
    });
    describe('STRETCH: `isFull` function correctly returns boolean `true`', function () {
        it('STRETCH: `isFull` function correctly returns boolean `true`', function () {
            let { isFull, basket } = testItems;
            if (isFull === undefined) {
                // Skip the stetch goal if not attempted
                this.skip();
            } else {
                basket.length = 0;
                basket.push('Kale', 'Spinach', 'Swiss Chard', 'Arugula', 'Bok choy');
                let result = isFull()
                // Only add the stretch goal if attempted
                expect(result).to.be.a('boolean');
                assert.equal(result, true);
            }
        });
    });
    describe('STRETCH: `addItem` function updated to use `isFull` and return `false` when full', function () {
        it('STRETCH: `addItem` function updated to use `isFull` and return `false` when full', function () {
            let { maxItems, isFull, basket, addItem } = testItems;
            if (maxItems === undefined) {
                // Skip the stetch goal if not attempted
                this.skip();
            } else {
                // clear basket
                basket.length = 0;
                basket.push('Kale', 'Spinach', 'Swiss Chard', 'Arugula', 'Bok choy');
                const result = addItem('Dandelion greens');
                expect(result, 'addItem() does not return anything').to.exist;
                expect(result).to.be.a('boolean');
                assert.equal(result, false);
            }
        });
    });
    describe('STRETCH: `removeItem` function removes & returns the first matching item from `basket`', function () {
        it('STRETCH: `removeItem` function removes & returns the first matching item from `basket`', function () {
            let { removeItem, isFull, basket, addItem } = testItems;
            if (removeItem === undefined) {
                // Skip the stetch goal if not attempted
                this.skip();
            } else {
                // clear basket
                basket.length = 0;
                basket.push('Kale', 'Spinach', 'Swiss Chard', 'Arugula', 'Bok choy');
                const result = removeItem('Spinach');
                expect(result, 'removeItem() does not return anything').to.exist;
                expect(result).to.be.a('string');
                assert.equal(result, 'Spinach');
                assert.equal(basket.length, 4);
            }
        });
    });
    describe('STRETCH: `removeItem` function returns null when item is not found', function () {
        it('STRETCH: `removeItem` function returns null when item is not found', function () {
            let { removeItem, isFull, basket, addItem } = testItems;
            if (removeItem === undefined) {
                // Skip the stetch goal if not attempted
                this.skip();
            } else {
                // clear basket
                basket.length = 0;
                basket.push('Kale', 'Spinach', 'Swiss Chard', 'Arugula', 'Bok choy');
                const result = removeItem('Dandelion greens');
                assert.equal(result, null);
                assert.equal(basket.length, 5);
            }
        });
    });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
