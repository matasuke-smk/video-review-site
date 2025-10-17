// Main JavaScript for Video Review Site

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (if needed in the future)
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Add active state to current page
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const linkHref = this.getAttribute('href');

      if (linkHref === currentPage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Add animation on scroll for article cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Current year for footer
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.querySelector('.copyright');
  if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} 動画レビューナビ All Rights Reserved.`;
  }

  // Active navigation highlighting
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('nav a');

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (currentPath.includes(href) || (currentPath.endsWith('/') && href === 'index.html')) {
      item.style.color = 'var(--primary-color)';
      item.style.fontWeight = 'bold';
    }
  });
});

// Simple analytics (placeholder for future implementation)
function trackPageView() {
  console.log('Page viewed:', window.location.pathname);
}

trackPageView();
