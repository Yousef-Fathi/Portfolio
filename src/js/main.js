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

// Responsive nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Theme toggle logic (support both desktop and mobile buttons)
function setTheme(dark) {
  document.body.classList.toggle('dark-theme', dark);
  // Update both icons
  [document.getElementById('themeToggleDesktop'), document.getElementById('themeToggleMobile')].forEach(btn => {
    if (btn) {
      const icon = btn.querySelector('i');
      if (dark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  });
}
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');
['themeToggleDesktop', 'themeToggleMobile'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', function() {
      const isDark = !document.body.classList.contains('dark-theme');
      setTheme(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}); 