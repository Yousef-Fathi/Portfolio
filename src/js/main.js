// Smooth scrolling for navigation links
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

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add animation to skill tags
const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach((tag, index) => {
  tag.style.animationDelay = `${index * 0.1}s`;
  tag.classList.add('animate-in');
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
}); 