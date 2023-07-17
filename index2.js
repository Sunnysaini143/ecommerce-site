console.log("here is indexjs2");

var addToCartBtns = document.getElementsByClassName("addToCartBtn");
var totalValue = 0;
var cartItems = [];

function findParentElementByClassName(element, className) {
  while (element.parentElement) {
    element = element.parentElement;
    if (element.classList.contains(className)) {
      return element;
    }
  }
  return null;
}

function handleClick() {
  var value = parseInt(this.value);
  var customerServiceDiv = findParentElementByClassName(this, "bottom-product")
    .querySelector(".customer-services").innerText;

  var existingItem = cartItems.find(item => item.name === customerServiceDiv);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.subtotal += value;
  } else {
    var newItem = {
      name: customerServiceDiv,
      price: value,
      quantity: 1,
      subtotal: value
    };
    cartItems.push(newItem);
  }

  totalValue += value;
  console.log("Clicked value: " + value);
  console.log("Total value: " + totalValue);
  console.log("Cart Items: ", cartItems);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", handleClick);
}
