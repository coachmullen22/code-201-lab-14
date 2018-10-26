/* global Product, Cart */

'use strict';

var cart = new Cart([]);

function populateForm() {
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    createElement('option', Product.allProducts[i].name, selectElement);
  }

}
function handleSubmit(event) {
  event.preventDefault();
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}
function addSelectedItemToCart() {
  cart.addItem(catalog.items.options.selectedIndex, catalog.quantity.value);
}
function updateCounter() {
  document.getElementById('itemCount').innerHTML=`(${cart.items.length})`;
}
function updateCartPreview() {
  var cartContents = document.getElementById('cartContents');
  cartContents.innerHTML = '';
  for(var i = 0; i < cart.items.length; i++) {
    var element = document.createElement('img');
    element.src=`${Product.allProducts[cart.items[i].product].filePath}`;
    cartContents.appendChild(element);

    createElement('p', cart.items[i].quantity, cartContents);
  }
}

var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();
