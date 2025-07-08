// --- Tech for Girls Registration Page JS ---

document.addEventListener('DOMContentLoaded', function () {
    const whatsappBtn = document.getElementById('whatsappShare');
    const shareCounter = document.getElementById('shareCounter');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('registrationForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // LocalStorage key to prevent resubmission
    const SUBMITTED_KEY = 'techforgirls_submitted';
    // LocalStorage key for share count (optional, for page reload)
    const SHARE_COUNT_KEY = 'techforgirls_share_count';

    // Check if already submitted
    if (localStorage.getItem(SUBMITTED_KEY)) {
        form.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        return;
    }

    // Initialize share count
    let count = parseInt(localStorage.getItem(SHARE_COUNT_KEY)) || 0;
    updateShareCounter();
    if (count >= 5) {
        submitBtn.disabled = false;
        whatsappBtn.disabled = true;
        shareCounter.textContent = 'Sharing complete. Please continue.';
    }

    whatsappBtn.addEventListener('click', function () {
        if (count >= 5) return;
        // WhatsApp share link
        const message = encodeURIComponent('Hey Buddy, Join Tech For Girls Community!');
        const url = `https://wa.me/?text=${message}`;
        window.open(url, '_blank');
        count++;
        localStorage.setItem(SHARE_COUNT_KEY, count);
        updateShareCounter();
        if (count >= 5) {
            submitBtn.disabled = false;
            whatsappBtn.disabled = true;
            shareCounter.textContent = 'Sharing complete. Please continue.';
        }
    });

    function updateShareCounter() {
        shareCounter.textContent = `Click count: ${count}/5`;
    }

    // (Form submission logic will be added later)
}); 