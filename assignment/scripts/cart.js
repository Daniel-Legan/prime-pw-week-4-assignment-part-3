console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//creating a new empty array
let basket = [];
const maxItems = 5;

//adding an item to the basket
function addItem(item) {
    if(!isFull(basket)) {
        basket.push(item); //"if the basket is not full, add the item to the basket"
        return true;
    }else {
        return false; //"if the basket is full, do not add the item to the basket"
    }
}

//printing each item of an array of unknown length
function listItems(array) {
    let i = 0;
    while(i < array.length) {
        console.log(array[i]);
        i++;
    }
}

//removing each item of an array and displaying eatch iteration
function empty(array) {
    while(array.length > 0) {
        array.pop(); //removes last item in an array
    }
}

//checks if basket is full or not
function isFull(array) {
    if(array.length < maxItems) {
        return false;
    }else {
        return true;
    }
}

function removeItem(item) {
    if(basket[basket.indexOf(item)] === item) { 
        return basket.splice(basket.indexOf(item), 1);
    }else {
        return null;
    }
}

/*--------------------*/
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding grapes (expect true)', addItem('grapes'));

//performing console.log of each element of the basket on a new line
listItems(basket);
console.log(basket);

//performing empty function
empty(basket);

addItem('tomato');
addItem('celery');
addItem('spinach');
addItem('peach');
addItem('watermelon');
addItem('chips'); //not added to basket

console.log('Is the basket full?:', isFull(basket));
console.log('The items in the basket are:', basket);
console.log('Removing item:', removeItem('spinach'));
console.log('The items in the basket are now:', basket);