document.getElementById('send-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const transferNumber = document.getElementById('transfer-number').value;
    const transferAmount = document.getElementById('transfer-amount').value;
    const convertedTransferAmount = parseFloat(transferAmount);

    const pin = document.getElementById('transfer-pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if (transferNumber && transferAmount && pin) {
        if (transferNumber.length === 11) {
            if (convertedPin === 1234) {
                if (convertedTransferAmount <= convertedMainBalance && convertedTransferAmount > 0) {
                    const sum = convertedMainBalance - convertedTransferAmount;
                    document.getElementById('main-balance').innerText = sum;
                    alert(`$${transferAmount} Send Successfully`);
                }
                else {
                    alert("Invalid Amount"); 
                }
            }
            else {
                alert("Enter Valid Pin");
            }
        }
        else {
            alert("Invalid Account Number");
        }
    }
    else {
        alert("Plesae, Fillup all");
    }
})