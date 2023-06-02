console.log("here is indexjs2")
var addToCartBtns = document.getElementsByClassName("addToCartBtn");
var totalValue = 0;

function handleClick() {
  var value = parseInt(this.value);
  totalValue += value;
  console.log("Clicked value: " + value);
  console.log("Total value: " + totalValue);
}

for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", handleClick);
}
