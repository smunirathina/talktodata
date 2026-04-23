// Shared nav + footer injected into every page
const NAV_HTML = `
<nav>
  <a href="index.html" class="logo">
    <span class="logo-mark">T2D</span>
    Talking 2 Data
  </a>
  <ul class="nav-links">
    <li><a href="features.html">Features</a></li>
    <li><a href="how-it-works.html">How it Works</a></li>
    <li><a href="pricing.html">Pricing</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="contact.html" class="nav-cta">Get Early Access</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <span class="logo-mark">T2D</span>
        Talking 2 Data
      </a>
      <p>AI-powered natural language interface for your data. Ask anything, get instant answers, charts, and insights.</p>
    </div>
    <div class="footer-col">
      <h4>Product</h4>
      <ul>
        <li><a href="features.html">Features</a></li>
        <li><a href="how-it-works.html">How it Works</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="#">Changelog</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Security</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Talking 2 Data · www.talking2data.com</span>
    <span>Built with AI. Powered by curiosity.</span>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Inject footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
