document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const sellerCards = Array.from(document.querySelectorAll('.seller-card'));
    const productCards = Array.from(document.querySelectorAll('.product-card'));

    if (!searchInput) return;

    const noResultsMsg = document.createElement('div');
    noResultsMsg.className = 'search-no-results';
    noResultsMsg.textContent = 'No results found.';
    noResultsMsg.style.padding = '20px 0';
    noResultsMsg.style.textAlign = 'center';
    noResultsMsg.style.color = '#555';
    noResultsMsg.style.display = 'none';

    const productsSection = document.querySelector('.products-list')?.closest('.section-block');
    if (productsSection) productsSection.appendChild(noResultsMsg);

    function normalize(text) {
        return (text || '').toLowerCase();
    }

    function filterResults(query) {
        const searchTerm = normalize(query.trim());
        if (!searchTerm) {
            sellerCards.forEach(card => card.style.display = 'flex');
            productCards.forEach(card => card.style.display = 'block');
            noResultsMsg.style.display = 'none';
            return;
        }

        let visibleCount = 0;

        sellerCards.forEach(card => {
            const name = normalize(card.querySelector('.seller-name-row h4')?.innerText);
            const description = normalize(card.querySelector('.seller-info p')?.innerText);
            const match = name.includes(searchTerm) || description.includes(searchTerm);
            card.style.display = match ? 'flex' : 'none';
            if (match) visibleCount += 1;
        });

        productCards.forEach(card => {
            const title = normalize(card.querySelector('.product-name')?.innerText);
            const vendor = normalize(card.querySelector('.product-stall')?.innerText);
            const match = title.includes(searchTerm) || vendor.includes(searchTerm);
            card.style.display = match ? 'block' : 'none';
            if (match) visibleCount += 1;
        });

        noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', (event) => {
        filterResults(event.target.value);
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = event.target.value.trim();
            if (query) {
                window.location.href = `sellers.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
});