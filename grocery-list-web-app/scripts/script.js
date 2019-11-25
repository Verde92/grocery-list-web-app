/*
console.log("it is finally working");
console.log("yes");

let name = "eric", age = 23, isMarried = false;

console.log("How old is " + name + "?" )
console.log("is " + name + "married?" + isMarried)

// alert("hey! welcome to your personal grocery list!");
/*
function myFunction() {
    document.getElementById() {
        console.log("this is what happens when you click it.")
    }
}
*/
//testing if else statement
/*
const checkout = false;
/*
if (checkout = true) {
    console.log("you can now checkout.");
} else {
    console.log("your cart is empty.");
}
*/
/*
(checkout === true)?console.log("you can now checkout."):console.log("your cart is empty.");
const myYear = 1992;
let now = 2018;
function thisFunction(myYear,now) {
    let myAge = ( now - myYear);
}
thisFunction(2018,1992);
console.log("I am " + thisFunction + "years old.")
*/

// create checklist functionality 

const checkBox = document.querySelector(".checkbox");
const createListItem = document.querySelector(".plus");
const removeListItem = document.querySelector(".minus");
const inputList = document.querySelector("#input-box");

// button test - change color on click. Can use for darkmode. const bodyTest = document.querySelector('.test'); 

// createCheckBox.addEventListener('click', function() {
//     bodyTest.classList.toggle('test')
// })

// on click will add checklist item

addListItem.addEventListener('click', function() {
    const newListItem = document.createElement('li');
    const listContent = document.createTextNode(inputList.value);

    newListItem.appendChild('listContent');
}
