document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById('agent-number').value;

    const cashOutAmount = getInputValueByID('cashout-amount');

    const pin = getInputValueByID('cashout-pin');
    const mainBalance = getInnerTextByID('main-balance');

    if (cashOutAmount < 0 || cashOutAmount > mainBalance) {
        alert('Amount must be a valid number');
        return;
    }

    if (agentNumber && cashOutAmount && pin) {
        if (agentNumber.length === 11) {
            if (pin === 1234) {
                if (cashOutAmount <= mainBalance) {
                    const sum = mainBalance - cashOutAmount;
                    setInnerTextByIDandValue('main-balance', sum)
                    alert(`$${cashOutAmount} Withdraw Successfully`);
                   
                    
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
                                    <img src="assets/icon/cash-out.png" alt="add money">
                                </div>
                                <div class="space-y-1">
                                    <h3 class="text-sm font-bold text-[#080808B3]">Cash Out</h3>
                                    <h3 class="text-base font-semibold text-[#080808B3]">${agentNumber}</h3>
                                    <p class="text-sm">TrxID: DB${generateRandomTxnId()}</p>
                                </div>
                            </div>
                            <div class="text-right space-y-1">
                                <div class="font-bold"><h3>-$${cashOutAmount}</h3></div>
                                <p class="text-sm font-medium">${getCurrentDateTime()}</p>
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