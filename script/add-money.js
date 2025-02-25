document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const selectBank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if (selectBank && accountNumber && amount && pin) {
        if (selectBank === 'Bkash' || selectBank === 'Nagad' || selectBank === 'Rocket') {
            if (accountNumber.length === 11) {
                if (convertedPin === 1234) {
                    const sum = convertedMainBalance + convertedAmount;
                    document.getElementById('main-balance').innerText = sum;
                    console.log(sum);
                    alert(`$${amount} Added Successfully`);
                }
                else {
                    alert("Enter Valid Pin")
                }
            }
            else {
                alert("Invalid Account Number")
            }
        }
        else {
            alert("Select A Bank Account")
        }

    }

    else {
        alert("Please, Fillup all!")
    }
})


// log out button
document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = "./index.html";
})
