// order-page
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.getElementById('total-price');

    function calculateTotal() {
        let total = 0;
        items.forEach(item => {
            const price = parseInt(item.querySelector('.item-price').textContent);
            const quantity = parseInt(item.querySelector('.item-quantity').value);
            total += price * quantity;
        });
        totalPriceElement.textContent = total;
    }

    items.forEach(item => {
        const decreaseBtn = item.querySelector('.decrease');
        const increaseBtn = item.querySelector('.increase');
        const quantityInput = item.querySelector('.item-quantity');

        decreaseBtn.addEventListener('click', function () {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                calculateTotal();
            }
        });

        increaseBtn.addEventListener('click', function () {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            calculateTotal();
        });
    });

    calculateTotal();
});

//menupage
//for add to cart
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItemsTable = document.querySelector('#cart-items tbody');
const cartTotalElement = document.getElementById('cart-total');


function toggleCartPopup() {
    cartPopup.classList.toggle('active');
}

function closeCart() {
    cartPopup.classList.remove('active');
}

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    updateCartUI();
}


function updateCartUI() {
    cartItemsTable.innerHTML = '';

    let total = 0;


    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>Rs. ${item.price.toFixed(2)}</td>
            <td>Rs. ${itemTotal.toFixed(2)}</td>
        `;
        cartItemsTable.appendChild(row);
    });

    cartTotalElement.textContent = total.toFixed(2);
    cartCountElement.textContent = cart.length;
}
