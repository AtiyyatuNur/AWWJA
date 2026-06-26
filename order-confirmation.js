document.addEventListener('DOMContentLoaded', () => {
//        // Save order BEFORE clearing cart
// const cart = JSON.parse(localStorage.getItem('cart')) || [];
// if (cart.length > 0) {
//     const order = {
//         id: 'ORD' + Date.now(),
//         date: new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }),
//         estimatedDelivery: getEstimatedDeliveryDate(4),
//         items: cart,
//         total: cart.reduce((sum, item) => {
//             const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
//             return sum + (price * (item.qty || 1));
//         }, 0)
//     };

//     const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
//     existingOrders.unshift(order);
//     localStorage.setItem('orders', JSON.stringify(existingOrders));
// }
     
    // Clear cart after successful order
    localStorage.removeItem('cart');
    const estimatedDeliveryEl = document.getElementById('estimated-delivery');
    if (estimatedDeliveryEl) {
        estimatedDeliveryEl.innerText = getEstimatedDeliveryDate(4);
    }

    const backToMarketplaceBtn = document.getElementById('back-to-marketplace-btn');
    if (backToMarketplaceBtn) {
        backToMarketplaceBtn.addEventListener('click', () => {
            window.location.href = 'homepage.html';
        });
    }
});

function getEstimatedDeliveryDate(daysFromNow) {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + daysFromNow);

    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const weekday = weekdayNames[deliveryDate.getDay()];
    const month = monthNames[deliveryDate.getMonth()];
    const day = deliveryDate.getDate();
    const suffix = getOrdinalSuffix(day);

    return `${weekday}, ${month} ${day}${suffix}`;
}

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}