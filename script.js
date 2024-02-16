document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Transition Section Animation with Intersection Observer
    const observerOptions = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    };

    const animatedElement = document.querySelector('.animated-element');
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.style.opacity = '1';
                animatedElement.style.transform = 'scale(1)';
            } else {
                // Comment out or remove these lines if you don't want to reset the animation
                // animatedElement.style.opacity = '0';
                // animatedElement.style.transform = 'scale(0)';
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sectionObserver.observe(document.getElementById('transition-section'));

    // Carousel Functionality
    const carousel = document.querySelector('#tutorials .carousel');
    let scrollAmount = 0;
    const cardWidth = document.querySelector('#tutorials .card').clientWidth; // Width of the card
    const gapWidth = 20; // Gap between cards

    function moveCarousel(direction) {
        if (direction === 'right') {
            scrollAmount += cardWidth + gapWidth;
            carousel.scrollLeft += cardWidth + gapWidth; // Scrolls to the next card
        } else if (direction === 'left') {
            scrollAmount -= cardWidth + gapWidth;
            carousel.scrollLeft -= cardWidth + gapWidth; // Scrolls to the previous card
        }
        // Optional: add boundaries if needed, e.g., if (scrollAmount < 0) { ... }
    }

    document.querySelector('.carousel-control.left').addEventListener('click', function() {
        moveCarousel('left');
    });
    
    document.querySelector('.carousel-control.right').addEventListener('click', function() {
        moveCarousel('right');
    });
});
