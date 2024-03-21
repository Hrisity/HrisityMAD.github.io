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
                animatedElement.style.opacity = '0';
                animatedElement.style.transform = 'scale(0)';
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sectionObserver.observe(document.getElementById('transition-section'));

    // Carousel Functionality for Both Tutorials and Tools Sections
    // Use more specific selectors for the left/right button event listeners to avoid conflicts
    document.querySelectorAll('.carousel-control.left').forEach(button => {
        button.addEventListener('click', function() {
            moveCarousel(this.parentElement, 'left');
        });
    });

    document.querySelectorAll('.carousel-control.right').forEach(button => {
        button.addEventListener('click', function() {
            moveCarousel(this.parentElement, 'right');
        });
    });

    function moveCarousel(carouselContainer, direction) {
        const carousel = carouselContainer.querySelector('.carousel');
        let scrollAmount = 0;
        const cardWidth = carouselContainer.querySelector('.card') ? carouselContainer.querySelector('.card').clientWidth : 0;
        const gapWidth = 20; // Assume a 20px gap for simplicity

        if (direction === 'right') {
            scrollAmount += cardWidth + gapWidth;
            carousel.scrollLeft += cardWidth + gapWidth;
        } else if (direction === 'left') {
            scrollAmount -= cardWidth + gapWidth;
            carousel.scrollLeft -= cardWidth + gapWidth;
        }
    }

    // Adjusted New Carousel Functionality for Tools Section
    let slideIndex = 1;
    showSlides(slideIndex); // Initialize the slideshow for the Tools section

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll("#photo-carousel .carousel-slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[slideIndex-1].style.display = "block"; // Change to "flex" if your slides are flex containers
    }

    // Attaching event listeners for the next/prev buttons in the tools section carousel
    document.querySelector('#photo-carousel .prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('#photo-carousel .next').addEventListener('click', function() {
        moveSlide(1);
    });
});
