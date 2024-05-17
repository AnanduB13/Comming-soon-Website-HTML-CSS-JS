document.addEventListener("DOMContentLoaded", function() {
    const countdown = document.getElementById("countdown");
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    function updateCountdown() {
        const targetDate = new Date("July 1, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdown.innerHTML = "EXPIRED";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();  // Initial call to display the countdown immediately
});
