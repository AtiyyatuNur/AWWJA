/**
 * Filter sellers based on category chips
 */
let activeCategory = 'all';

function filterSellers(category, clickedBtn) {
  activeCategory = category;

  // UI: Update active state on chips
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => chip.classList.remove('active'));
  clickedBtn.classList.add('active');

  // Logic: Show/Hide cards and count results
  const cards = document.querySelectorAll('.seller-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('results-count').textContent = visibleCount;
}

function filterSearchResults(query) {
  const cards = document.querySelectorAll('.seller-card');
  const normalizedQuery = query.trim().toLowerCase();
  const noResultsId = 'search-no-results-msg';
  let visibleCount = 0;

  cards.forEach(card => {
    const name = card.querySelector('.seller-name-row h4')?.innerText.toLowerCase() || '';
    const description = card.querySelector('.seller-info p')?.innerText.toLowerCase() || '';
    const location = card.querySelector('.seller-location')?.innerText.toLowerCase() || '';
    const category = card.getAttribute('data-category')?.toLowerCase() || '';
    const match = name.includes(normalizedQuery) || description.includes(normalizedQuery) || location.includes(normalizedQuery) || category.includes(normalizedQuery);

    if (normalizedQuery) {
      card.style.display = match ? 'flex' : 'none';
    } else {
      const cardCat = card.getAttribute('data-category');
      card.style.display = activeCategory === 'all' || cardCat === activeCategory ? 'flex' : 'none';
    }

    if (card.style.display !== 'none') visibleCount++;
  });

  let noResultsMsg = document.getElementById(noResultsId);
  if (!noResultsMsg) {
    noResultsMsg = document.createElement('div');
    noResultsMsg.id = noResultsId;
    noResultsMsg.textContent = 'No sellers found for your search.';
    noResultsMsg.style.padding = '20px 0';
    noResultsMsg.style.textAlign = 'center';
    noResultsMsg.style.color = '#555';
    document.querySelector('.sellers-list')?.appendChild(noResultsMsg);
  }

  noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
}

// Initialize count on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      filterSellers(this.getAttribute('data-category'), this);
    });
  });

  const searchInput = document.querySelector('.search-bar input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      filterSearchResults(event.target.value);
    });

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        filterSearchResults(event.target.value);
      }
    });
  }

  // Handle category filtering from URL parameters on page load
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('cat');
  const searchQuery = urlParams.get('search');

  if (category) {
    const chip = document.querySelector(`.filter-chip[data-category="${category}"]`);
    if (chip) {
      filterSellers(category, chip); // Apply filter on load
    } else {
      filterSellers('all', document.querySelector('.filter-chip[data-category="all"]'));
    }
  } else {
    filterSellers('all', document.querySelector('.filter-chip[data-category="all"]'));
  }

  if (searchQuery && searchInput) {
    searchInput.value = searchQuery;
    filterSearchResults(searchQuery);
  }

  // Add event listeners for seller cards
  document.querySelectorAll('.seller-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      const href = this.getAttribute('data-href');
      if (href) window.location.href = href;
    });
  });

  const backBtn = document.getElementById('sellers-back-btn');
  if (backBtn) backBtn.addEventListener('click', () => window.location.href = 'homepage.html');
});