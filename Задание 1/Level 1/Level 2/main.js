const prices = {
    healthyMind: 1000000,
    extraTime: 500,
    goodHealth: 1.5,
    friends: 149,
    skillImprovement: 4300
};

document.addEventListener('DOMContentLoaded', function() {
    const quantityField = document.getElementById('quantityField');
    const totalPriceField = document.getElementById('totalPriceField');
    const productSelect = document.getElementById('productSelect');

    function calculateTotal() {
        const selectedProduct = productSelect.value;
        const quantity = parseInt(quantityField.value) || 0;
        const price = prices[selectedProduct] || 0;
        totalPriceField.value = price * quantity;
    }

    productSelect.addEventListener('change', function() {
    });
    
    quantityField.addEventListener('input', function() {
    });

    document.getElementById('button1').addEventListener('click', function() {
        quantityField.value += '1';
    });
    document.getElementById('button2').addEventListener('click', function() {
        quantityField.value += '2';
    });
    document.getElementById('button3').addEventListener('click', function() {
        quantityField.value += '3';
    });
    document.getElementById('button4').addEventListener('click', function() {
        quantityField.value += '4';
    });
    document.getElementById('button5').addEventListener('click', function() {
        quantityField.value += '5';
    });
    document.getElementById('button6').addEventListener('click', function() {
        quantityField.value += '6';
    });
    document.getElementById('button7').addEventListener('click', function() {
        quantityField.value += '7';
    });
    document.getElementById('button8').addEventListener('click', function() {
        quantityField.value += '8';
    });
    document.getElementById('button9').addEventListener('click', function() {
        quantityField.value += '9';
    });
    document.getElementById('button0').addEventListener('click', function() {
        quantityField.value += '0';
    });

    document.getElementById('calculateButton').addEventListener('click', calculateTotal);
});