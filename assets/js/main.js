(() => {
  'use strict';

  /* ========================================================================
     1. Base de Datos de Entrevistas (33 videos extraídos del sitio)
     ======================================================================== */
  const INTERVIEWS = [
    // Temporada 3 — Programas 42 al 59 (17 entrevistas)
    {
      id: 'x50hFWrvtCQ',
      category: 's3',
      program: 'Programa 42',
      title: 'Sebastián Peralta y Nadia Burtovoy',
      role: 'Profesores de Ed. Física • Temporada 3'
    },
    {
      id: '6VYskHcG974',
      category: 's3',
      program: 'Programa 43',
      title: 'Santiago Boviez',
      role: 'Nadador de Aguas Abiertas • Temporada 3'
    },
    {
      id: '3nxnJyeuyWA',
      category: 's3',
      program: 'Programa 44',
      title: 'Daniel Carunchio y Verónica Coronel',
      role: 'Tanatopractores • Temporada 3'
    },
    {
      id: '7C8bW3a8jaE',
      category: 's3',
      program: 'Programa 45',
      title: 'Luciana Kees',
      role: 'Abogada y Actriz • Temporada 3'
    },
    {
      id: 'JhsbF5BjnNQ',
      category: 's3',
      program: 'Programa 46',
      title: 'Antonela Carrizo',
      role: 'Lic. en Comunicación Social • Temporada 3'
    },
    {
      id: 'hkAcV0gRVdA',
      category: 's3',
      program: 'Programa 47',
      title: 'Carolina Leonhardt',
      role: 'Atleta de Alto Rendimiento en Remo • Temporada 3'
    },
    {
      id: '86sK2VgLqOI',
      category: 's3',
      program: 'Programa 48',
      title: 'Argentino Foremny',
      role: 'Ex Combatiente y Héroe de Malvinas • Temporada 3'
    },
    {
      id: 'PNsuWRM7mYg',
      category: 's3',
      program: 'Programa 49',
      title: 'Mateo Freyre',
      role: 'Jugador de la Selección Argentina de Waterpolo • Temporada 3'
    },
    {
      id: '6IZ8aAB1cC0',
      category: 's3',
      program: 'Programa 50',
      title: 'Andrés Mendoza',
      role: 'Atleta de Alto Rendimiento en Velocidad y Valla • Temporada 3'
    },
    {
      id: 'WJIx2-3R55o',
      category: 's3',
      program: 'Programa 51',
      title: 'Germán González',
      role: 'Jugador de Básquet Profesional - C.A. Colón • Temporada 3'
    },
    {
      id: '128zunTDDj4',
      category: 's3',
      program: 'Programa 52',
      title: 'Lucca Tiracchia y Esteban Leguizamón',
      role: 'Miembros de Kasset • Temporada 3'
    },
    {
      id: 'tgsqqbbFmqw',
      category: 's3',
      program: 'Programa 53',
      title: 'Sofi Garcés y Cande Giordanino',
      role: 'Nadadoras de Aguas Abiertas • Temporada 3'
    },
    {
      id: 'goB6_dcjPsg',
      category: 's3',
      program: 'Programa 54',
      title: 'César Des',
      role: 'Cantante de Folk Rock • Temporada 3'
    },
    {
      id: 'oOqDcOKIAYE',
      category: 's3',
      program: 'Programa 55',
      title: 'Jorge Onorato',
      role: 'Jugador de Rugby Profesional • Temporada 3'
    },
    {
      id: 'QzGjOtvYy2k',
      category: 's3',
      program: 'Programa 56',
      title: 'Emmanuel Leguizamón',
      role: 'Entrenador de Rugby en Sillas de Ruedas • Temporada 3'
    },
    {
      id: 'xZRY1zRBCpc',
      category: 's3',
      program: 'Programa 58',
      title: 'Lisandro Carrasco',
      role: 'Productor Agropecuario • Temporada 3'
    },
    {
      id: 'Ur0E0sfNizE',
      category: 's3',
      program: 'Programa 59',
      title: 'Andrés Cabrera',
      role: 'Director General Mega 98.3 Santa Fe • Temporada 3'
    },

    // 16 Entrevistas adicionales incorporadas en el sitio
    { id: '94C-fkGn_Ew', category: 'extra', program: 'Entrevista #1', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'Wsw2CvR6nHo', category: 'extra', program: 'Entrevista #2', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'dMYr7WDVg00', category: 'extra', program: 'Entrevista #3', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: '5s3GoDJM1DM', category: 'extra', program: 'Entrevista #4', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'LC7LheJWM7U', category: 'extra', program: 'Entrevista #5', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'Fmckb-h-hpg', category: 'extra', program: 'Entrevista #6', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: '-Y4IIBcUAgw', category: 'extra', program: 'Entrevista #7', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: '0o2PbYKf7-w', category: 'extra', program: 'Entrevista #8', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'vlsvfLUf3Kc', category: 'extra', program: 'Entrevista #9', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: '0R04eFsZB1E', category: 'extra', program: 'Entrevista #10', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'pkaQjUQ76ek', category: 'extra', program: 'Entrevista #11', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'apbf0GPUc5M', category: 'extra', program: 'Entrevista #12', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: '3xCkUTFojjc', category: 'extra', program: 'Entrevista #13', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'ROqS1ZY63x0', category: 'extra', program: 'Entrevista #14', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'cMMAi738ymM', category: 'extra', program: 'Entrevista #15', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' },
    { id: 'cph-q9j_Pyo', category: 'extra', program: 'Entrevista #16', title: 'Entrevista en Lo Estoy Haciendo Bien', role: 'Cargando título desde YouTube...' }
  ];

  /* ========================================================================
     2. Utilidades DOM & Navegación Móvil / Scroll Spy
     ======================================================================== */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav item while scrolling
  const observedSections = Array.from(document.querySelectorAll('[data-observe]'));
  if ('IntersectionObserver' in window && observedSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-observe');
            navLinks.forEach((lnk) => {
              lnk.classList.toggle('active', lnk.getAttribute('data-section') === id);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    observedSections.forEach((sec) => observer.observe(sec));
  }

  /* ========================================================================
     3. Estado En Vivo & Cuenta Regresiva (Miércoles 17:00 a 18:30 Hora Arg)
     ======================================================================== */
  function updateBroadcastClock() {
    const nowUtcMs = Date.now();
    // Argentina UTC-3 (sin horario de verano)
    const ARG_OFFSET_MS = -3 * 60 * 60 * 1000;
    const argDate = new Date(nowUtcMs + ARG_OFFSET_MS);

    const day = argDate.getUTCDay(); // 0=Dom ... 3=Mié
    const hour = argDate.getUTCHours();
    const min = argDate.getUTCMinutes();
    const sec = argDate.getUTCSeconds();
    const minsOfDay = hour * 60 + min;

    const isLive = day === 3 && minsOfDay >= 17 * 60 && minsOfDay < 18 * 60 + 30;

    const headerBadge = document.getElementById('header-live-badge');
    const headerText = document.getElementById('header-live-text');
    const heroPill = document.getElementById('live-status-pill');
    const cdDot = document.getElementById('countdown-dot');
    const cdLabel = document.getElementById('countdown-label');

    const elDays = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMins = document.getElementById('cd-mins');
    const elSecs = document.getElementById('cd-secs');

    if (isLive) {
      if (headerBadge) headerBadge.classList.add('is-live');
      if (headerText) headerText.textContent = '¡AL AIRE AHORA! • MIÉ 17:00 - 18:30 HS';
      if (heroPill) heroPill.classList.add('is-live');
      if (cdDot) cdDot.classList.add('is-live');
      if (cdLabel) cdLabel.textContent = '🔴 ¡ESTAMOS EN VIVO POR YOUTUBE! Tiempo restante de programa:';

      const endMinutes = 18 * 60 + 30;
      const totalLeftSecs = Math.max(0, (endMinutes - minsOfDay) * 60 - sec);
      const h = Math.floor(totalLeftSecs / 3600);
      const m = Math.floor((totalLeftSecs % 3600) / 60);
      const s = totalLeftSecs % 60;

      if (elDays) elDays.textContent = '00';
      if (elHours) elHours.textContent = String(h).padStart(2, '0');
      if (elMins) elMins.textContent = String(m).padStart(2, '0');
      if (elSecs) elSecs.textContent = String(s).padStart(2, '0');
      return;
    }

    if (headerBadge) headerBadge.classList.remove('is-live');
    if (headerText) headerText.textContent = 'EN VIVO • MIÉ 17:00 - 18:30 HS';
    if (heroPill) heroPill.classList.remove('is-live');
    if (cdDot) cdDot.classList.remove('is-live');
    if (cdLabel) cdLabel.textContent = 'Próxima transmisión en vivo (Miércoles 17:00 hs AR)';

    // Calcular próximo miércoles 17:00:00 (Hora Argentina)
    let daysUntilWed = (3 - day + 7) % 7;
    if (daysUntilWed === 0 && minsOfDay >= 18 * 60 + 30) {
      daysUntilWed = 7;
    }

    const targetArg = new Date(
      Date.UTC(
        argDate.getUTCFullYear(),
        argDate.getUTCMonth(),
        argDate.getUTCDate() + daysUntilWed,
        17,
        0,
        0
      )
    );

    const diffSecs = Math.max(0, Math.floor((targetArg.getTime() - argDate.getTime()) / 1000));
    const d = Math.floor(diffSecs / 86400);
    const h = Math.floor((diffSecs % 86400) / 3600);
    const m = Math.floor((diffSecs % 3600) / 60);
    const s = diffSecs % 60;

    if (elDays) elDays.textContent = String(d).padStart(2, '0');
    if (elHours) elHours.textContent = String(h).padStart(2, '0');
    if (elMins) elMins.textContent = String(m).padStart(2, '0');
    if (elSecs) elSecs.textContent = String(s).padStart(2, '0');
  }

  updateBroadcastClock();
  setInterval(updateBroadcastClock, 1000);

  /* ========================================================================
     4. Acordeones de Equipo & Preguntas Frecuentes
     ======================================================================== */
  document.querySelectorAll('.accordion-trigger-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-toggle-target');
      const content = document.getElementById(targetId);
      if (!content) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      content.hidden = expanded;

      const labelSpan = btn.querySelector('span');
      if (labelSpan) {
        labelSpan.textContent = expanded ? 'Ver detalle completo' : 'Ocultar detalle';
      }
    });
  });

  function setFaqOpen(faqItem, open) {
    const btn = faqItem.querySelector('.faq-question');
    const ans = faqItem.querySelector('.faq-answer');
    if (!btn || !ans) return;
    faqItem.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
    ans.hidden = !open;
  }

  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isCurrentlyOpen = btn.getAttribute('aria-expanded') === 'true';
      setFaqOpen(item, !isCurrentlyOpen);
    });
  });

  document.querySelectorAll('.faq-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const targetId = chip.getAttribute('data-faq-jump');
      const targetItem = document.getElementById(targetId);
      if (!targetItem) return;
      setFaqOpen(targetItem, true);
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  /* ========================================================================
     5. Galería de Entrevistas + Búsqueda + Modal YouTube + Títulos Noembed
     ======================================================================== */
  const interviewsGrid = document.getElementById('interviews-grid');
  const interviewsEmpty = document.getElementById('interviews-empty');
  const interviewsShowing = document.getElementById('interviews-showing');
  const searchInput = document.getElementById('interview-search');
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const resetSearchBtn = document.getElementById('reset-search-btn');

  const modal = document.getElementById('video-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-video-title');
  const modalBadge = document.getElementById('modal-video-badge');
  const modalYtLink = document.getElementById('modal-yt-link');

  let activeFilter = 'all';
  let searchQuery = '';

  function openVideoModal(item) {
    if (!modal || !modalIframe) return;
    modalBadge.textContent = item.program;
    modalTitle.textContent = item.title;
    modalIframe.src = `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`;
    modalYtLink.href = `https://www.youtube.com/watch?v=${item.id}`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!modal || !modalIframe) return;
    modalIframe.src = '';
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeVideoModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeVideoModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closeVideoModal();
    }
  });

  function createInterviewCard(item) {
    const card = document.createElement('article');
    card.className = 'interview-card glass-card';
    card.dataset.videoId = item.id;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Reproducir ${item.title}`);

    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'interview-thumb';

    const img = document.createElement('img');
    img.src = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;
    img.alt = item.title;
    img.loading = 'lazy';

    const badge = document.createElement('span');
    badge.className = 'interview-badge';
    badge.textContent = item.program;

    const overlay = document.createElement('div');
    overlay.className = 'play-overlay';
    overlay.innerHTML = `
      <span class="play-circle" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
    `;

    thumbWrap.append(img, badge, overlay);

    const body = document.createElement('div');
    body.className = 'interview-body';

    const titleEl = document.createElement('h3');
    titleEl.className = 'interview-title';
    titleEl.textContent = item.title;

    const roleEl = document.createElement('p');
    roleEl.className = 'interview-role';
    roleEl.textContent = item.role;

    const actions = document.createElement('div');
    actions.className = 'interview-actions';
    actions.innerHTML = '<span>▶ Reproducir aquí</span><span>YouTube</span>';

    body.append(titleEl, roleEl, actions);
    card.append(thumbWrap, body);

    const handleOpen = () => openVideoModal(item);
    card.addEventListener('click', handleOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });

    return card;
  }

  function renderInterviews() {
    if (!interviewsGrid) return;
    const q = searchQuery.trim().toLowerCase();

    const filtered = INTERVIEWS.filter((item) => {
      const matchesCat = activeFilter === 'all' || item.category === activeFilter;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.program.toLowerCase().includes(q)
      );
    });

    interviewsGrid.innerHTML = '';
    filtered.forEach((item) => {
      interviewsGrid.appendChild(createInterviewCard(item));
    });

    if (interviewsShowing) {
      interviewsShowing.textContent = `Mostrando ${filtered.length} de ${INTERVIEWS.length} entrevistas`;
    }
    if (interviewsEmpty) {
      interviewsEmpty.hidden = filtered.length > 0;
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-filter') || 'all';
      filterButtons.forEach((b) => b.classList.toggle('active', b === btn));
      renderInterviews();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderInterviews();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      activeFilter = 'all';
      if (searchInput) searchInput.value = '';
      filterButtons.forEach((b) => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
      renderInterviews();
    });
  }

  // Cargar títulos reales de los 16 videos adicionales vía noembed.com
  async function hydrateExtraInterviewTitles() {
    const extras = INTERVIEWS.filter((item) => item.category === 'extra');
    await Promise.allSettled(
      extras.map(async (item) => {
        try {
          const url = `https://noembed.com/embed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${item.id}`)}`;
          const res = await fetch(url);
          if (!res.ok) throw new Error('noembed error');
          const data = await res.json();
          if (data && data.title) {
            item.title = data.title;
            item.role = data.author_name ? `Canal: ${data.author_name}` : 'Entrevista en YouTube';
          } else {
            item.role = 'Disponible en YouTube (@gonzapasquetok)';
          }
        } catch {
          item.role = 'Disponible en YouTube (@gonzapasquetok)';
        }

        const renderedCard = interviewsGrid?.querySelector(`[data-video-id="${item.id}"]`);
        if (renderedCard) {
          const t = renderedCard.querySelector('.interview-title');
          const r = renderedCard.querySelector('.interview-role');
          if (t) t.textContent = item.title;
          if (r) r.textContent = item.role;
          renderedCard.setAttribute('aria-label', `Reproducir ${item.title}`);
        }
      })
    );
  }

  renderInterviews();
  hydrateExtraInterviewTitles();

  /* ========================================================================
     6. Formulario Rápido de Publicidad / Canje (WhatsApp & Email)
     ======================================================================== */
  const brandInput = document.getElementById('sponsor-brand');
  const igInput = document.getElementById('sponsor-ig');
  const descInput = document.getElementById('sponsor-desc');
  const sendWaBtn = document.getElementById('send-wa-btn');
  const sendEmailBtn = document.getElementById('send-email-btn');

  function buildSponsorMessage() {
    const brand = (brandInput?.value || '').trim();
    const ig = (igInput?.value || '').trim();
    const desc = (descInput?.value || '').trim();

    if (!brand || !desc) {
      return null;
    }

    const lines = [
      'Hola Gonza y Vero! Quiero consultar por publicidad / canje en Lo Estoy Haciendo Bien.',
      `• Marca / Emprendimiento: ${brand}`,
      ig ? `• Instagram / Web: ${ig}` : null,
      `• Propuesta: ${desc}`
    ].filter(Boolean);

    return lines.join('\n');
  }

  if (sendWaBtn) {
    sendWaBtn.addEventListener('click', () => {
      const msg = buildSponsorMessage();
      if (!msg) {
        brandInput?.reportValidity();
        descInput?.reportValidity();
        return;
      }
      const url = `https://wa.me/5493424211858?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', () => {
      const msg = buildSponsorMessage();
      if (!msg) {
        brandInput?.reportValidity();
        descInput?.reportValidity();
        return;
      }
      const brand = brandInput.value.trim();
      const subject = `Publicidad / Canje - ${brand}`;
      window.location.href = `mailto:pasquetgonza@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
    });
  }
})();
