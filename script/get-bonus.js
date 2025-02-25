document.getElementById('bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();


   const couponCode = document.getElementById('coupon-code').value;
   const bonusAmount = 100;
   const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if(couponCode === "EID2025"){
        const sum = convertedMainBalance + bonusAmount;
                    document.getElementById('main-balance').innerText = sum;
        alert(`You got $${bonusAmount} successfully!`)
    }
    else {
        alert("Invalid Coupon Code")
    }
})