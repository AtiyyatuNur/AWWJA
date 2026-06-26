function openMenu() {
      document.getElementById('mobileMenu').classList.add('open');
      document.getElementById('menuOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('menuOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }