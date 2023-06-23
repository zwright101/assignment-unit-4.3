console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = []; 

function addItem(item){
    basket.push(item);
    return true;
}
addItem('Apple');
addItem('Bananas');
addItem('Kale');
addItem('Spinach');
addItem('Eggs');
addItem('Bread');
addItem('Kiwi');

console.log(basket);
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


function listItems(basket){
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
  }

listItems(basket);


//function empty(array){
//    array.splice(0, array.length)
// }
// empty(basket);
// console.log(basket); 




const maxItems = 5;

function isFull(array) {
    if (array >= maxItems) {
        return true;
    } else {
        return false;
    }
}
isFull(basket);





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
