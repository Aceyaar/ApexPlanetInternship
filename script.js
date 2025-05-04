
 gsap.registerPlugin(ScrollTrigger);


 document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});

 const cursor = document.querySelector('.cursor');
 const cursorDot = document.querySelector('.cursor-dot');

 document.addEventListener('mousemove', (e) => {
     gsap.to(cursor, {
         x: e.clientX - 10,
         y: e.clientY - 10,
         duration: 0.2
     });
     gsap.to(cursorDot, {
         x: e.clientX - 2,
         y: e.clientY - 2,
         duration: 0.1
     });
 });

 const interactiveElements = document.querySelectorAll('a, button, .skill-card, .timeline-item');
 interactiveElements.forEach(el => {
     el.addEventListener('mouseenter', () => {
         cursor.style.transform = 'scale(1.5)';
         cursor.style.border = '2px solid var(--secondary-color)';
         cursorDot.style.transform = 'scale(1.5)';
     });
     
     el.addEventListener('mouseleave', () => {
         cursor.style.transform = 'scale(1)';
         cursor.style.border = '2px solid var(--primary-color)';
         cursorDot.style.transform = 'scale(1)';
     });
 });

 function createFloatingShapes() {
     const container = document.querySelector('.floating-shapes');
     const shapeCount = 15;

     for (let i = 0; i < shapeCount; i++) {
         const shape = document.createElement('div');
         shape.className = 'shape';
         
         const size = Math.random() * 20 + 10;
         shape.style.width = `${size}px`;
         shape.style.height = `${size}px`;
         
         shape.style.left = `${Math.random() * 100}%`;
         shape.style.top = `${Math.random() * 100}%`;
         
         const moveX = (Math.random() - 0.5) * 500;
         const moveY = -Math.random() * 1000;
         shape.style.setProperty('--moveX', `${moveX}px`);
         shape.style.setProperty('--moveY', `${moveY}px`);
         
         const duration = Math.random() * 10 + 10;
         const delay = Math.random() * 5;
         shape.style.animationDuration = `${duration}s`;
         shape.style.animationDelay = `${delay}s`;

         container.appendChild(shape);
     }
 }

 createFloatingShapes();

 function initScrollAnimations() {
     gsap.utils.toArray('.section').forEach(section => {
         gsap.from(section, {
             scrollTrigger: {
                 trigger: section,
                 start: 'top 80%',
                 end: 'top 20%',
                 scrub: 1
             },
             y: 100,
             opacity: 0
         });
     });

     gsap.utils.toArray('.skill-card').forEach(card => {
         gsap.from(card, {
             scrollTrigger: {
                 trigger: card,
                 start: 'top 85%',
                 end: 'top 50%',
                 scrub: 1
             },
             y: 50,
             opacity: 0,
             scale: 0.9
         });
     });

     gsap.utils.toArray('.timeline-item').forEach(item => {
         gsap.from(item, {
             scrollTrigger: {
                 trigger: item,
                 start: 'top 85%',
                 end: 'top 50%',
                 scrub: 1
             },
             x: -100,
             opacity: 0
         });
     });
 }

 initScrollAnimations();

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 document.addEventListener('scroll', () => {
     const sections = document.querySelectorAll('.section');
     sections.forEach(section => {
         const speed = 0.2;
         const rect = section.getBoundingClientRect();
         const scrolled = window.pageYOffset;
         
         if (rect.top <= window.innerHeight && rect.bottom >= 0) {
             const yPos = -(rect.top * speed);
             gsap.to(section, {
                 backgroundPositionY: yPos,
                 duration: 0.5,
                 ease: 'none'
             });
         }
     });
 });

 const skillCards = document.querySelectorAll('.skill-card');
 skillCards.forEach(card => {
     card.addEventListener('mouseenter', () => {
         gsap.to(card, {
             scale: 1.05,
             duration: 0.3,
             boxShadow: '0 0 30px rgba(100, 255, 218, 0.2)'
         });
     });

     card.addEventListener('mouseleave', () => {
         gsap.to(card, {
             scale: 1,
             duration: 0.3,
             boxShadow: 'none'
         });
     });
 });

 window.addEventListener('load', () => {
     gsap.from('.profile-image', {
         duration: 1.5,
         scale: 0,
         rotation: 720,
         ease: 'back.out(1.7)'
     });

     gsap.from('.profile-info', {
         duration: 1,
         y: 50,
         opacity: 0,
         delay: 0.5
     });

     gsap.from('.nav-links', {
         duration: 1,
         x: -50,
         opacity: 0,
         delay: 0.8,
         stagger: 0.1
     });

     gsap.from('.social-links', {
         duration: 1,
         y: 50,
         opacity: 0,
         delay: 1
     });
 });