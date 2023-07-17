document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.value;
        console.log(`Added to cart: ${value}`);
      });
    });
  });
  