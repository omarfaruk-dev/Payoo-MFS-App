document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();


    const amount = document.getElementById('amount').value;
    convertedAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;

    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseInt(mainBalance);


    if(amount && pin){
        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
            console.log(sum);
        }
        else {
            alert("Enter Valid Pin")
        }
    }

    
    else {
        alert("Enter Amount")
    }
})
