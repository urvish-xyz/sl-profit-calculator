function calculatePrice() {
  const priceInput = document.getElementById("priceInput");
  const price = parseFloat(priceInput.value);

  if (isNaN(price)) {
    alert("Please enter a valid number for price.");
    return;
  }

  const lowerPercentInput = document.getElementById("lowerPercentInput");
  const lowerPercent = parseFloat(lowerPercentInput.value);

  if (isNaN(lowerPercent)) {
    alert("Please enter a valid number for lower percentage.");
    return;
  }

  const upperPercentInput = document.getElementById("upperPercentInput");
  const upperPercent = parseFloat(upperPercentInput.value);

  if (isNaN(upperPercent)) {
    alert("Please enter a valid number for upper percentage.");
    return;
  }

  const lowerValue = price * (1 - lowerPercent / 100); // Lower value based on percentage
  const upperValue = price * (1 + upperPercent / 100); // Upper value based on percentage

  const result = `Price: ${price.toFixed(2)}<br>
                 ${lowerPercent}% below: ${lowerValue.toFixed(2)}<br>
                 ${upperPercent}% above: ${upperValue.toFixed(2)}`;

  document.getElementById("result").innerHTML = result;
}
