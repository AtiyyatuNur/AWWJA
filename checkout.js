document.addEventListener('DOMContentLoaded', () => {
    const payNowBtn = document.getElementById('pay-now-btn');
    const cardFields = document.getElementById('card-fields');
    const bankFields = document.getElementById('bank-fields');
    const paymentRadios = document.querySelectorAll('input[name="pay"]');
    const cardNumberInput = document.getElementById('card-number');
    const bankNameInput = document.getElementById('bank-account-name');
    const bankNumberInput = document.getElementById('bank-account-number');

    // ── Order Summary from localStorage ──
    const loadOrderSummary = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const SHIPPING_FEE = 5000;

        const subtotal = cart.reduce((sum, item) => {
            const price = parseFloat(
                String(item.price).replace('₦', '').replace(/,/g, '')
            ) || 0;
            const qty = parseInt(item.qty) || 1; // ✅ fixed from item.quantity
            return sum + (price * qty);
        }, 0);

        const total = subtotal + SHIPPING_FEE;
        const fmt = (amount) => '₦' + amount.toLocaleString('en-NG');

        const subtotalLabel = document.getElementById('subtotal-label');
        const subtotalAmount = document.getElementById('subtotal-amount');
        const totalAmount = document.getElementById('total-amount'); // ✅ matches your HTML id

        if (subtotalLabel) subtotalLabel.textContent = `Subtotal (${cart.length} item${cart.length !== 1 ? 's' : ''})`;
        if (subtotalAmount) subtotalAmount.textContent = fmt(subtotal);
        if (totalAmount) totalAmount.textContent = fmt(total);
    };

    // ── Payment Validation ──
    const isCardValid = () => {
        return cardNumberInput && cardNumberInput.value.trim().length > 0;
    };

    const isBankValid = () => {
        return bankNameInput && bankNameInput.value.trim().length > 0
            && bankNumberInput && bankNumberInput.value.trim().length > 0;
    };

    const updatePayButtonState = () => {
        const selected = document.querySelector('input[name="pay"]:checked');
        let valid = false;

        if (selected) {
            if (selected.value === 'card') valid = isCardValid();
            else if (selected.value === 'bank') valid = isBankValid();
        }

        if (payNowBtn) {
            payNowBtn.disabled = !valid;
            payNowBtn.classList.toggle('disabled', !valid);
        }
    };

    const updatePaymentFields = () => {
        const selected = document.querySelector('input[name="pay"]:checked');

        if (selected && selected.value === 'card') {
            cardFields.style.display = 'block';
            bankFields.style.display = 'none';
        } else if (selected && selected.value === 'bank') {
            cardFields.style.display = 'none';
            bankFields.style.display = 'block';
        } else {
            cardFields.style.display = 'none';
            bankFields.style.display = 'none';
        }

        updatePayButtonState();
    };

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', updatePaymentFields);
    });

    [cardNumberInput, bankNameInput, bankNumberInput].forEach(input => {
        if (input) input.addEventListener('input', updatePayButtonState);
    });

    // ── Init ──
    loadOrderSummary();
    updatePaymentFields();

    // ── Pay Now Button ──
    if (payNowBtn) {
        payNowBtn.addEventListener('click', (event) => {
            const selected = document.querySelector('input[name="pay"]:checked');
            if (!selected) { event.preventDefault(); return; }
            if ((selected.value === 'card' && !isCardValid()) ||
                (selected.value === 'bank' && !isBankValid())) {
                event.preventDefault();
                return;
            }

            // ── Save order to localStorage ──
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const SHIPPING_FEE = 5000;

            const subtotal = cart.reduce((sum, item) => {
                const price = parseFloat(
                    String(item.price).replace('₦', '').replace(/,/g, '')
                ) || 0;
                const qty = parseInt(item.qty) || 1;
                return sum + (price * qty);
            }, 0);

            const total = subtotal + SHIPPING_FEE;

            const newOrder = {
                date: new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }),
                total: '₦' + total.toLocaleString('en-NG'),
                status: 'Processing',
                items: cart
            };

            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));

            // ✅ Clear cart after order placed
            localStorage.removeItem('cart');

            window.location.href = 'order-confirmation.html';
        });
    }
});