// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading').style.display = 'none';
        }, 500);
    }, 2000);
});

// Particle Background
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let particle of particles) {
            particle.update();
            particle.draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();
}

// GSAP Animations
gsap.from('.profile-card', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.skill-card').forEach((el) => {
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    VanillaTilt.init(document.querySelector('.profile-img'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2
    });
});
