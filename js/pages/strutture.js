document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels on the page
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(function(carousel) {
        const images = carousel.querySelectorAll('img');
        const dots = carousel.querySelectorAll('.dot');
        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');
        let currentSlide = 0;
        let interval;

        // Function to show a specific slide
        function showSlide(index) {
            // Remove active class from current slide
            images[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            // Update current slide index
            currentSlide = (index + images.length) % images.length;
            
            // Add active class to new slide
            images[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        // Next slide function
        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Previous slide function
        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Add event listeners for manual navigation
        nextBtn.addEventListener('click', function() {
            clearInterval(interval); // Reset the timer
            nextSlide();
            startAutoSlide(); // Restart auto-sliding
        });

        prevBtn.addEventListener('click', function() {
            clearInterval(interval); // Reset the timer
            prevSlide();
            startAutoSlide(); // Restart auto-sliding
        });

        // Add click events to dot indicators
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                clearInterval(interval); // Reset the timer
                showSlide(index);
                startAutoSlide(); // Restart auto-sliding
            });
        });

        // Start automatic sliding
        function startAutoSlide() {
            // Clear any existing interval first
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }

        // Initialize the auto-slide
        startAutoSlide();
    });
});
