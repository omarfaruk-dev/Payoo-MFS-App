document.getElementById('send-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const transferNumber = document.getElementById('transfer-number').value;
    const transferAmount = getInputValueByID('transfer-amount');

    const pin = getInputValueByID('transfer-pin');
    const mainBalance = getInnerTextByID('main-balance');
    if (transferAmount < 0 || transferAmount > mainBalance) {
        alert('Amount must be a valid number');
        return;
    }

    if (transferNumber && transferAmount && pin) {
        if (transferNumber.length === 11 && transferNumber.startsWith('01')) {
            if (pin === 1234) {
                if (transferAmount <= mainBalance) {
                    const sum = mainBalance - transferAmount;
                    setInnerTextByIDandValue('main-balance', sum)
                    alert(`$${transferAmount} Send Successfully`);

                    // added to txn history
                    const container = document.getElementById('txn-container');
                    const div = document.createElement('div');
                    div.innerHTML = `
                    <div class="w-11/12 mx-auto">
                    <div class="bg-[#FFB02E] w-full max-w-sm rounded-xl shadow-md p-3">
                        <!-- Cash out content -->
                        <div class="flex justify-between items-center">
                            <div class="flex gap-x-3 justify-center items-center">
                                <div class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                                    <img src="assets/icon/transaction.png" alt="transfer money">
                                </div>
                                <div class="space-y-1">
                                    <h3 class="text-sm font-bold text-[#080808B3]">P2P Transfer</h3>
                                    <h3 class="text-base font-semibold text-[#080808B3]">${transferNumber}</h3>
                                    <p class="text-sm">TrxID: DB${generateRandomTxnId()}</p>
                                </div>
                            </div>
                            <div class="text-right space-y-1">
                                <div class="font-bold"><h3>-$${transferAmount}</h3></div>
                                <p class="text-sm font-medium">${getCurrentDateTime()}</p>
                                <!-- <div class="three-dot text-right"></div> -->
                            </div>
                        </div>
                    </div>
                </div>
                    `
                    container.appendChild(div);


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