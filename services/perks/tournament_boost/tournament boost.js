  // Get the select element for current rank
  const currentRankSelect = document.getElementById('current-rank');
  
  // Get the card element that displays the cost
  const costCard = document.querySelector('.card');
  
  // Define the cost for each rank
  const costs = {
    Bronze: 25,
    Silver: 31,
    Gold: 40,
    Platinum: 51,
    Diamond: 66,
    Champion: 85,
    'Grand Champion': 110,
    'Supersonic Legend': 141,
  };
  

// Add an event listener for the current rank select element
currentRankSelect.addEventListener('change', (event) => {
  // Get the selected rank
  const selectedRank = event.target.value;

  // Update the cost in the card
  const cost = costs[selectedRank];
  costCard.innerHTML = `<h1>Cost: $${cost}</h1>`;

  // Update the value of the paypal payment button
  const paypalButton = document.querySelector('#paypal-payment-button');
  paypalButton.value = cost;
});








  
paypal.Buttons({
  style: {
    color: "blue",
    shape: "pill",
  },
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: document.querySelector("#paypal-payment-button").value,
          },
        },
      ],
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      console.log(details);
      window.location.replace("/payment/success/success.html");
    });
  },
  onCancel: function (data) {
    window.location.replace("/payment/cancel/cancel.html");
  },
}).render("#paypal-payment-button");
