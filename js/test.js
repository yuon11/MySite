document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    const toggleButton = document.getElementById("toggleButton");
    const toggleRandomButton = document.getElementById("toggleRandomButton");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesEnabled = true;
    let particles = [];

    // Random Int Func
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    

    // Particle class
    class Particle {
        constructor(x, y, size, speed) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speed = speed;
        }

        update() {
            this.x += this.speed;
            this.y += this.speed;

            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            var fillStyleRandGr = getRandomInt(256);
            var fillStyleRandRd = getRandomInt(256);
            var fillStyleRandBl = getRandomInt(256);
            
            var strokeStyleRandGr = getRandomInt(256);
            var strokeStyleRandRd = getRandomInt(256);
            var strokeStyleRandBl = getRandomInt(256);

            var lineWidthRand = getRandomInt(100);

            ctx.fillStyle = `rgba(${fillStyleRandRd}, ${fillStyleRandGr}, ${fillStyleRandBl}, 1)`;
            ctx.strokeStyle = `rgba(${strokeStyleRandRd}, ${strokeStyleRandGr}, ${strokeStyleRandBl}, 1)`;
            ctx.lineWidth = lineWidthRand;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();

            ctx.fill();
            ctx.stroke();
        }

        drawFromInput() {
            
            const redInput = document.getElementById("redInput").value;
            const greenInput = document.getElementById("greenInput").value;
            const blueInput = document.getElementById("blueInput").value;

            const redStrokeInput = document.getElementById("redStrokeInput").value;
            const greenStrokeInput = document.getElementById("greenStrokeInput").value;
            const blueStrokeInput = document.getElementById("blueStrokeInput").value;
            
            const particleSizeInput = document.getElementById("particleSizeInput").value;
            
            var fillStyleRandRd = parseInt(redInput);// getRandomInt(256);
            var fillStyleRandGr = parseInt(greenInput);
            var fillStyleRandBl = parseInt(blueInput);
            
            var strokeStyleRandRd = parseInt(redStrokeInput); // getRandomInt(256);
            var strokeStyleRandGr =  parseInt(greenStrokeInput);
            var strokeStyleRandBl = parseInt(blueStrokeInput);

            var lineWidthRand = parseInt(particleSizeInput);// getRandomInt(100);

            ctx.fillStyle = `rgba(${fillStyleRandRd}, ${fillStyleRandGr}, ${fillStyleRandBl}, 1)`;
            ctx.strokeStyle = `rgba(${strokeStyleRandRd}, ${strokeStyleRandGr}, ${strokeStyleRandBl}, 1)`;
            ctx.lineWidth = lineWidthRand;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();

            ctx.fill();
            ctx.stroke();
        }
    }

    // Get Data From Forms

    // Toggle particles on button click
    toggleButton.addEventListener("click", function() {

        const particleInput = document.getElementById("particleInput").value;

        particlesEnabled = !particlesEnabled;

        if (particlesEnabled) {
            particles.length = 0;
            for (let i = 0; i < parseInt(particleInput); i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 5 + 2;
                const speed = (Math.random() - 0.5) * 2;

                particles.push(new Particle(x, y, size, speed));
            }

            animate();
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });

    // Toggle particles on button click
    toggleRandomButton.addEventListener("click", function() {

        const particleInput = getRandomInt(100);
        console.log("HERE");
        particlesEnabled = !particlesEnabled;

        if (particlesEnabled) {
            particles.length = 0;
            for (let i = 0; i < parseInt(particleInput); i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 5 + 2;
                const speed = (Math.random() - 0.5) * 2;

                particles.push(new Particle(x, y, size, speed));
            }

            animateRandom();
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.update();
            // particle.draw();
            particle.drawFromInput();

            if (particle.size <= 0.2) {
                particles.splice(index, 1);
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 5 + 2, (Math.random() - 0.5) * 2));
            }
        });

        if (particlesEnabled) {
            requestAnimationFrame(animate);
        }
    }

    // Random Animation loop
    function animateRandom() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            //particle.drawFromInput();

            if (particle.size <= 0.2) {
                particles.splice(index, 1);
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 5 + 2, (Math.random() - 0.5) * 2));
            }
        });

        if (particlesEnabled) {
            requestAnimationFrame(animateRandom);
        }
    }

    // Resize canvas on window resize
    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Recreate particles on window resize
        particles.length = 0;
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 5 + 2;
            const speed = (Math.random() - 0.5) * 2;

            particles.push(new Particle(x, y, size, speed));
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Your existing code

    // Initialize Swiper
    const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If you have images, videos, or a mix, update the slideClass accordingly
        slideClass: 'swiper-slide',

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination dots
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Add your images or videos to the Swiper slides
    const carouselSlides = [
        '<div class="swiper-slide"><img src="image1.jpg" alt="Image 1"></div>',
        '<div class="swiper-slide"><img src="image2.jpg" alt="Image 2"></div>',
        '<div class="swiper-slide"><video src="video1.mp4" controls></video></div>',
        // Add more slides as needed
    ];

    // Append slides to the swiper-wrapper
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = carouselSlides.join('');

    // Adjust the size of the Swiper container on window resize
    window.addEventListener("resize", function() {
        mySwiper.update(); // Trigger Swiper update on window resize
    });
});
