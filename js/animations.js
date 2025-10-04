// ===================================
// GSAP Animations - Fixed Version (No Hidden Content)
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
        delay: 0.3
    });
    
    // Animate greeting if exists
    const greeting = document.querySelector('.hero-greeting');
    if (greeting) {
        gsap.set(greeting, { opacity: 0, y: 30 });
        heroTimeline.to(greeting, {
            opacity: 1,
            y: 0,
            duration: 0.8
        });
    }
    
    // Animate title if exists
    const title = document.querySelector('.hero-title');
    if (title) {
        gsap.set(title, { opacity: 0, y: 50 });
        heroTimeline.to(title, {
            opacity: 1,
            y: 0,
            duration: 1
        }, '-=0.4');
    }
    
    // Animate subtitle if exists
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        gsap.set(subtitle, { opacity: 0, y: 30 });
        heroTimeline.to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.6');
    }
    
    // Animate description if exists
    const description = document.querySelector('.hero-description');
    if (description) {
        gsap.set(description, { opacity: 0, y: 30 });
        heroTimeline.to(description, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.4');
    }
    
    // Animate buttons if exist
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length > 0) {
        gsap.set(heroButtons, { opacity: 0, y: 20 });
        heroTimeline.to(heroButtons, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2
        }, '-=0.4');
    }
    
    // Animate social links if exist
    const socialLinks = document.querySelectorAll('.hero .social-links a');
    if (socialLinks.length > 0) {
        gsap.set(socialLinks, { opacity: 0, y: 20 });
        heroTimeline.to(socialLinks, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1
        }, '-=0.4');
    }
    
    // Animate floating cards if exist
    const floatingCards = document.querySelectorAll('.floating-card');
    if (floatingCards.length > 0) {
        gsap.set(floatingCards, { opacity: 0, scale: 0 });
        heroTimeline.to(floatingCards, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, '-=1');
    }

    // Animate scroll indicator if exists
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        gsap.set(scrollIndicator, { opacity: 0, y: 20 });
        heroTimeline.to(scrollIndicator, {
            opacity: 1,
            y: 0,
            duration: 0.6
        }, '-=0.5');
    }
}

// ===================================
// Scroll Trigger Animations
// ===================================
function initScrollAnimations() {
    // Service cards animation
    const serviceCards = gsap.utils.toArray('.service-card');
    serviceCards.forEach((card, index) => {
        if (card) {
            gsap.fromTo(card, 
                {
                    opacity: 0,
                    y: 60,
                    rotation: 5
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    y: 0,
                    rotation: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'power3.out'
                }
            );
        }
    });
    
    // Project cards animation
    const projectCards = gsap.utils.toArray('.project-card');
    projectCards.forEach((card, index) => {
        if (card) {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'back.out(1.2)'
                }
            );
        }
    });
    
    // Testimonial cards animation
    const testimonialCards = gsap.utils.toArray('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        if (card) {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'power3.out'
                }
            );
        }
    });
    
    // Stats counter animation
    const statItems = gsap.utils.toArray('.stat-item');
    statItems.forEach((stat, index) => {
        if (stat) {
            gsap.fromTo(stat,
                {
                    opacity: 0,
                    scale: 0.5
                },
                {
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'back.out(2)'
                }
            );
        }
    });
    
    // Blog cards animation
    const blogCards = gsap.utils.toArray('.blog-card');
    blogCards.forEach((card, index) => {
        if (card) {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out'
                }
            );
        }
    });

    // Skill bars animation
    const skillBars = gsap.utils.toArray('.skill-progress');
    skillBars.forEach((bar, index) => {
        if (bar) {
            const targetWidth = bar.style.width || '0%';
            
            gsap.fromTo(bar,
                {
                    width: '0%'
                },
                {
                    scrollTrigger: {
                        trigger: bar,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    width: targetWidth,
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: 'power3.out'
                }
            );
        }
    });

    // Timeline items animation
    const timelineBlocks = gsap.utils.toArray('.timeline-block');
    timelineBlocks.forEach((block, index) => {
        if (block) {
            gsap.fromTo(block,
                {
                    opacity: 0,
                    x: -50
                },
                {
                    scrollTrigger: {
                        trigger: block,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'power3.out'
                }
            );
        }
    });

    // Fun fact cards animation
    const factCards = gsap.utils.toArray('.fact-card');
    factCards.forEach((card, index) => {
        if (card) {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    scale: 0.8,
                    rotation: -10
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'back.out(1.5)'
                }
            );
        }
    });

    // FAQ items animation
    const faqItems = gsap.utils.toArray('.faq-item');
    faqItems.forEach((item, index) => {
        if (item) {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'power3.out'
                }
            );
        }
    });

    // Section headers animation
    const sectionHeaders = gsap.utils.toArray('.section-header');
    sectionHeaders.forEach(header => {
        if (header) {
            gsap.fromTo(header,
                {
                    opacity: 0,
                    y: 40
                },
                {
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );
        }
    });

    // Page header animation (for other pages)
    const pageHeader = document.querySelector('.page-header-content');
    if (pageHeader) {
        gsap.fromTo(pageHeader,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            }
        );
    }

    // Contact form animation
    const contactForm = document.querySelector('.contact-form-wrapper');
    if (contactForm) {
        gsap.fromTo(contactForm,
            {
                opacity: 0,
                x: 50
            },
            {
                scrollTrigger: {
                    trigger: contactForm,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }

    // Contact info animation
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        gsap.fromTo(contactInfo,
            {
                opacity: 0,
                x: -50
            },
            {
                scrollTrigger: {
                    trigger: contactInfo,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }

    // About grid animation
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImage) {
        gsap.fromTo(aboutImage,
            {
                opacity: 0,
                x: -50
            },
            {
                scrollTrigger: {
                    trigger: aboutImage,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }

    if (aboutContent) {
        gsap.fromTo(aboutContent,
            {
                opacity: 0,
                x: 50
            },
            {
                scrollTrigger: {
                    trigger: aboutContent,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }
}

// ===================================
// Parallax Effects
// ===================================
function initParallaxEffects() {
    // Check if hero exists before animating orbs
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Parallax for gradient orbs
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
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)',
                overwrite: 'auto'
            });
        });
    });
}

// ===================================
// Smooth Page Transitions
// ===================================
function initPageTransitions() {
    // Fade in animation when entering page
    gsap.fromTo('body',
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        }
    );
    
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
// Fallback: Show all content if animations fail
// ===================================
window.addEventListener('load', () => {
    setTimeout(() => {
        // Ensure all elements are visible after page load
        const allAnimatedElements = document.querySelectorAll(
            '.hero-greeting, .hero-title, .hero-subtitle, .hero-description, ' +
            '.hero-buttons .btn, .social-links a, .floating-card, ' +
            '.service-card, .project-card, .testimonial-card, .stat-item, ' +
            '.blog-card, .timeline-block, .fact-card, .faq-item'
        );
        
        allAnimatedElements.forEach(el => {
            // If element is still hidden after 3 seconds, show it
            if (window.getComputedStyle(el).opacity === '0') {
                gsap.to(el, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    }, 3000);
});

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('GSAP')) {
        console.warn('GSAP Animation Warning:', e.message);
        e.preventDefault();
    }
});

// ===================================
// Debug Helper
// ===================================
const DEBUG_MODE = false;

if (DEBUG_MODE) {
    console.log('%c🎬 GSAP Animations Initialized', 'color: #88ce02; font-size: 16px; font-weight: bold;');
    console.log('ScrollTriggers:', ScrollTrigger.getAll());
}