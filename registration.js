document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const introSection = document.querySelector('.intro');

    // Animate navigation links from left to right
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('animated');
        }, index * 200); // Delay each link slightly for a staggered effect
    });

    // Fade in the purple section after the navbar animation
    setTimeout(() => {
        introSection.classList.add('animated');
    }, navLinks.length * 200); // Start intro animation after navbar links are done
});