document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const extraCards = document.querySelectorAll('.extra-card');
    const fullDetailsLink = document.getElementById('fullDetailsLink');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            extraCards.forEach(card => {
                card.classList.toggle('hidden');
                card.classList.toggle('show-cards');
            });

            // Toggle the link to all-services.html
            if (fullDetailsLink) {
                fullDetailsLink.classList.toggle('hidden');
            }

            // Update Button Text
            if (this.classList.contains('active')) {
                this.innerHTML = 'View More Services <i class="fas fa-chevron-down"></i>';
                this.classList.remove('active');
            } else {
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
                this.classList.add('active');
            }
        });
    }
});