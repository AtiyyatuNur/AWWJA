document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();

    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('qty-minus')) {
                updateQty(e.target, -1);
            } else if (e.target.classList.contains('qty-plus')) {
                updateQty(e.target, 1);
            } else if (e.target.closest('.remove-btn')) {
                const itemEl = e.target.closest('.cart-item');
                const index = itemEl.dataset.index;
                removeFromCart(index);
            }
        });
    }

    const clearAllBtn = document.querySelector('.clear-all-btn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            localStorage.removeItem('cart');
            renderCartItems();
        });
    }

    const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }

    const backBtn = document.getElementById('cart-back-btn');
    if (backBtn) backBtn.addEventListener('click', () => history.back());

    updateCartTotal(); // Initial total calculation on page load
});

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    container.innerHTML = '';

    document.querySelector('.item-count').innerText = `${cart.length} Item${cart.length !== 1 ? 's' : ''}`;

    cart.forEach((item, index) => {
        const itemHTML = `
            <div class="cart-item" data-index="${index}">
                <div class="item-image-container">
                    <img src="${item.image}" alt="${item.name}" class="item-img">
                </div>
                <div class="item-details">
                    <div class="item-info-header">
                        <h4 class="item-name">${item.name}</h4>
                        <button class="remove-btn"><i class="fa fa-trash"></i></button>
                    </div>
                    <p class="item-seller">By ${item.seller}</p>
                    <p class="price">${item.price}</p>
                    <div class="qty-control">
                        <button class="qty-minus"><i class="fa fa-minus"></i></button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-plus"><i class="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });

    updateCartTotal();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

function updateQty(btn, delta) {
    const span = btn.parentElement.querySelector('span');
    let qty = parseInt(span.innerText);
    qty = Math.max(1, qty + delta);
    span.innerText = qty;
    updateCartTotal();
}

function updateCartTotal() {
    const totalElement = document.getElementById('cart-total');
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const priceText = item.querySelector('.price').innerText.replace('₦', '').replace(',', '');
        const price = parseFloat(priceText);
        const qty = parseInt(item.querySelector('.qty-control span').innerText);
        total += price * qty;
    });
    totalElement.innerText = '₦' + total.toLocaleString();
}