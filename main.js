document.addEventListener('DOMContentLoaded', function () {

    /* ── More Services toggle ── */
    const toggleBtn       = document.getElementById('toggleBtn');
    const extraCards      = document.querySelectorAll('.extra-card');
    const fullDetailsLink = document.getElementById('fullDetailsLink');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            extraCards.forEach(card => {
                card.classList.toggle('hidden');
                card.classList.toggle('show-cards');
            });
            if (fullDetailsLink) fullDetailsLink.classList.toggle('hidden');

            if (this.classList.contains('active')) {
                this.innerHTML = 'View More Services <i class="fas fa-chevron-down"></i>';
                this.classList.remove('active');
            } else {
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
                this.classList.add('active');
            }
        });
    }

    /* ── Mobile hamburger menu ── */
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const icon = menuIcon.querySelector('i');
                if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark'); }
            });
        });

        document.addEventListener('click', function (e) {
            if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
                const icon = menuIcon.querySelector('i');
                if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark'); }
            }
        });
    }
});