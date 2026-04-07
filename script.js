// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 1. THREE.JS BACKGROUND
const initThree = () => {
    const canvas = document.querySelector('#bg-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Particles
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }
    for (let i = 0; i < particlesCount; i++) {
        scaleArray[i] = Math.random();
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#9b59b6',
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animate = () => {
        requestAnimationFrame(animate);

        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;

        // Subtle mouse movement
        const targetX = (mouseX - window.innerWidth / 2) * 0.0001;
        const targetY = (mouseY - window.innerHeight / 2) * 0.0001;
        particlesMesh.rotation.y += targetX;
        particlesMesh.rotation.x += targetY;

        renderer.render(scene, camera);
    };

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
};

// 2. CUSTOM CURSOR
const initCursor = () => {
    const cursor = document.getElementById('cursor');
    
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    const hoverables = document.querySelectorAll('a, button, .project-card, input, textarea');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('large');
            gsap.to(cursor, { scale: 1.5, opacity: 0.5 });
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('large');
            gsap.to(cursor, { scale: 1, opacity: 1 });
        });
    });
};

// 3. GSAP ANIMATIONS
const initAnimations = () => {
    // Hero Entrance
    const heroTl = gsap.timeline();
    
    heroTl.from(".hero-text h3", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" })
          .from(".hero-text h1", { opacity: 0, y: 50, duration: 1, ease: "power4.out" }, "-=0.4")
          .from(".hero-text h2", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
          .from(".hero-text p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
          .from(".hero-text .flex", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
          .from(".hero-image", { opacity: 0, scale: 0.8, duration: 1.2, ease: "expo.out" }, "-=1");

    // Scroll Reveal Sections
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        gsap.from(reveal, {
            scrollTrigger: {
                trigger: reveal,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });

    // About Section - Staggered Skills
    gsap.from(".skills-grid .glass", {
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%"
        },
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)"
    });
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initCursor();
    initAnimations();
    
    // Smooth scrolling fix for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    scrollTo: target.offsetTop - 80,
                    duration: 1.2,
                    ease: "power4.inOut"
                });
            }
        });
    });

    // 4. BACK TO TOP LOGIC
    const btt = document.getElementById('back-to-top');
    if (btt) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btt.style.opacity = '1';
                btt.style.transform = 'translateY(0)';
            } else {
                btt.style.opacity = '0';
                btt.style.transform = 'translateY(20px)';
            }
        });

        btt.addEventListener('click', () => {
            gsap.to(window, {
                scrollTo: 0,
                duration: 1.5,
                ease: "power4.inOut"
            });
        });
    }
});
