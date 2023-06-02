// index.js

var cartItems = [];

function addToCart(product) {
  var item = {
    product: product,
    price: getPrice(product)
  };
  cartItems.push(item);
  updateCart();
}

function updateCart() {
  var cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach(function(item) {
    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    var itemText = document.createTextNode(item.product + " - $" + item.price);
    cartItem.appendChild(itemText);
    cartItemsContainer.appendChild(cartItem);
  });
}

function getPrice(product) {
  var productElements = document.getElementsByClassName("customer-services");
  for (var i = 0; i < productElements.length; i++) {
    var element = productElements[i];
    if (element.innerText.trim() === product) {
      var priceElement = element.parentElement.nextElementSibling;
      return priceElement.innerText.trim();
    }
  }
  return "N/A";
}

function checkout() {
  if (cartItems.length > 0) {
    console.log("Number of items purchased: " + cartItems.length);
    alert("Thank you for your purchase!");
    cartItems = [];
    updateCart();
  } else {
    alert("Your cart is empty. Please add items before checking out.");
  }
}
