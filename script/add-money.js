// log out button
document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = "./index.html";
})

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const selectBank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueByID('amount');
    const pin = getInputValueByID('pin');
    const mainBalance = getInnerTextByID('main-balance');

    if (amount < 0) {
        alert('Amount must be a positive Number')
        return;
    }

    if (selectBank && accountNumber && amount && pin) {
        if (selectBank === 'Bkash' || selectBank === 'Nagad' || selectBank === 'Rocket') {
            if (accountNumber.length === 11 && accountNumber.startsWith('01')) {
                if (pin === 1234) {
                    const sum = mainBalance + amount;
                    setInnerTextByIDandValue('main-balance', sum)
                    alert(`$${amount} Added Successfully`);

                    // added to txn history
                    const container = document.getElementById('txn-container');
                    const div = document.createElement('div');
                    div.innerHTML = `
                    <div class="w-11/12 mx-auto">
                    <div class="bg-[#17CB71] w-full max-w-sm rounded-xl shadow-md p-3">
                        <div class="flex justify-between items-center">
                            <div class="flex gap-x-3 justify-center items-center">
                                <div class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                                    <img src="assets/icon/add-money.png" alt="add money">
                                </div>
                                <div class="space-y-1">
                                    <h3 class="text-sm font-bold text-[#080808B3]">Add Money</h3>
                                    <h3 class="text-base font-semibold text-[#080808B3]">${accountNumber}</h3>
                                    <p class="text-sm">TrxID: CB${generateRandomTxnId()}</p>
                                </div>
                            </div>
                            <div class="text-right space-y-1">
                                <div class="font-bold"><h3>+$${amount}</h3></div>
                                <p class="text-sm font-medium">${getCurrentDateTime()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    `
                    container.appendChild(div);

                }
                else {
                    alert("Enter Valid Pin");
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

