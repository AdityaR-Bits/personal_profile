// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing tab functionality...');
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }));

    // Tab switching functionality
    function switchTab(targetTab) {
        console.log('Switching to tab:', targetTab);
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        
        // Add active class to target nav link
        const targetNavLink = document.querySelector(`[data-tab="${targetTab}"]`);
        if (targetNavLink) {
            targetNavLink.classList.add('active');
            console.log('Active nav link updated');
        } else {
            console.log('Target nav link not found:', targetTab);
        }
        
        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Show the target tab pane
        const targetPane = document.getElementById(targetTab + '-tab');
        if (targetPane) {
            targetPane.classList.add('active');
            console.log('Tab pane activated:', targetTab + '-tab');
        } else {
            console.log('Target tab pane not found:', targetTab + '-tab');
        }
    }

    // Navigation tab switching
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-tab');
            console.log('Nav link clicked:', targetTab);
            switchTab(targetTab);
        });
    });

    // Footer tab switching
    const footerLinks = document.querySelectorAll('.footer-links a');
    console.log('Found footer links:', footerLinks.length);
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-tab');
            console.log('Footer link clicked:', targetTab);
            switchTab(targetTab);
        });
    });

    // Hero button tab switching
    const heroButtons = document.querySelectorAll('.hero-buttons a[data-tab]');
    console.log('Found hero buttons:', heroButtons.length);
    
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = button.getAttribute('data-tab');
            console.log('Hero button clicked:', targetTab);
            switchTab(targetTab);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // EmailJS integration
            emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID
            
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };
            
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showFormMessage('Failed to send message. Please try again.', 'error');
                })
                .finally(function() {
                    // Reset button state
                    btnText.style.display = 'inline-block';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                });
        });
    }

    // Form message display
    function showFormMessage(message, type) {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Email functionality
    function handleEmailClick(email) {
        const mailtoLink = `mailto:${email}`;
        try {
            window.location.href = mailtoLink;
            return;
        } catch (error) {
            copyEmailToClipboard(email);
        }
    }

    function copyEmailToClipboard(email) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(email).then(() => {
                showEmailPopup();
            }).catch(() => {
                fallbackCopyEmailToClipboard(email);
            });
        } else {
            fallbackCopyEmailToClipboard(email);
        }
    }

    function fallbackCopyEmailToClipboard(email) {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showEmailPopup();
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        
        document.body.removeChild(textArea);
    }

    function showEmailPopup() {
        const popup = document.getElementById('emailPopup');
        if (popup) {
            popup.classList.add('show');
            setTimeout(() => {
                popup.classList.remove('show');
            }, 3000);
        }
    }

    // Email link event listeners
    document.querySelectorAll('.email-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.getAttribute('data-email');
            handleEmailClick(email);
        });
    });

    // Resume click functionality
    const resumeFrontPage = document.getElementById('resumeFrontPage');
    if (resumeFrontPage) {
        resumeFrontPage.addEventListener('click', () => {
            window.open('./Aditya_Rustagi_Mach2.pdf', '_blank');
        });
    }

    // Add scroll progress indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #800020, #a0522d);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Initialize scroll progress
    createScrollProgress();

    // Animated counter for stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.getAttribute('data-target'));
                animateCounter(statNumber, target);
                statsObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });

    console.log('Tab functionality initialized successfully!');
}); 