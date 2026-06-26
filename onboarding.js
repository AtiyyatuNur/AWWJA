// ===== GLOBAL NAVIGATION CONFIG =====
    const slideOrder = ['slide-1', 'slide-2', 'slide-3', 'enter-market'];
    let autoTimer;

    // ===== SCREEN SWITCHING =====
    document.addEventListener('DOMContentLoaded', () => {
      // Navigation buttons using data attributes
      document.querySelectorAll('[data-goto]').forEach(btn => {
        btn.addEventListener('click', () => goTo(btn.getAttribute('data-goto')));
      });

      // Terms checkbox listener
      const termsCheck = document.getElementById('terms-check');
      if (termsCheck) {
        termsCheck.addEventListener('change', toggleBtn);
      }

      // Enter market button listener
      const enterBtn = document.getElementById('enter-btn');
      if (enterBtn) enterBtn.addEventListener('click', enterMarket);
    });

    function goTo(id) {
      // Clear any pending auto-advance timer to prevent "double jumping"
      clearTimeout(autoTimer);

      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');

      // Auto-advance logic: If this screen is a slide, move to the next one after 5 seconds
      const idx = slideOrder.indexOf(id);
      if (idx !== -1 && idx < slideOrder.length - 1) {
        autoTimer = setTimeout(() => goTo(slideOrder[idx + 1]), 8000);
      }
    }

    // ===== SPLASH AUTO ADVANCE after 8s =====
    setTimeout(() => goTo('slide-1'), 8000); // Increased duration for splash screen

    // ===== SWIPE SUPPORT =====
    let touchStartX = 0;

    document.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      const active = document.querySelector('.screen.active');
      if (!active) return;

      const idx = slideOrder.indexOf(active.id);
      if (diff > 50 && idx < slideOrder.length - 1) {
        goTo(slideOrder[idx + 1]); // swipe left = next
      } else if (diff < -50 && idx > 0) {
        goTo(slideOrder[idx - 1]); // swipe right = back
      }
    });

    // ===== TERMS CHECKBOX =====
    function toggleBtn() {
      const checked = document.getElementById('terms-check').checked;
      const btn = document.getElementById('enter-btn');
      const err = document.getElementById('terms-error');
      btn.classList.toggle('ready', checked);
      if (checked) err.classList.remove('show');
    }

    // ===== ENTER MARKET =====
    function enterMarket() {
      if (!document.getElementById('terms-check').checked) {
        document.getElementById('terms-error').classList.add('show');
        return;
      }
      window.location.href = 'homepage.html';
    }