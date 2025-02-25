document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById('agent-number').value;
    const cashOutAmount = document.getElementById('cashout-amount').value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);

    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if (agentNumber && cashOutAmount && pin) {
        if (agentNumber.length === 11) {
            if (convertedPin === 1234) {
                if (convertedCashOutAmount <= convertedMainBalance && convertedCashOutAmount > 0) {
                    const sum = convertedMainBalance - convertedCashOutAmount;
                    document.getElementById('main-balance').innerText = sum;
                    alert(`$${cashOutAmount} Withdraw Successfully`);
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