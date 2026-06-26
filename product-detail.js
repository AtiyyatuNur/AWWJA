const relatedProductSets = {
    'rickieluxe-accessories': [
        { name: 'Rose Gold Hoop Earrings', price: '₦9,800', img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80' },
        { name: 'Emerald Stud Earrings', price: '₦11,200', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80' },
        { name: 'Crystal Drop Earrings', price: '₦13,500', img: 'https://images.unsplash.com/photo-1600185362043-fdbf7c9b9a86?w=500&q=80' },
        { name: 'Pearl Cluster Earrings', price: '₦14,000', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' }
    ],
    'luxe-bags': [
        { name: 'Signature Tote Bag', price: '₦48,500', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80' },
        { name: 'Classic Leather Handbag', price: '₦52,000', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
        { name: 'Mini Crossbody Satchel', price: '₦26,500', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80' },
        { name: 'Evening Clutch Set', price: '₦33,000', img: 'https://images.unsplash.com/photo-1515125520149-53d0b3ab95af?w=500&q=80' }
    ],
    'default': [
        { name: 'Style Preview 1', price: '₦9,500', img: 'https://images.unsplash.com/photo-1544816153-12ad5d7132a1?w=400' },
        { name: 'Style Preview 2', price: '₦10,200', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400' },
        { name: 'Style Preview 3', price: '₦13,800', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400' },
        { name: 'Style Preview 4', price: '₦12,900', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400' }
    ]
};

// ---- NEGOTIATION STATE ----
const negotiationHistory = [];

function getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function renderNegHistory() {
    const list = document.getElementById('neg-list');
    list.innerHTML = negotiationHistory.map(item => `
        <div class="neg-item">
            <div class="neg-avatar ${item.who === 'seller' ? 'avatar-seller' : 'avatar-buyer'}">
                ${item.who === 'seller' ? 'S' : 'Y'}
            </div>
            <div class="neg-content">
                <div class="neg-top">
                    <span class="neg-who">
                        ${item.who === 'seller' ? 'Seller' : 'You'}
                        <span class="neg-tag tag-${item.type}">${item.type}</span>
                    </span>
                    <span class="neg-amount">${item.price}</span>
                </div>
                <div class="neg-meta">${item.time}${item.note ? ' · "' + item.note + '"' : ''}</div>
            </div>
        </div>
    `).join('');
    list.scrollTop = list.scrollHeight;
}

function startNegotiation() {
    const sellerPrice = document.querySelector('.detail-price').innerText;
    negotiationHistory.length = 0;
    negotiationHistory.push({
        who: 'seller',
        type: 'offer',
        price: sellerPrice,
        time: getTime(),
        note: 'Last price from seller'
    });
    renderNegHistory();
    document.getElementById('neg-box').style.display = 'block';
    document.getElementById('counter-form').style.display = 'none';
    document.getElementById('neg-actions').style.display = 'flex';
}

     function closeDeal() {
    // Save negotiated item to cart
    const lastSellerOffer = [...negotiationHistory].reverse().find(i => i.who === 'seller');
    const negotiatedPrice = lastSellerOffer ? lastSellerOffer.price : document.querySelector('.detail-price').innerText;

    const product = {
        name: document.querySelector('.detail-title').innerText,
        price: negotiatedPrice,
        image: document.querySelector('.gallery-main').src,
        seller: document.querySelector('.seller-preview-info h4').innerText,
        qty: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update UI
    document.getElementById('action-buttons').style.display = 'none';
    document.getElementById('neg-box').style.display = 'none';
    document.getElementById('deal-closed').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {

    // ---- URL PARAMS ----
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('name')) {
        document.querySelector('.detail-title').innerText = urlParams.get('name');
        document.querySelector('.detail-price').innerText = urlParams.get('price');

        const productImg = urlParams.get('img');
        const sellerCover = urlParams.get('sellerCover');
        const fallbackImg = sellerCover || 'https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?w=600';
        document.querySelector('.gallery-main').src = productImg || fallbackImg;

        const sellerName = urlParams.get('seller');
        const sellerNameEl = document.querySelector('.seller-preview-info h4');
        if (sellerNameEl) sellerNameEl.innerText = sellerName;

        const sellerMetaEl = document.querySelector('.seller-preview-info p');
        if (sellerMetaEl) {
            const rating = urlParams.get('sellerRating');
            const followers = urlParams.get('sellerFollowers');
            sellerMetaEl.innerHTML = `<i class="fa fa-star" style="color:var(--gold)"></i> ${rating || '4.9'} • ${followers || '1.0K Followers'}`;
        }

        const sellerKey = urlParams.get('sellerKey') || 'default';
        const relatedItems = relatedProductSets[sellerKey] || relatedProductSets.default;
        const thumbsContainer = document.querySelector('.gallery-thumbs');

        if (thumbsContainer) {
            const visibleCount = 2;
            const hiddenItems = relatedItems.slice(visibleCount);

            const renderThumbnails = (showAll = false) => {
                const itemsToRender = showAll ? relatedItems : relatedItems.slice(0, visibleCount);

                thumbsContainer.innerHTML = itemsToRender.map((item, index) => {
                    const params = new URLSearchParams({
                        name: item.name,
                        price: item.price,
                        seller: sellerName,
                        sellerKey,
                        sellerCover,
                        sellerRating: urlParams.get('sellerRating'),
                        sellerFollowers: urlParams.get('sellerFollowers'),
                        img: item.img
                    }).toString();

                    if (!showAll && index === visibleCount - 1 && hiddenItems.length > 0) {
                        return `
                            <div class="more-overlay related-thumb" data-show-all="true">
                                <img src="${item.img}" class="gallery-thumb" />
                                <span>+${hiddenItems.length}</span>
                            </div>
                        `;
                    }

                    return `
                        <img src="${item.img}" class="gallery-thumb related-thumb" data-href="product-detail.html?${params}" />
                    `;
                }).join('');

                thumbsContainer.querySelectorAll('.related-thumb').forEach(el => {
                    el.style.cursor = 'pointer';
                    el.addEventListener('click', () => {
                        if (el.dataset.showAll === 'true') {
                            renderThumbnails(true);
                            return;
                        }
                        const href = el.getAttribute('data-href');
                        if (href) window.location.href = href;
                    });
                });
            };

            renderThumbnails(false);
        }
    }

    // ---- BACK BUTTON ----
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.addEventListener('click', () => {
        if (window.history.length > 1) {
            history.back();
        } else {
            window.location.href = 'sellers.html';
        }
    });

    // ---- SELLER PREVIEW ----
    const sellerPreview = document.getElementById('seller-preview');
    if (sellerPreview) {
        sellerPreview.addEventListener('click', () => {
            const sellerName = document.querySelector('.seller-preview-info h4')?.innerText.trim() || "Olu's Gems";
            const sellerSlug = sellerName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'olu-gems';
            location.href = 'seller-stall.html?seller=' + encodeURIComponent(sellerSlug);
        });
    }

    // ---- NEGOTIATE BUTTON ----
    const negotiateBtn = document.getElementById('negotiate-btn');
    if (negotiateBtn) negotiateBtn.addEventListener('click', startNegotiation);

    // ---- ADD TO CART ----
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const product = {
                name: document.querySelector('.detail-title').innerText,
                price: document.querySelector('.detail-price').innerText,
                image: document.querySelector('.gallery-main').src,
                seller: document.querySelector('.seller-preview-info h4').innerText,
                qty: 1
            };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.href = 'cart.html';
        });
    }

    // ---- NEGOTIATION ACTIONS ----
    document.getElementById('accept-offer-btn')
        ?.addEventListener('click', closeDeal);

    document.getElementById('decline-offer-btn')
        ?.addEventListener('click', () => {
            document.getElementById('neg-box').style.display = 'none';
        });

    document.getElementById('counter-offer-btn')
        ?.addEventListener('click', () => {
            document.getElementById('counter-form').style.display = 'flex';
            document.getElementById('neg-actions').style.display = 'none';
        });

    document.getElementById('send-counter-btn')
        ?.addEventListener('click', () => {
            const val = document.getElementById('counter-input').value.trim();
            if (!val) return;

            // Add buyer counter to history
            negotiationHistory.push({
                who: 'buyer',
                type: 'counter',
                price: '₦' + Number(val).toLocaleString(),
                time: getTime(),
                note: ''
            });
            renderNegHistory();

            document.getElementById('counter-form').style.display = 'none';
            document.getElementById('counter-input').value = '';

            // Simulate seller counter response (split the difference)
            const lastSellerPrice = parseInt(
                [...negotiationHistory].reverse().find(i => i.who === 'seller')?.price.replace(/[₦,]/g, '') || '0'
            );
            const counterVal = parseInt(val);
            const sellerCounter = Math.round((lastSellerPrice + counterVal) / 2);

            setTimeout(() => {
                negotiationHistory.push({
                    who: 'seller',
                    type: 'counter',
                    price: '₦' + sellerCounter.toLocaleString(),
                    time: getTime(),
                    note: 'How about we meet here?'
                });
                renderNegHistory();
                document.getElementById('neg-actions').style.display = 'flex';
            }, 1200);
        });

    // ---- CONTINUE SHOPPING ----
    const continueBtn = document.getElementById('continue-shopping-btn');
    if (continueBtn) continueBtn.addEventListener('click', () => location.href = 'homepage.html');

    // ---- SHARE BUTTONS ----
    const shareTriggers = document.querySelectorAll('.share-trigger');
    shareTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => e.stopPropagation());
    });
});