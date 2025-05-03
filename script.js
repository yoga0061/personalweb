// ===== Loading Animation =====
window.addEventListener('load', function() {
  const loading = document.getElementById('loading');
  
  // Animate loading screen out
  setTimeout(() => {
    loading.style.opacity = '0';
    loading.style.pointerEvents = 'none';
    
    // Remove loading screen from DOM after animation completes
    setTimeout(() => {
      loading.remove();
    }, 1000);
  }, 1500);
});

// ===== Mobile Navigation =====
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  
  mobileMenuButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    mobileNav.hidden = !mobileNav.hidden;
    
    // Toggle menu icon
    const icon = this.querySelector('i');
    if (isExpanded) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.querySelector('i').classList.remove('fa-times');
      mobileMenuButton.querySelector('i').classList.add('fa-bars');
    });
  });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80; // Height of your navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Back to Top Button =====
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== Current Year in Footer =====
document.getElementById('current-year').textContent = new Date().getFullYear();

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = document.getElementById('submit-button');
    const submitText = submitButton.querySelector('.submit-text');
    const loadingSpinner = submitButton.querySelector('.loading-spinner');
    const formStatus = document.getElementById('form-status');
    
    // Show loading state
    submitButton.disabled = true;
    submitText.textContent = 'Sending...';
    loadingSpinner.style.display = 'block';
    formStatus.style.display = 'none';
    
    // Form data
    const formData = new FormData(this);
    
    // Send form data
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(data => {
      // Show success message
      formStatus.textContent = 'Message sent successfully!';
      formStatus.className = 'form-status success';
      formStatus.style.display = 'block';
      
      // Reset form
      this.reset();
    })
    .catch(error => {
      // Show error message
      formStatus.textContent = 'There was a problem sending your message. Please try again later.';
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
      console.error('Error:', error);
    })
    .finally(() => {
      // Reset button state
      submitButton.disabled = false;
      submitText.textContent = 'Send Message';
      loadingSpinner.style.display = 'none';
    });
  });
}

// ===== GSAP Animations =====
function initAnimations() {
  // Check if GSAP is loaded
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('.section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
    
    // Animate skill cards
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  } else {
    console.warn('GSAP not loaded - animations disabled');
  }
}

// ===== Particles.js Configuration =====
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#3a86ff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3a86ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  } else {
    console.warn('particlesJS not loaded - background effect disabled');
  }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', function() {
  // Load GSAP and other non-critical scripts
  const gsapScript = document.createElement('script');
  gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js';
  gsapScript.onload = function() {
    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js';
    scrollTriggerScript.onload = initAnimations;
    document.body.appendChild(scrollTriggerScript);
  };
  document.body.appendChild(gsapScript);
  
  // Initialize particles.js
  initParticles();
});

// ===== Service Worker Registration (Progressive Web App) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
