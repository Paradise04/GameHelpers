


        window.addEventListener('DOMContentLoaded', () => {
          const continueBtn = document.getElementById("continue-btn");
          const nextButton = document.getElementById("next-button");
          let hasCalculated = false;
        
          continueBtn.addEventListener("click", function() {
            hasCalculated = true; // Updating the variable to indicate that the user has calculated
            nextButton.removeAttribute("disabled"); // Enabling the next button when the calculate button is clicked
          });
        
          nextButton.addEventListener("click", function(event) {
            if (!hasCalculated) {
              event.preventDefault(); // Preventing the next button from redirecting if the calculate button has not been clicked
              nextButton.setAttribute("disabled", "disabled"); // Disabling the next button if calculate button is not clicked before the next button
              alert("Please calculate before proceeding!"); // Displaying the alert message if calculate button is not clicked before the next button
              return;
            }
            else {
              // If the user has calculated, remove the event listener to prevent further prevention of default behavior
              window.location.href = "/index.html";
              nextButton.removeEventListener("click", arguments.callee);
            }
          });
        });

        const currentRankSelect = document.getElementById("current-rank");
const winsInput = document.getElementById("wins");
const costDisplay = document.querySelector(".card h1");

const rankPrices = {
  "Bronze I": 3,
  "Bronze II": 3,
  "Bronze III": 3,
  "Silver I": 5,
  "Silver II": 5,
  "Silver III": 5,
  "Gold I": 7,
  "Gold II": 7,
  "Gold III": 7,
  "Platinum I": 9,
  "Platinum II": 9,
  "Platinum III": 9,
  "Diamond I": 9.5,
  "Diamond II": 9.5,
  "Diamond III": 9.5,
  "Champion I": 12,
  "Champion II": 13,
  "Champion III": 14,
  "Grand Champion I": 15,
  "Grand Champion II": 17,
  "Grand Champion III": 22,
  "Super Sonic Legend": 25,
};

currentRankSelect.addEventListener("change", updatePrice);
winsInput.addEventListener("input", updatePrice);




function updatePrice() {
  const currentRank = currentRankSelect.value;
  const wins = parseInt(winsInput.value);
  const basePrice = rankPrices[currentRank];
  let price = basePrice * wins;
  price = price.toFixed(2);
  costDisplay.textContent = `$${price}`;

  // Set the value in the PayPal button
  document.querySelector("#paypal-payment-button").value = price;
}



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
