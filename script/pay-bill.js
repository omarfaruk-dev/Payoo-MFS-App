document.getElementById('pay-bill-btn').addEventListener('click', function (event) {
    event.preventDefault();


    const selectedBank = document.getElementById('selected-bank').value;
    const billAccountNumber = document.getElementById('bill-account-number').value;
    const billAmount = getInputValueByID('bill-amount');
    const pin = getInputValueByID('bill-pin');
    const mainBalance = getInnerTextByID('main-balance');

    if (billAmount < 0 || billAmount > mainBalance) {
        alert('Amount must be a valid Amount');
        return;
    }

    if( selectedBank && billAccountNumber && billAmount && pin){
        if( selectedBank ==='Electricity' || selectedBank === 'Internet' || selectedBank ==='Gas'){
            if(billAccountNumber.length === 11 && billAccountNumber.startsWith('01')){
                if( pin === 1234){
                    const sum = mainBalance - billAmount;
                    setInnerTextByIDandValue('main-balance', sum);
                    alert(`$${billAmount} Successfully paid for: ${selectedBank} bill`);
                    //added to txn history
                    const container = document.getElementById('txn-container');
                    const div = document.createElement('div');
                    div.innerHTML = `
                    <div class="w-11/12 mx-auto">
                    <div class="bg-[#FFB02E] w-full max-w-sm rounded-xl shadow-md p-3">
                        <!-- card content -->
                        <div class="flex justify-between items-center">
                            <div class="flex gap-x-3 justify-center items-center">
                                <div class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                                    <img src="assets/icon/pay-bill.png" alt="add money">
                                </div>
                                <div class="space-y-1">
                                    <h3 class="text-sm font-bold text-[#080808B3]">Pay Bill</h3>
                                    <h3 class="text-base font-semibold text-[#080808B3]">${selectedBank}</h3>
                                    <p class="text-sm">TrxID: DB${generateRandomTxnId()}</p>
                                </div>
                            </div>
                            <div class="text-right space-y-1">
                                <div class="font-bold"><h3>-$${billAmount}</h3></div>
                                <p class="text-sm font-medium">${getCurrentDateTime()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    `
                    container.appendChild(div);


                }
                else{
                    alert("Enter Valid Pin")
                }
            }
            else{
                alert("Invalid Account Number");
            }
        }
        else{
            alert('You must select payer')
        }
    }
    else {
        alert('Input Field not be Empty');
    }




})







