// ============================================================
// Portfolio – Interaktionen
// Mobile-Navigation, Scroll-Reveal, Projektfilter, Lightbox
// ============================================================

// ---------- Mobile-Navigation ----------

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ---------- Scroll-Reveal ----------

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ---------- Projektfilter ----------

const filterBar = document.querySelector('.filter-bar');

if (filterBar) {
  const cards = document.querySelectorAll('.card[data-kategorie]');
  const counter = document.querySelector('[data-treffer]');

  const applyFilter = (kategorie) => {
    let sichtbar = 0;

    cards.forEach((card) => {
      const treffer = kategorie === 'alle' || card.dataset.kategorie === kategorie;
      card.classList.toggle('is-hidden', !treffer);
      if (treffer) sichtbar += 1;
    });

    if (counter) {
      counter.textContent = sichtbar === 1 ? '1 Projekt' : `${sichtbar} Projekte`;
    }
  };

  filterBar.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;

    filterBar.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn === button));
    });

    applyFilter(button.dataset.filter);
  });
}

// ---------- Lightbox für Screenshots ----------

const lightbox = document.querySelector('.lightbox');

if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');

  document.querySelectorAll('.gallery button').forEach((button) => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.showModal();
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());

  // Klick auf den Hintergrund schliesst die Ansicht
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

// ---------- Aktuelles Jahr im Footer ----------

const yearField = document.getElementById('year');
if (yearField) yearField.textContent = new Date().getFullYear();
