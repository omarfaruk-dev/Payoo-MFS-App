//logo click redirect to homepage
document.getElementById('logo').addEventListener('click', function(){
    handleToggle('add-money-section', 'none')
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'none')
    handleToggle('get-bonus-section', 'none')
    handleToggle('pay-bill-section', 'none')
    handleToggle('txn-history-section', 'block')

    document.getElementById('txn-history-title').innerHTML = 'Recent Transaction';
    
})

// toggle menu
document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cash-out-section').style.display = 'none';
document.getElementById('transfer-money-section').style.display = 'none';
document.getElementById('get-bonus-section').style.display = 'none';
document.getElementById('pay-bill-section').style.display = 'none';
document.getElementById('txn-history-section').style.display = 'block';

document.getElementById('add-money-card').addEventListener('click', function () {
    handleToggle('add-money-section', 'block')
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'none')
    handleToggle('get-bonus-section', 'none')
    handleToggle('pay-bill-section', 'none')
    handleToggle('txn-history-section', 'none')
})

document.getElementById('cash-out-card').addEventListener('click', function () {
    handleToggle('add-money-section', 'none')
    handleToggle('cash-out-section', 'block')
    handleToggle('transfer-money-section', 'none')
    handleToggle('get-bonus-section', 'none')
    handleToggle('pay-bill-section', 'none')
    handleToggle('txn-history-section', 'none')
})

document.getElementById('transfer-money-card').addEventListener('click', function () {
    handleToggle('add-money-section', 'none')
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'block')
    handleToggle('get-bonus-section', 'none')
    handleToggle('pay-bill-section', 'none')
    handleToggle('txn-history-section', 'none')
})

document.getElementById('get-bonus-card').addEventListener('click', function () {
    handleToggle('add-money-section', 'none')
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'none')
    handleToggle('get-bonus-section', 'block')
    handleToggle('pay-bill-section', 'none')
    handleToggle('txn-history-section', 'none')
})

document.getElementById('pay-bill-card').addEventListener('click', function () {
    handleToggle('add-money-section', 'none')
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'none')
    handleToggle('get-bonus-section', 'none')
    handleToggle('pay-bill-section', 'block')
    handleToggle('txn-history-section', 'none')
})
document.getElementById('txn-history-card').addEventListener('click', function () {
    handleToggle('add-money-section', 'none')
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'none')
    handleToggle('get-bonus-section', 'none')
    handleToggle('pay-bill-section', 'none')
    handleToggle('txn-history-section', 'block')
})


// document.getElementById('add-money-card').addEventListener('click', function () {
//     document.getElementById('add-money-section').style.display = 'block';
//     document.getElementById('cash-out-section').style.display = 'none';
//     document.getElementById('transfer-money-section').style.display = 'none';
//     document.getElementById('get-bonus-section').style.display = 'none';
//     document.getElementById('pay-bill-section').style.display = 'none';
//     document.getElementById('txn-history-section').style.display = 'none';
// })

// document.getElementById('cash-out-card').addEventListener('click', function () {
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cash-out-section').style.display = 'block';
//     document.getElementById('transfer-money-section').style.display = 'none';
//     document.getElementById('get-bonus-section').style.display = 'none';
//     document.getElementById('pay-bill-section').style.display = 'none';
//     document.getElementById('txn-history-section').style.display = 'none';
// })

// document.getElementById('transfer-money-card').addEventListener('click', function () {
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cash-out-section').style.display = 'none';
//     document.getElementById('transfer-money-section').style.display = 'block';
//     document.getElementById('get-bonus-section').style.display = 'none';
//     document.getElementById('pay-bill-section').style.display = 'none';
//     document.getElementById('txn-history-section').style.display = 'none';
// })
// document.getElementById('get-bonus-card').addEventListener('click', function () {
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cash-out-section').style.display = 'none';
//     document.getElementById('transfer-money-section').style.display = 'none';
//     document.getElementById('get-bonus-section').style.display = 'block';
//     document.getElementById('pay-bill-section').style.display = 'none';
//     document.getElementById('txn-history-section').style.display = 'none';
// })
// document.getElementById('pay-bill-card').addEventListener('click', function () {
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cash-out-section').style.display = 'none';
//     document.getElementById('transfer-money-section').style.display = 'none';
//     document.getElementById('get-bonus-section').style.display = 'none';
//     document.getElementById('pay-bill-section').style.display = 'block';
//     document.getElementById('txn-history-section').style.display = 'none';
// })
// document.getElementById('txn-history-card').addEventListener('click', function () {
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cash-out-section').style.display = 'none';
//     document.getElementById('transfer-money-section').style.display = 'none';
//     document.getElementById('get-bonus-section').style.display = 'none';
//     document.getElementById('pay-bill-section').style.display = 'none';
//     document.getElementById('txn-history-section').style.display = 'block';
// })