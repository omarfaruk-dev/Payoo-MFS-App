document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault(); // setup default behavior

    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)

    if(accountNumber.length ===11){
        if(convertedPin ===1234){
            window.location.href="./main.html"
        }
        else{
            alert('Invalid pin');
        }
    }
    else{
        alert('Invalid Account');
    }

})