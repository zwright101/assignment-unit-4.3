console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}


// Do not modify, used for automated testing
module.exports = {
    basket,
    addItem,
    listItems,
    empty,
};