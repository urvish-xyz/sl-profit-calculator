function calculatePrice() {
  const priceInput = document.getElementById("priceInput");
  const price = parseFloat(priceInput.value);

  if (isNaN(price)) {
    alert("Please enter a valid number.");
    return;
  }

  const lowerValue = price * (1 - 0.015); // 1.5% decrease
  const upperValue = price * (1 + 0.03); // 3% increase

  const result = `Price: ${price.toFixed(2)}<br>
                 1.5% below: ${lowerValue.toFixed(2)}<br>
                 3% above: ${upperValue.toFixed(2)}`;

  document.getElementById("result").innerHTML = result;
}
