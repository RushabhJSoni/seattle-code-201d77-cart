/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
// console.log(cart);
/// ----------------------------- cart is and instance of a CART -------------------////
/// ------------------- use cmd/ctl f to look for words in your code ------------------///

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
 
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i of Product.allProducts) {
    let optElm = document.createElement('option');
    
    optElm.label = `${i.name}`;
    selectElement.appendChild(optElm);
    
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  event.preventDefault();

  // DONE: Prevent the page from reloading
  /// --------------- at this point you know which item was picked from the list, how many ----------- ///
  // Do all the things ...
  const product = event.target.querySelector('option').label;

  const quantity = parseInt(event.target.quantity.value);
  console.log(product, quantity);
  
  
  
  
  addSelectedItemToCart(product,quantity);
  // cart.saveToLocalStorage();
  // updateCounter();
  // updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(product , quantity) {
  
  // new CartItem(product,quantity);
  let newCartItem = new Cart (items);
  newCartItem.addItem(product,quantity);
  

  
  
  
  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {


  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
