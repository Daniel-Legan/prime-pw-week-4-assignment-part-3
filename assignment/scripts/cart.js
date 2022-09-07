console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//creating a new empty array
let basket = [];

//adding items to the basket array
function addItem(item) {
    basket.push(item); //adds item to end of basket
    return true;
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
    while(array.length > 0){
        array.pop(); //removes last item in an array
    }
}

/*--------------------*/
console.log(`Basket is ${basket}`); //not sure what $ is used for
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`); //not sure what $ is used for

//performing console.log of each element of the basket array
listItems(basket);
console.log(basket);
//performing empty function
empty(basket);
addItem('tomato');
addItem('celery');
//displaying contents of basket
console.log(basket);