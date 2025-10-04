// ===================================
// Contact Form Handler with EmailJS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFAQ();
});

// ===================================
// Initialize EmailJS
// ===================================
(function() {
    // Initialize EmailJS with your public key
    // Sign up at https://www.emailjs.com/ to get your keys
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// ===================================
// Contact Form Submission
// ===================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Hide previous messages
        successMessage.classList.remove('show');
        errorMessage.classList.remove('show');
        
        // Get form data
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            subject: contactForm.subject.value,
            budget: contactForm.budget.value,
            message: contactForm.message.value,
            newsletter: contactForm.newsletter.checked
        };
        
        // Validate form
        if (!validateContactForm(formData)) {
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS credentials
            const response = await emailjs.send(
                'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    budget: formData.budget || 'Not specified',
                    message: formData.message,
                    newsletter: formData.newsletter ? 'Yes' : 'No'
                }
            );
            
            // Show success message
            successMessage.classList.add('show');
            contactForm.reset();
            
            // Animate success message
            gsap.fromTo(successMessage,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
            
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Show error message
            errorMessage.classList.add('show');
            
            // Animate error message
            gsap.fromTo(errorMessage,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
            
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

// ===================================
// Form Validation
// ===================================
function validateContactForm(data) {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.form-input, .form-textarea').forEach(el => {
        el.style.borderColor = '';
    });
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'Please enter your full name');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Subject validation
    if (!data.subject || data.subject.trim().length < 3) {
        showFieldError('subject', 'Please enter a subject');
        isValid = false;
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'Please enter a message (at least 10 characters)');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.parentElement;
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--accent-color)';
    errorDiv.style.fontSize = 'var(--fs-sm)';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    formGroup.appendChild(errorDiv);
    field.style.borderColor = 'var(--accent-color)';
    
    // Animate error
    gsap.from(errorDiv, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
    });
}

// ===================================
// FAQ Accordion
// ===================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const answer = faq.querySelector('.faq-answer');
                answer.style.maxHeight = '0';
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                
                // Animate icon
                gsap.to(question.querySelector('i'), {
                    rotation: 180,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                // Animate icon back
                gsap.to(question.querySelector('i'), {
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// ===================================
// Alternative: Using Netlify Forms
// (If you prefer not to use EmailJS)
// ===================================
/*
function handleNetlifyForm() {
    const contactForm = document.getElementById('contactForm');
    
    // Add Netlify form attributes to your HTML:
    // <form name="contact" method="POST" data-netlify="true">
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                // Show success message
                console.log('Form submitted successfully');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}
*/

// ===================================
// Real-time Form Field Validation
// ===================================
document.querySelectorAll('.form-input, .form-textarea').forEach(field => {
    field.addEventListener('blur', function() {
        const value = this.value.trim();
        const name = this.name;
        
        // Remove previous error
        const existingError = this.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        this.style.borderColor = '';
        
        // Validate on blur
        if (name === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(name, 'Invalid email format');
            }
        }
    });
    
    // Remove error on focus
    field.addEventListener('focus', function() {
        const existingError = this.parentElement.querySelector('.error-message');
        if (existingError) {
            gsap.to(existingError, {
                opacity: 0,
                y: -10,
                duration: 0.2,
                onComplete: () => existingError.remove()
            });
        }
        this.style.borderColor = '';
    });
});

// Character counter for message textarea
const messageField = document.getElementById('message');
if (messageField) {
    const counterDiv = document.createElement('div');
    counterDiv.className = 'character-counter';
    counterDiv.style.cssText = `
        text-align: right;
        font-size: var(--fs-sm);
        color: var(--text-muted);
        margin-top: 0.25rem;
    `;
    messageField.parentElement.appendChild(counterDiv);
    
    messageField.addEventListener('input', function() {
        const length = this.value.length;
        const minLength = 10;
        
        if (length < minLength) {
            counterDiv.textContent = `${minLength - length} characters remaining`;
            counterDiv.style.color = 'var(--accent-color)';
        } else {
            counterDiv.textContent = `${length} characters`;
            counterDiv.style.color = 'var(--text-muted)';
        }
    });
}