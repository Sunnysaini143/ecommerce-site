const handleCheckout = async (items) => {
  console.log("Checkout clicked!");
  console.log("Items:", items);

  const lineItems = items.map((item) => {
    const { id, quantity } = item;
    const product = products.find((product) => product.id === id);

    if (!product) {
      console.log("Invalid item:", item);
      return null;
    }

    const { name, price } = product;

    return {
      price_data: {
        currency: "inr",
        product_data: {
          name,
        },
        unit_amount: Math.round(price * 100), // Convert rupees to paise and round to nearest whole number
      },
      quantity,
    };
  });

  const validLineItems = lineItems.filter((item) => item !== null);

  if (validLineItems.length === 0) {
    console.log("No valid line items found.");
    return;
  }

  const total = validLineItems
    .reduce((acc, item) => {
      const price = item.price_data.unit_amount / 100;
      const quantity = item.quantity;
      return acc + price * quantity;
    }, 0)
    .toFixed(2);

  console.log("Total Price:", total, validLineItems); // It should be a number now

  try {
    // Make API request to create checkout session
    const response = await axios.post(`https://olivine-rich-ceratonykus.glitch.me/create-checkout-session`, {
      lineItems: validLineItems,
    });
    const { url } = response.data;
    // Redirect the user to the checkout URL
    window.location.href = url;
  } catch (error) {
    console.log("Error creating checkout session:", error);
  }
};
