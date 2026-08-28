// ====================
// Main JavaScript File
// ====================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio
    initPortfolio();
});

function initPortfolio() {
    // Hide loader after page load
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1000);
    
    // Load all portfolio data
    loadProfile();
    loadSocialLinks();
    loadAboutSection();
    loadSkills();
    loadProjects();
    loadExperience();
    loadEducation();
    loadCertifications();
    loadTestimonials();
    loadContactInfo();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize typed text effect
    initTypedText();
    
    // Initialize filters
    initProjectFilters();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize modals
    initModals();
    
    // Initialize lightbox
    initLightbox();
}

// ====================
// Profile Loading
// ====================
function loadProfile() {
    const profile = portfolioData.profile;
    
    // Set hero name
    const heroName = document.getElementById('hero-name');
    if (heroName) {
        heroName.textContent = profile.name;
    }
    
    // Set hero bio
    const heroBio = document.getElementById('hero-bio');
    if (heroBio) {
        heroBio.textContent = profile.bio;
    }
    
    // Set profile images
    const heroImage = document.getElementById('hero-profile-image');
    const aboutImage = document.getElementById('about-profile-image');
    
    if (heroImage) {
        heroImage.src = profile.profileImage;
        heroImage.alt = profile.name;
    }
    
    if (aboutImage) {
        aboutImage.src = profile.profileImage;
        aboutImage.alt = `About ${profile.name}`;
    }
    
    // Update document title
    document.title = `${profile.name} - Software Developer Portfolio`;
    
    // Update CV download link
    const cvLinks = document.querySelectorAll('a[download]');
    cvLinks.forEach(link => {
        link.href = profile.cvPath;
    });
}

// ====================
// Social Links Loading
// ====================
function loadSocialLinks() {
    const social = portfolioData.social;
    const heroSocialLinks = document.getElementById('hero-social-links');
    const contactSocialLinks = document.getElementById('contact-social-links');
    
    const socialHTML = generateSocialLinks(social);
    
    if (heroSocialLinks) {
        heroSocialLinks.innerHTML = socialHTML;
    }
    
    if (contactSocialLinks) {
        contactSocialLinks.innerHTML = socialHTML;
    }
}

function generateSocialLinks(social) {
    let html = '';
    
    if (social.github) {
        html += `
            <a href="${social.github}" class="social-link" target="_blank" aria-label="GitHub">
                <i class="fab fa-github"></i>
            </a>
        `;
    }
    
    if (social.linkedin) {
        html += `
            <a href="${social.linkedin}" class="social-link" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
        `;
    }
    
    if (social.twitter) {
        html += `
            <a href="${social.twitter}" class="social-link" target="_blank" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
            </a>
        `;
    }
    
    if (social.instagram) {
        html += `
            <a href="${social.instagram}" class="social-link" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
        `;
    }
    
    return html;
}

// ====================
// About Section Loading
// ====================
function loadAboutSection() {
    const profile = portfolioData.profile;
    
    // Set about bio
    const aboutBio = document.getElementById('about-bio');
    if (aboutBio) {
        aboutBio.textContent = profile.bio;
    }
    
    // Set location
    const aboutLocation = document.getElementById('about-location');
    if (aboutLocation) {
        aboutLocation.textContent = profile.location;
    }
    
    // Set email
    const aboutEmail = document.getElementById('about-email');
    if (aboutEmail) {
        aboutEmail.textContent = profile.email;
    }
    
    // Load stats
    const statsContainer = document.getElementById('about-stats');
    if (statsContainer) {
        statsContainer.innerHTML = profile.stats.map(stat => `
            <div class="stat-item">
                <span class="stat-number" data-target="${stat.value}">0</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
        
        // Initialize animated counters
        initCounters();
    }
}

// ====================
// Skills Loading
// ====================
function loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = portfolioData.skills.map(category => `
        <div class="skill-category">
            <div class="skill-category-header">
                <div class="skill-category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3 class="skill-category-title">${category.category}</h3>
            </div>
            ${category.skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 0%;" data-width="${skill.level}"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
    
    // Animate skill bars
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
    }, 500);
}

// ====================
// Projects Loading
// ====================
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card" data-category="${project.category.toLowerCase()}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-overlay-actions">
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-overlay-btn" target="_blank" title="Live Demo">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                        <button class="project-overlay-btn view-project" data-project-id="${project.id}" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 4).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                    ${project.technologies.length > 4 ? `<span class="tech-tag">+${project.technologies.length - 4}</span>` : ''}
                </div>
                <div class="project-links">
                    ${project.demo ? `
                        <a href="${project.demo}" class="project-link project-link-demo" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    ` : ''}
                    <button class="project-link project-link-details view-project" data-project-id="${project.id}">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to view project buttons
    document.querySelectorAll('.view-project').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            openProjectModal(projectId);
        });
    });
}

// ====================
// Experience Loading
// ====================
function loadExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    if (!experienceTimeline) return;
    
    if (portfolioData.experience.length === 0) {
        experienceTimeline.innerHTML = `
            <div class="placeholder-message">
                <i class="fas fa-briefcase"></i>
                <h3>Experience Coming Soon</h3>
                <p>I'm currently focusing on my studies and building my professional experience. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    experienceTimeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${exp.startDate} - ${exp.endDate}</div>
                <h3 class="timeline-title">${exp.position}</h3>
                <h4 class="timeline-company">${exp.company}</h4>
                <p class="timeline-description">${exp.description}</p>
                ${exp.achievements ? `
                    <ul class="timeline-achievements">
                        ${exp.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// ====================
// Education Loading
// ====================
function loadEducation() {
    const educationTimeline = document.getElementById('education-timeline');
    if (!educationTimeline) return;
    
    educationTimeline.innerHTML = portfolioData.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${edu.startDate} - ${edu.endDate}</div>
                <h3 class="timeline-title">${edu.degree}</h3>
                <h4 class="timeline-company">${edu.institution}</h4>
                <p class="timeline-description">${edu.description}</p>
            </div>
        </div>
    `).join('');
}

// ====================
// Certifications Loading
// ====================
function loadCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    if (!certificationsGrid) return;
    
    certificationsGrid.innerHTML = portfolioData.certifications.map(cert => `
        <div class="certificate-card" data-credential-url="${cert.credentialUrl || ''}">
            <div class="certificate-image">
                <img src="${cert.image}" alt="${cert.name}" loading="lazy">
            </div>
            <div class="certificate-content">
                <h3 class="certificate-title">${cert.name}</h3>
                <p class="certificate-org">${cert.organization}</p>
                <p class="certificate-date">${cert.date}</p>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to certificates
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('click', function() {
            const url = this.dataset.credentialUrl;
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
}

// ====================
// Contact Info Loading
// ====================
function loadContactInfo() {
    const contact = portfolioData.contact;
    
    const contactEmail = document.getElementById('contact-email');
    const contactPhone = document.getElementById('contact-phone');
    const contactLocation = document.getElementById('contact-location');
    
    if (contactEmail) {
        contactEmail.textContent = contact.email;
        contactEmail.href = `mailto:${contact.email}`;
    }
    
    if (contactPhone) {
        contactPhone.textContent = contact.phone;
        contactPhone.href = `tel:${contact.phone.replace(/[^0-9+]/g, '')}`;
    }
    
    if (contactLocation) {
        contactLocation.textContent = contact.location;
    }
}

// ====================
// Navigation
// ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Scroll event for navbar shadow
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Intersection Observer for active section
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100; // Offset for navbar height
    
    let currentSection = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    // Update active class on nav links
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1); // Remove # from href
        if (href === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ====================
// Scroll Animations
// ====================

// Smooth scroll function
function smoothScrollTo(targetId) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;
    
    const targetPosition = targetSection.offsetTop - 70; // Account for navbar height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // milliseconds
    const startTime = performance.now();
    
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

// Update navigation to use smooth scroll
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Navigation link clicks with smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            
            // Smooth scroll to section
            smoothScrollTo(targetId);
            
            // Update active class
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Scroll event for navbar shadow
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active section on scroll
        updateActiveSection();
    });
    
    // Initial active section
    updateActiveSection();
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 150; // Increased offset for better detection
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    // If no section found, check if we're at the top
    if (!currentSectionId && window.scrollY < 100) {
        currentSectionId = 'home';
    }
    
    // If at bottom of page, set last section as active
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
            currentSectionId = lastSection.getAttribute('id');
        }
    }
    
    // Update nav links
    if (currentSectionId) {
        navLinks.forEach(link => {
            const linkSectionId = link.getAttribute('href').substring(1);
            if (linkSectionId === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.section-header, .skill-category, .project-card, .timeline-item, .certificate-card, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// ====================
// Typed Text Effect
// ====================
function initTypedText() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;
    
    const roles = portfolioData.profile.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
}

// ====================
// Project Filters
// ====================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            filterButtons.forEach(button => button.classList.remove('active'));
            this.classList.add('active');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.dataset.category;
                    if (category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// ====================
// Contact Form
// ====================

// ====================
// Contact Form with Free Service Integration
// ====================

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();
        
        // Validate form data
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Try to send using configured service
        const contact = portfolioData.contact;
        
        try {
            if (contact.formEndpoint) {
                await sendToFormService(contact, { name, email, subject, message });
                showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                // Fallback to mailto
                sendViaMailto(contact.email, { name, email, subject, message });
                showFormMessage('Opening your email client...', 'info');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('Failed to send message. Please try again or email me directly.', 'error');
        } finally {
            // Restore button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Send to form service (Formspree, Web3Forms, etc.)
async function sendToFormService(contact, data) {
    const endpoint = contact.formEndpoint;
    
    if (endpoint.includes('web3forms.com')) {
        // Web3Forms specific format
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: contact.formAccessKey,
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            })
        });
        
        if (!response.ok) {
            throw new Error('Form submission failed');
        }
    } else {
        // Formspree, Getform, FormSubmit format
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                _subject: `Portfolio Contact: ${data.subject}`,
            })
        });
        
        if (!response.ok) {
            throw new Error('Form submission failed');
        }
    }
}

// Fallback to mailto
function sendViaMailto(email, data) {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message
function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        ${message}
    `;
    
    // Insert before form
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(messageElement, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;
        
        const contact = portfolioData.contact;
        
        // Use mailto as default
        const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
        
        // Show success message
        showFormMessage('Opening your email client...', 'info');
    });
}

function showFormMessage(message, type) {
    // Create or update message element
    let messageElement = document.querySelector('.form-message');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(messageElement, form);
    }
    
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// ====================
// Modals
// ====================

function initModals() {
    console.log('Init modals called');
    
    const modal = document.getElementById('project-modal');
    console.log('Modal element:', modal);
    
    const closeBtn = document.getElementById('modal-close-btn');
    console.log('Close button:', closeBtn);
}

function initModals() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    const closeBtn = document.getElementById('modal-close-btn');
    
    // Close button - Using onclick for maximum compatibility
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeProjectModal();
        };
    }
    
    // Close when clicking outside modal content
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    };
    
    // Close with Escape key
    document.onkeydown = function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            const modal = document.getElementById('project-modal');
            if (modal && modal.classList.contains('active')) {
                closeProjectModal();
            }
        }
    };
}

window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    // Build modal content
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <div class="project-modal-header">
                <div class="project-modal-image-wrapper">
                    ${project.image ? `
                        <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">
                    ` : `
                        <div class="placeholder-image">
                            <i class="fas fa-code"></i>
                        </div>
                    `}
                </div>
                <div class="project-modal-title">
                    <span class="project-category">${project.category}</span>
                    <h2>${project.title}</h2>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="project-modal-body">
                <div class="project-section">
                    <h3><i class="fas fa-info-circle"></i> Overview</h3>
                    <p>${project.longDescription || project.description}</p>
                </div>
                
                ${project.problem ? `
                    <div class="project-section">
                        <h3><i class="fas fa-exclamation-triangle"></i> Problem</h3>
                        <p>${project.problem}</p>
                    </div>
                ` : ''}
                
                ${project.solution ? `
                    <div class="project-section">
                        <h3><i class="fas fa-lightbulb"></i> Solution</h3>
                        <p>${project.solution}</p>
                    </div>
                ` : ''}
                
                ${project.features && project.features.length > 0 ? `
                    <div class="project-section">
                        <h3><i class="fas fa-star"></i> Features</h3>
                        <ul class="project-features">
                            ${project.features.map(feature => `
                                <li><i class="fas fa-check"></i> ${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${project.images && project.images.length > 0 ? `
                    <div class="project-section">
                        <h3><i class="fas fa-images"></i> Gallery</h3>
                        <div class="project-gallery">
                            ${project.images.map((image, index) => `
                                <div class="gallery-item" data-index="${index}">
                                    <img src="${image}" alt="${project.title} screenshot ${index + 1}" loading="lazy" onerror="this.parentElement.style.display='none'">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${project.challenges ? `
                    <div class="project-section">
                        <h3><i class="fas fa-mountain"></i> Challenges</h3>
                        <p>${project.challenges}</p>
                    </div>
                ` : ''}
                
                ${project.lessons ? `
                    <div class="project-section">
                        <h3><i class="fas fa-graduation-cap"></i> Lessons Learned</h3>
                        <p>${project.lessons}</p>
                    </div>
                ` : ''}
                
                <div class="project-section">
                    <h3><i class="fas fa-link"></i> Links</h3>
                    <div class="project-links">
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-link project-link-demo" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Show modal
    modal.classList.add('active');
    modal.style.display = 'block';
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    // Initialize gallery if images exist
    if (project.images && project.images.length > 0) {
        initGalleryLightbox(project.images);
    }
}

function buildProjectModalContent(project) {
    return `
        <div class="project-modal-content">
            <div class="project-modal-header">
                <div class="project-modal-image">
                    ${project.image ? `
                        <img src="${project.image}" alt="${project.title}" 
                             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23e2e8f0%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%2364748b%22 font-size=%2220%22%3EProject Screenshot%3C/text%3E%3C/svg%3E'">
                    ` : `
                        <div class="project-placeholder">
                            <i class="fas fa-code"></i>
                        </div>
                    `}
                </div>
                <div class="project-modal-title">
                    <span class="project-category">${project.category}</span>
                    <h2>${project.title}</h2>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="project-modal-body">
                <div class="project-section">
                    <h3>Overview</h3>
                    <p>${project.longDescription || project.description}</p>
                </div>
                
                ${project.problem ? `
                    <div class="project-section">
                        <h3>Problem</h3>
                        <p>${project.problem}</p>
                    </div>
                ` : ''}
                
                ${project.solution ? `
                    <div class="project-section">
                        <h3>Solution</h3>
                        <p>${project.solution}</p>
                    </div>
                ` : ''}
                
                ${project.features && project.features.length > 0 ? `
                    <div class="project-section">
                        <h3>Features</h3>
                        <ul class="project-features">
                            ${project.features.map(feature => `
                                <li><i class="fas fa-check"></i> ${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${project.challenges ? `
                    <div class="project-section">
                        <h3>Challenges</h3>
                        <p>${project.challenges}</p>
                    </div>
                ` : ''}
                
                ${project.lessons ? `
                    <div class="project-section">
                        <h3>Lessons Learned</h3>
                        <p>${project.lessons}</p>
                    </div>
                ` : ''}
                
                <div class="project-section">
                    <h3>Links</h3>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link project-link-github" target="_blank">
                            <i class="fab fa-github"></i> GitHub Repository
                        </a>
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-link project-link-demo" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ====================
// Lightbox
// ====================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImages = [];
    let currentIndex = 0;
    
    function showImage(index) {
        if (currentImages.length === 0) return;
        if (index < 0) index = currentImages.length - 1;
        if (index >= currentImages.length) index = 0;
        
        currentIndex = index;
        lightboxImage.src = currentImages[currentIndex];
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function() {
            showImage(currentIndex - 1);
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function() {
            showImage(currentIndex + 1);
        });
    }
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }
    });
    
    // Expose function to set images
    window.setLightboxImages = function(images) {
        currentImages = images;
        currentIndex = 0;
        if (images.length > 0) {
            lightboxImage.src = images[0];
            lightbox.classList.add('active');
        }
    };
}

function initGalleryLightbox(images) {
    if (!images || images.length === 0) return;
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            window.setLightboxImages(images);
            // Update current index
            const lightboxImage = document.getElementById('lightbox-image');
            lightboxImage.src = images[index];
        });
    });
}

// ====================
// Animated Counters
// ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                function updateCounter() {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.round(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}