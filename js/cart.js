/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector('#cart tbody').innerHTML = '';
}
  


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let tableBody =  document.querySelector('#cart tbody');
  // TODO: Iterate over the items in the cart
  for (i = 0; i < cart.length; i++) {
    // TODO: Create a TR
  let tableRows = document.createElement('tr');
  tableRows.textContent = "Product";
  tableBody.appendChild(tableRows);

  // TODO: Create a TD for the delete link, quantity,  and the item
  let tableDataDelete = document.createElement('td');
  tableDataDelete.textContent = 'Delete Link';
  tableRows.appendChild(tableDataDelete);

  let tableDataQuantity = document.createElement('td');
  tableDataQuantity.textContent = 'Quantity';
  tableRows.appendChild(tableDataQuantity);

  let tableDataItem = document.createElement('td');
  tableDataItem.textContent = 'Item';
  tableRows.appendChild(tableDataItem);
  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}


button.addEventListener('click', removeItemFromCart);

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
