document.getElementById('bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();


    const couponCode = document.getElementById('coupon-code').value;
    const bonusAmount = 100;
    const mainBalance = getInnerTextByID('main-balance');

    if (couponCode === "EID2025") {
        const sum = mainBalance + bonusAmount;
        setInnerTextByIDandValue('main-balance', sum)
        alert(`You got $${bonusAmount} successfully!`)

         // added to txn history
         const container = document.getElementById('txn-container');
         const div = document.createElement('div');
         div.innerHTML = `
         <div class="w-11/12 mx-auto">
                    <div class="bg-[#0450ae9c] w-full max-w-sm rounded-xl shadow-md p-3">
                        <!-- card content -->
                        <div class="flex justify-between items-center">
                            <div class="flex gap-x-3 justify-center items-center">
                                <div class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                                    <img src="assets/icon/get-bonus.png" alt="add money">
                                </div>
                                <div class="space-y-1">
                                    <h3 class="text-sm font-bold text-[#080808B3]">Get Bonus</h3>
                                    <h3 class="text-base font-semibold text-[#080808B3]">WOW! you got gift!</h3>
                                    <p class="text-sm">TrxID: CB${generateRandomTxnId()}</p>
                                </div>
                            </div>
                            <div class="text-right space-y-1">
                                <div class="font-bold"><h3>+$${bonusAmount}</h3></div>
                                <p class="text-sm font-medium">${getCurrentDateTime()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
        container.appendChild(div);

    }
    else {
        alert("Invalid Coupon Code")
    }
})