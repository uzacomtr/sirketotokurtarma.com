let lastScrollTop = 0;

document.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const scrollToTopButton = document.getElementById('scrollToTop');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
        footer.classList.add('show');
        scrollToTopButton.classList.add('show');
    } else {
        footer.classList.remove('show');
        scrollToTopButton.classList.remove('show');
    }

    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        // Scroll Down
        header.classList.add('hidden');
    } else {
        // Scroll Up
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

document.querySelectorAll('.nav-button[href^="#"], .cta-button[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    });
});

document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});