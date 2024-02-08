document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Transition Section Animation with Intersection Observer
    const observerOptions = {
        root: null, // Observes changes in the viewport
        threshold: 0.5, // Trigger when 50% of the target is visible
        rootMargin: "0px"
    };

    const animatedElement = document.querySelector('.animated-element');
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply animation when the element is in view
                animatedElement.style.opacity = '1';
                animatedElement.style.transform = 'scale(1)';
            } else {
                // Optional: Reset animation when the element is not in view
                // animatedElement.style.opacity = '0';
                // animatedElement.style.transform = 'scale(0)';
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sectionObserver.observe(document.getElementById('transition-section'));
});

