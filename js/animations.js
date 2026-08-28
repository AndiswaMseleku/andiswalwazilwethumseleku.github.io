// ====================
// Animation Utilities
// ====================

// This file contains various animation utilities used throughout the portfolio
// All animations respect the user's reduced motion preferences

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ====================
// Scroll Reveal Animations
// ====================
function initScrollReveal() {
    if (prefersReducedMotion) {
        // If user prefers reduced motion, show all elements immediately
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }
    
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay for staggered animations
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Start observing elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ====================
// Animated Counters
// ====================
function initAnimatedCounters() {
    if (prefersReducedMotion) {
        // Show final values immediately
        document.querySelectorAll('.stat-number').forEach(counter => {
            counter.textContent = counter.dataset.target;
        });
        return;
    }
    
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000; // 2 seconds
                const startTime = performance.now();
                
                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function for smooth animation
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const currentValue = Math.round(target * easeOut);
                    
                    counter.textContent = currentValue;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }
                
                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ====================
// Skill Bar Animations
// ====================
function initSkillBars() {
    if (prefersReducedMotion) {
        // Show final widths immediately
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
        return;
    }
    
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.dataset.width;
                
                // Animate width from 0 to target
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                }, 200);
                
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ====================
// Typing Effect
// ====================
function initTypingEffect(element, words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
    if (prefersReducedMotion) {
        // Show first word immediately
        element.textContent = words[0];
        return;
    }
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Deleting text
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let delay = isDeleting ? deleteSpeed : typeSpeed;
        
        if (!isDeleting && charIndex === currentWord.length) {
            // Word complete, pause before deleting
            delay = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Word deleted, move to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }
        
        setTimeout(type, delay);
    }
    
    setTimeout(type, 500);
}

// ====================
// Particle Animation
// ====================
function createParticles(container, count = 30) {
    if (prefersReducedMotion) return;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        container.appendChild(particle);
    }
}

// ====================
// Parallax Effect
// ====================
function initParallax() {
    if (prefersReducedMotion) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        document.querySelectorAll('.parallax-element').forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ====================
// Hover Effects
// ====================
function initHoverEffects() {
    if (prefersReducedMotion) return;
    
    // Magnetic button effect
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
    
    // 3D tilt effect for cards
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ====================
// Smooth Scrolling
// ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                if (prefersReducedMotion) {
                    // Jump directly to element
                    targetElement.scrollIntoView();
                } else {
                    // Smooth scroll to element
                    const targetPosition = targetElement.offsetTop - 70; // Account for navbar
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    const startTime = performance.now();
                    
                    function animateScroll(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Easing function
                        const easeInOut = progress < 0.5 
                            ? 4 * progress * progress * progress 
                            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                        
                        window.scrollTo(0, startPosition + distance * easeInOut);
                        
                        if (progress < 1) {
                            requestAnimationFrame(animateScroll);
                        }
                    }
                    
                    requestAnimationFrame(animateScroll);
                }
            }
        });
    });
}

// ====================
// Loading Animation
// ====================
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    if (prefersReducedMotion) {
        // Hide loader immediately
        loader.classList.add('hidden');
        return;
    }
    
    // Wait for page to load
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            
            // Remove loader from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
    
    // Fallback in case load event already fired
    if (document.readyState === 'complete') {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }
}

// ====================
// Project Card Animations
// ====================
function initProjectAnimations() {
    if (prefersReducedMotion) return;
    
    // Stagger project cards appearance
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Stagger by 100ms
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    projectCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
}

// ====================
// Modal Animations
// ====================
function initModalAnimations() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Add animation classes when modal opens
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.target.classList.contains('active')) {
                    const content = modal.querySelector('.modal-content');
                    if (content) {
                        content.style.animation = 'none';
                        setTimeout(() => {
                            content.style.animation = '';
                        }, 10);
                    }
                }
            });
        });
        
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
}

// ====================
// Initialize All Animations
// ====================
function initAllAnimations() {
    initLoader();
    initScrollReveal();
    initAnimatedCounters();
    initSkillBars();
    initSmoothScroll();
    initParallax();
    initHoverEffects();
    initProjectAnimations();
    initModalAnimations();
    
    // Initialize typing effect if element exists
    const typedElement = document.getElementById('typed-text');
    if (typedElement && typeof portfolioData !== 'undefined') {
        const roles = portfolioData.profile.roles || [];
        if (roles.length > 0) {
            initTypingEffect(typedElement, roles);
        }
    }
    
    // Create particles if container exists
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && !heroBackground.querySelector('.particle')) {
        createParticles(heroBackground, 20);
    }
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initScrollReveal,
        initAnimatedCounters,
        initSkillBars,
        initTypingEffect,
        createParticles,
        initParallax,
        initHoverEffects,
        initSmoothScroll,
        initLoader,
        initProjectAnimations,
        initModalAnimations,
        initAllAnimations
    };
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initAllAnimations);