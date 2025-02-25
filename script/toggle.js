document.getElementById('txn-history-section').style.display = 'none';
document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cash-out-section').style.display = 'none';
document.getElementById('transfer-money-section').style.display = 'block';
document.getElementById('get-bonus-section').style.display = 'none';
document.getElementById('pay-bill-section').style.display = 'none';

document.getElementById('add-money-card').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('txn-history-section').style.display = 'none';
})

document.getElementById('cash-out-card').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('txn-history-section').style.display = 'none';
})

document.getElementById('transfer-money-card').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'block';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('txn-history-section').style.display = 'none';
})
document.getElementById('get-bonus-card').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'block';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('txn-history-section').style.display = 'none';
})
document.getElementById('pay-bill-card').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'block';
    document.getElementById('txn-history-section').style.display = 'none';
})
document.getElementById('txn-history-card').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('txn-history-section').style.display = 'block';
})