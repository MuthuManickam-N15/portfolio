// ===================================
// GSAP Animations - Complete Version
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// Wait for DOM to be fully loaded
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        initHeroAnimations();
        initScrollAnimations();
        initParallaxEffects();
        initMagneticButtons();
        initPageTransitions();
        // initTextAnimations(); // Optional - can be heavy on performance
        // initCursorEffect(); // Optional - for desktop only
    }, 100);
});

// ===================================
// Hero Animations
// ===================================
function initHeroAnimations() {
    // Check if hero section exists (only on home page)
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const heroTimeline = gsap.timeline({ 
        defaults: { ease: 'power3.out' },
        delay: 0.3 // Wait a bit before starting
    });
    
    // Animate greeting if exists
    if (document.querySelector('.hero-greeting')) {
        heroTimeline.from('.hero-greeting', {
            opacity: 0,
            y: 30,
            duration: 0.8
        });
    }
    
    // Animate title if exists
    if (document.querySelector('.hero-title')) {
        heroTimeline.from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1
        }, '-=0.4');
    }
    
    // Animate subtitle if exists
    if (document.querySelector('.hero-subtitle')) {
        heroTimeline.from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.6');
    }
    
    // Animate description if exists
    if (document.querySelector('.hero-description')) {
        heroTimeline.from('.hero-description', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.4');
    }
    
    // Animate buttons if exist
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length > 0) {
        heroTimeline.from('.hero-buttons .btn', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.2
        }, '-=0.4');
    }
    
    // Animate social links if exist
    const socialLinks = document.querySelectorAll('.hero .social-links a');
    if (socialLinks.length > 0) {
        heroTimeline.from('.hero .social-links a', {
            opacity: 0,
            y: 20,
            duration: 0.4,
            stagger: 0.1
        }, '-=0.4');
    }
    
    // Animate floating cards if exist
    const floatingCards = document.querySelectorAll('.floating-card');
    if (floatingCards.length > 0) {
        heroTimeline.from('.floating-card', {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, '-=1');
    }

    // Animate scroll indicator if exists
    if (document.querySelector('.scroll-indicator')) {
        heroTimeline.from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, '-=0.5');
    }
}

// ===================================
// Scroll Trigger Animations
// ===================================
function initScrollAnimations() {
    // Animate sections on scroll
    const sections = gsap.utils.toArray('.section');
    sections.forEach((section, index) => {
        if (section) {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                    // markers: true // Uncomment for debugging
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out'
            });
        }
    });
    
    // Service cards animation
    const serviceCards = gsap.utils.toArray('.service-card');
    serviceCards.forEach((card, index) => {
        if (card) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 60,
                rotation: 5,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out'
            });
        }
    });
    
    // Project cards animation
    const projectCards = gsap.utils.toArray('.project-card');
    projectCards.forEach((card, index) => {
        if (card) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'back.out(1.2)'
            });
        }
    });
    
    // Testimonial cards animation
    const testimonialCards = gsap.utils.toArray('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        if (card) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out'
            });
        }
    });
    
    // Stats counter animation
    const statItems = gsap.utils.toArray('.stat-item');
    statItems.forEach((stat, index) => {
        if (stat) {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.5,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'back.out(2)'
            });
        }
    });
    
    // Blog cards animation
    const blogCards = gsap.utils.toArray('.blog-card');
    blogCards.forEach((card, index) => {
        if (card) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        }
    });

    // Skill bars animation
    const skillBars = gsap.utils.toArray('.skill-progress');
    skillBars.forEach((bar, index) => {
        if (bar) {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                width: width,
                duration: 1.5,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        }
    });

    // Timeline items animation
    const timelineBlocks = gsap.utils.toArray('.timeline-block');
    timelineBlocks.forEach((block, index) => {
        if (block) {
            gsap.from(block, {
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'power3.out'
            });
        }
    });

    // Fun fact cards animation
    const factCards = gsap.utils.toArray('.fact-card');
    factCards.forEach((card, index) => {
        if (card) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.8,
                rotation: -10,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'back.out(1.5)'
            });
        }
    });

    // FAQ items animation
    const faqItems = gsap.utils.toArray('.faq-item');
    faqItems.forEach((item, index) => {
        if (item) {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        }
    });

    // Section headers animation
    const sectionHeaders = gsap.utils.toArray('.section-header');
    sectionHeaders.forEach(header => {
        if (header) {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power3.out'
            });
        }
    });

    // Page header animation
    const pageHeader = document.querySelector('.page-header-content');
    if (pageHeader) {
        gsap.from(pageHeader, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
        });
    }

    // Contact form animation
    const contactForm = document.querySelector('.contact-form-wrapper');
    if (contactForm) {
        gsap.from(contactForm, {
            scrollTrigger: {
                trigger: contactForm,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    }

    // Contact info animation
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        gsap.from(contactInfo, {
            scrollTrigger: {
                trigger: contactInfo,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        });
    }

    // About grid animation
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImage) {
        gsap.from(aboutImage, {
            scrollTrigger: {
                trigger: aboutImage,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        });
    }

    if (aboutContent) {
        gsap.from(aboutContent, {
            scrollTrigger: {
                trigger: aboutContent,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
}

// ===================================
// Parallax Effects
// ===================================
function initParallaxEffects() {
    // Check if elements exist before animating
    const gradientOrbs = gsap.utils.toArray('.gradient-orb');
    if (gradientOrbs.length > 0) {
        gradientOrbs.forEach((orb, index) => {
            gsap.to(orb, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: index % 2 === 0 ? 200 : -200,
                rotation: 360,
                ease: 'none'
            });
        });
    }
    
    // Parallax for floating cards
    const floatingCards = gsap.utils.toArray('.floating-card');
    if (floatingCards.length > 0) {
        floatingCards.forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: (index + 1) * 50,
                rotation: index % 2 === 0 ? 5 : -5,
                ease: 'none'
            });
        });
    }

    // Parallax for images
    const parallaxImages = gsap.utils.toArray('.parallax-image');
    if (parallaxImages.length > 0) {
        parallaxImages.forEach(image => {
            gsap.to(image, {
                scrollTrigger: {
                    trigger: image,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                y: -100,
                ease: 'none'
            });
        });
    }
}

// ===================================
// Text Animations (Optional - Performance Heavy)
// ===================================
function initTextAnimations() {
    const sectionTitles = gsap.utils.toArray('.section-title');
    
    sectionTitles.forEach(title => {
        // Skip if already processed
        if (title.dataset.animated) return;
        
        const text = title.textContent;
        const chars = text.split('');
        
        title.innerHTML = chars.map(char => 
            `<span style="display: inline-block; opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
        
        title.dataset.animated = 'true';
        
        const spans = title.querySelectorAll('span');
        
        gsap.to(spans, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });
}

// ===================================
// Magnetic Button Effect
// ===================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });

    // Magnetic effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(card, {
                rotateY: x * 0.02,
                rotateX: -y * 0.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ===================================
// Custom Cursor Effect (Optional)
// ===================================
function initCursorEffect() {
    // Only run on desktop
    if (window.innerWidth < 768) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: transform 0.2s ease, opacity 0.3s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Scale cursor on hover
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .blog-card, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = 'var(--accent-color)';
            cursor.style.backgroundColor = 'rgba(252, 163, 17, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}

// ===================================
// Smooth Page Transitions
// ===================================
function initPageTransitions() {
    // Fade in animation when entering page
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
    });
    
    // Fade out animation when leaving page
    const internalLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's a hash link, external, or special link
            if (!href || 
                href.startsWith('#') || 
                href.startsWith('http') || 
                href.startsWith('mailto') || 
                href.startsWith('tel')) {
                return;
            }
            
            e.preventDefault();
            
            gsap.to('body', {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => {
                    window.location.href = href;
                }
            });
        });
    });
}

// ===================================
// Image Reveal on Scroll
// ===================================
function initImageReveal() {
    const images = gsap.utils.toArray('.project-image img, .blog-image img');
    
    images.forEach(img => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            scale: 1.2,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

// ===================================
// Stagger Animations
// ===================================
function initStaggerAnimations() {
    // Stagger animation for lists
    const lists = gsap.utils.toArray('.service-skills, .project-tags, .blog-tags');
    
    lists.forEach(list => {
        const items = list.children;
        
        gsap.from(items, {
            scrollTrigger: {
                trigger: list,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out'
        });
    });
}

// ===================================
// Hover Animations
// ===================================
function initHoverAnimations() {
    // Animate service icons on hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', () => {
            if (icon) {
                gsap.to(icon, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// ===================================
// Refresh ScrollTrigger on resize
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===================================
// Refresh ScrollTrigger after images load
// ===================================
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// ===================================
// Update ScrollTrigger on tab visibility change
// ===================================
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        ScrollTrigger.refresh();
    }
});

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('GSAP target')) {
        console.warn('GSAP Animation Warning:', e.message);
        // Don't break the site, just log the warning
        e.preventDefault();
    }
});

// ===================================
// Debug Mode (for development)
// ===================================
const DEBUG_MODE = false; // Set to true for debugging

if (DEBUG_MODE) {
    // Show ScrollTrigger markers
    ScrollTrigger.defaults({
        markers: true
    });
    
    console.log('%c🎬 GSAP Animations Initialized', 'color: #88ce02; font-size: 16px; font-weight: bold;');
    console.log('ScrollTriggers:', ScrollTrigger.getAll());
}

// ===================================
// Export functions (if using modules)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initHeroAnimations,
        initScrollAnimations,
        initParallaxEffects,
        initMagneticButtons,
        initPageTransitions
    };
}