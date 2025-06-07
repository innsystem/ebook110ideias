/**
 * ==========================================
 * CUSTOM JAVASCRIPT - 110 Ideias Ebook
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animation || 'fadeInUp';
                
                // Add animate.css classes
                element.classList.add('animate__animated', `animate__${animation}`, 'animated');
                
                // Remove observer after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ==========================================
    // SMOOTH SCROLLING NAVIGATION
    // ==========================================
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // ==========================================
    // NAVBAR SCROLL EFFECTS & PARALLAX
    // ==========================================
    
    const navbar = document.querySelector('.navbar');
    const parallaxElements = document.querySelectorAll('.hero-bg-parallax, .parallax-bg');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove backdrop blur based on scroll position
        if (scrollTop > 100) {
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.backgroundColor = 'rgba(30, 41, 59, 0.95)';
        } else {
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.backgroundColor = 'rgba(30, 41, 59, 0.9)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // CTA BUTTONS FUNCTIONALITY
    // ==========================================
    
    // Add click tracking for all CTA buttons
    function addCTAListeners() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            const text = button.textContent.toLowerCase();
            if (text.includes('quero') || text.includes('comprar') || text.includes('adquirir')) {
                button.addEventListener('click', function(e) {
                    // Add click animation
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                    
                    // Add your checkout/purchase logic here
                    console.log('CTA Button clicked:', this.textContent);
                    
                    // Example: Open checkout page or modal
                    // window.open('https://your-checkout-url.com', '_blank');
                });
            }
        });
    }
    
    addCTAListeners();

    // ==========================================
    // ACCORDION ENHANCEMENTS
    // ==========================================
    
    // Add enhanced accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add subtle animation delay
            setTimeout(() => {
                const target = document.querySelector(this.dataset.bsTarget);
                if (target && target.classList.contains('show')) {
                    target.style.animationDelay = '0.1s';
                }
            }, 100);
        });
    });

    // ==========================================
    // CARD INTERACTIONS
    // ==========================================
    
    // Add hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==========================================
    // MOBILE OPTIMIZATIONS
    // ==========================================
    
    // Touch-friendly interactions for mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Adjust animations for mobile
    if (isMobile()) {
        // Reduce animation delays on mobile
        const delayedElements = document.querySelectorAll('[data-delay]');
        delayedElements.forEach(element => {
            const currentDelay = parseInt(element.dataset.delay);
            element.style.animationDelay = (currentDelay / 2) + 'ms';
        });
    }

    // ==========================================
    // PERFORMANCE OPTIMIZATIONS
    // ==========================================
    
    // Throttle scroll events
    let ticking = false;
    
    function updateScrollEffects() {
        // Update any scroll-dependent effects here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    // Replace direct scroll listeners with throttled version
    window.addEventListener('scroll', requestTick, { passive: true });

    // ==========================================
    // LAZY LOADING ENHANCEMENTS
    // ==========================================
    
    // Add loading states for images when they come into view
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });

    // ==========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
        
        // Enter key on CTA buttons
        if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
            e.target.click();
        }
    });

    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #4f46e5';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // ==========================================
    // ANALYTICS TRACKING (Optional)
    // ==========================================
    
    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id || entry.target.dataset.section;
                if (sectionId) {
                    console.log('Section viewed:', sectionId);
                    // Add your analytics tracking here
                    // gtag('event', 'section_view', { section_id: sectionId });
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ==========================================
    // ERROR HANDLING
    // ==========================================
    
    // Global error handler for graceful degradation
    window.addEventListener('error', function(e) {
        console.warn('Non-critical error:', e.error);
        // Fallback for animation failures
        const animateElements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
        animateElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    });

    // ==========================================
    // INITIALIZATION COMPLETE
    // ==========================================
    
    console.log('110 Ideias Ebook - Website initialized successfully!');
    
    // Add a subtle page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Smooth reveal animation for dynamic content
function revealElement(element, animation = 'fadeInUp') {
    element.classList.add('animate__animated', `animate__${animation}`);
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

// Export functions for external use
window.EbookUtils = {
    revealElement,
    debounce
};