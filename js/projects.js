// ===================================
// Projects Page - Filter Functionality
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initProjectFilter();
    initLoadMore();
});

// ===================================
// Project Filtering
// ===================================
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects with animation
            projectCards.forEach((card, index) => {
                const categories = card.getAttribute('data-category');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    // Show card with stagger animation
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.classList.remove('hide');
                        
                        // Animate in
                        gsap.fromTo(card,
                            {
                                opacity: 0,
                                y: 30,
                                scale: 0.9
                            },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.5,
                                ease: 'power2.out'
                            }
                        );
                    }, index * 50);
                } else {
                    // Hide card with animation
                    gsap.to(card, {
                        opacity: 0,
                        y: -20,
                        duration: 0.3,
                        ease: 'power2.in',
                        onComplete: () => {
                            card.style.display = 'none';
                            card.classList.add('hide');
                        }
                    });
                }
            });
        });
    });
}

// ===================================
// Load More Functionality
// ===================================
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (!loadMoreBtn) return;
    
    let currentItems = 9; // Initially show 9 projects
    const projectCards = document.querySelectorAll('.project-card');
    
    // Hide extra projects initially
    projectCards.forEach((card, index) => {
        if (index >= currentItems) {
            card.style.display = 'none';
        }
    });
    
    // Check if button should be hidden
    if (projectCards.length <= currentItems) {
        loadMoreBtn.style.display = 'none';
    }
    
    loadMoreBtn.addEventListener('click', () => {
        const visibleCards = Array.from(projectCards).filter(card => 
            card.style.display !== 'none' && !card.classList.contains('hide')
        );
        
        const hiddenCards = Array.from(projectCards).filter(card => 
            card.style.display === 'none' && !card.classList.contains('hide')
        );
        
        // Show next 3 items
        hiddenCards.slice(0, 3).forEach((card, index) => {
            setTimeout(() => {
                card.style.display = 'block';
                
                // Scroll to card smoothly
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Animate in
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: 'back.out(1.2)'
                    }
                );
            }, index * 100);
        });
        
        currentItems += 3;
        
        // Hide button if all items are visible
        const remainingHidden = hiddenCards.length - 3;
        if (remainingHidden <= 0) {
            gsap.to(loadMoreBtn, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                onComplete: () => {
                    loadMoreBtn.style.display = 'none';
                }
            });
        }
    });
}

// ===================================
// Project Card Hover Effects
// ===================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this.querySelector('.project-image img'), {
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector('.project-image img'), {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
});