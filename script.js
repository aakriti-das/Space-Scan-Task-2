function convertCurrency() {
    // Get user input
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Make sure the amount is a valid number
    if (isNaN(amount)) {
        alert('Please enter a valid number for the amount.');
        return;
    }

    // You can replace the API endpoint with a real currency conversion API
    var apiKey = 'YOUR_API_KEY';
    var apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    // Fetch the exchange rates from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Calculate the converted amount
            var exchangeRate = data.rates[toCurrency];
            var convertedAmount = amount * exchangeRate;

            // Display the result
            document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
