/**
 * Australian Doctors Business Academy (ADBA)
 * Vietnam International Study Tour 2026 — Interactive Logic & Bilingual i18n
 */

let currentLang = localStorage.getItem('adba_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initCountdown();
  initStickyHeader();
  initMobileMenu();
  initAgendaTabs();
  initSpeakers();
  initFaqAccordion();
  initModalAndForms();
  initSpeakerModal();
  initBackToTop();
});

/* ==========================================================================
   1. BILINGUAL i18n SYSTEM
   ========================================================================== */
function initI18n() {
  // Apply initial language from localStorage or default 'en'
  applyLanguage(currentLang);

  // Bind language switcher buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget || e.target.closest('.lang-btn') || btn;
      const selectedLang = targetBtn.dataset.lang;
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem('adba_lang', currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  // Update switcher buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const dict = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.getAttribute('data-i18n-html') === 'true' || dict[key].includes('<') || dict[key].includes('&')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update input placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-render dynamic modules
  renderSpeakers(currentLang);
  renderAgendaTabs(currentLang);
  renderAgenda(currentLang);
}

/* ==========================================================================
   2. COUNTDOWN TIMER (Target: 29 November 2026 14:00:00 ICT)
   ========================================================================== */
function initCountdown() {
  const targetDate = new Date('2026-11-29T14:00:00+07:00').getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. STICKY HEADER & MOBILE MENU
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide header on scroll down, show on scroll up
    const mobileNav = document.querySelector('.nav-links');
    const isMobileNavOpen = mobileNav && mobileNav.classList.contains('active');

    if (!isMobileNavOpen && currentScrollY > 120 && currentScrollY > lastScrollY) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
  }, { passive: true });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  const header = document.querySelector('.site-header');
  if (!btn || !nav) return;

  function closeMenu() {
    btn.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMenu() {
    btn.classList.add('active');
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (header) header.classList.remove('header-hidden');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape or click outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   4. SPEAKERS MODULE (16 Official Leaders, Full-Bleed Placeholder, Modal Bio)
   ========================================================================== */
function initSpeakers() {
  renderSpeakers(currentLang);
}

function renderSpeakers(lang) {
  const container = document.getElementById('speakers-dynamic-grid');
  if (!container || typeof SPEAKERS_DATA === 'undefined') return;

  const isVi = lang === 'vi';
  container.innerHTML = '';

  SPEAKERS_DATA.forEach(speaker => {
    const card = document.createElement('div');
    card.className = 'speaker-card';
    card.setAttribute('data-id', speaker.id);

    const photoSrc = speaker.photo ? speaker.photo : 'assets/images/speakers/placeholder.svg';
    const catTag = isVi ? (speaker.categoryLabelVi || speaker.categoryLabelEn) : speaker.categoryLabelEn;
    const role = isVi ? (speaker.roleVi || speaker.roleEn) : speaker.roleEn;
    const org = isVi ? (speaker.orgVi || speaker.orgEn) : speaker.orgEn;
    const badges = isVi ? (speaker.badgesVi || speaker.badges || []) : (speaker.badges || []);

    const badgesHtml = badges.map(b => `<span class="speaker-pill speaker-pill-blue">${b}</span>`).join('');
    const viewText = isVi ? "Xem hồ sơ" : "View Profile";

    card.innerHTML = `
      <div class="speaker-square-frame">
        <img src="${photoSrc}" alt="${speaker.name}" class="speaker-avatar-img" loading="lazy" onerror="this.onerror=null;this.src='assets/images/speakers/placeholder.svg';">
        <div class="speaker-hover-overlay">
          <span class="btn-outline" style="background:#ffffff; font-size:0.75rem; padding:6px 14px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">${viewText}</span>
        </div>
      </div>
      <div class="speaker-card-info">
        <span class="speaker-cat-tag">${catTag}</span>
        <h3 class="speaker-card-name">${speaker.name}</h3>
        <p class="speaker-card-role">${role}</p>
        <p class="speaker-card-org">${org}</p>
        ${badgesHtml ? `<div class="speaker-badges-row">${badgesHtml}</div>` : ''}
      </div>
    `;

    card.addEventListener('click', () => {
      openSpeakerDetailsModal(speaker, lang);
    });

    container.appendChild(card);
  });
}

function openSpeakerDetailsModal(speaker, lang) {
  const modal = document.getElementById('speaker-modal');
  if (!modal) return;

  const isVi = lang === 'vi';
  const avatarBox = document.getElementById('speaker-modal-avatar-box');
  const catEl = document.getElementById('speaker-modal-cat');
  const nameEl = document.getElementById('speaker-modal-name');
  const roleEl = document.getElementById('speaker-modal-role');
  const orgEl = document.getElementById('speaker-modal-org');
  const badgesBox = document.getElementById('speaker-modal-badges');
  const sessionEl = document.getElementById('speaker-modal-session');
  const bioEl = document.getElementById('speaker-modal-bio');

  if (avatarBox) {
    const photoSrc = speaker.photo ? speaker.photo : 'assets/images/speakers/placeholder.svg';
    avatarBox.innerHTML = `<img src="${photoSrc}" alt="${speaker.name}" style="width:100%; height:100%; object-fit:cover; object-position:top center;">`;
  }

  if (catEl) catEl.textContent = isVi ? (speaker.categoryLabelVi || speaker.categoryLabelEn) : speaker.categoryLabelEn;
  if (nameEl) nameEl.textContent = speaker.name;
  if (roleEl) roleEl.textContent = isVi ? (speaker.roleVi || speaker.roleEn) : speaker.roleEn;
  if (orgEl) orgEl.textContent = isVi ? (speaker.orgVi || speaker.orgEn) : speaker.orgEn;

  if (badgesBox) {
    const badges = isVi ? (speaker.badgesVi || speaker.badges || []) : (speaker.badges || []);
    badgesBox.innerHTML = badges.map(b => `<span class="speaker-pill speaker-pill-gold">${b}</span>`).join('');
  }

  const sessionBox = document.getElementById('speaker-modal-session-box');
  const sessionText = isVi ? (speaker.sessionVi || speaker.sessionEn) : speaker.sessionEn;
  if (sessionBox) {
    if (sessionText) {
      sessionBox.style.display = 'block';
      if (sessionEl) sessionEl.textContent = sessionText;
    } else {
      sessionBox.style.display = 'none';
    }
  }

  if (bioEl) {
    const rawBio = isVi ? (speaker.bioVi || speaker.bioEn || '') : (speaker.bioEn || '');
    bioEl.innerHTML = rawBio
      .split('\n\n')
      .map(p => `<p style="margin-bottom: 12px; line-height: 1.68;">${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initSpeakerModal() {
  const speakerModal = document.getElementById('speaker-modal');
  const closeBtns = document.querySelectorAll('[data-close-speaker-modal]');

  if (!speakerModal) return;

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      speakerModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  speakerModal.addEventListener('click', (e) => {
    if (e.target === speakerModal) {
      speakerModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && speakerModal.classList.contains('open')) {
      speakerModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   5. 7-DAY INTERACTIVE AGENDA TABS & RENDERER
   ========================================================================== */
const AGENDA_DATA = [
  {
    dayNumber: 1,
    dateStringEn: "Sunday 29 November 2026",
    dateStringVi: "Chủ nhật 29 Tháng 11 2026",
    shortTitleEn: "Arrival & Welcome",
    shortTitleVi: "Đón đoàn & Khai mạc",
    venueEn: "Courtyard by Marriott Danang Han River",
    venueVi: "Courtyard by Marriott Đà Nẵng Sông Hàn",
    badgeEn: "Official Arrival & Orientation",
    badgeVi: "Đón tiếp Chính thức & Định hướng",
    sessions: [
      {
        time: "2:00 PM",
        type: "logistics",
        badgeTextEn: "Logistics",
        badgeTextVi: "Hậu cần",
        titleEn: "Group Arrivals & Airport Transfers",
        titleVi: "Đón Đoàn tại Sân bay & Nhận phòng Khách sạn",
        descEn: "Delegates arrive at Da Nang International Airport (DAD) with VIP airport greeting and seamless private transfer to Courtyard by Marriott Danang Han River. Hotel check-in and leisure time.",
        descVi: "Đoàn đại biểu hạ cánh tại Sân bay Quốc tế Đà Nẵng (DAD), đón tiếp ưu tiên VIP và di chuyển về khách sạn Courtyard by Marriott Danang Han River. Nhận phòng và nghỉ ngơi tự do."
      },
      {
        time: "6:00 PM",
        type: "reception",
        badgeTextEn: "Reception",
        badgeTextVi: "Tiệc đón tiếp",
        titleEn: "Welcome Reception",
        titleVi: "Tiệc Đón tiếp Đại biểu",
        location: "The Landmark, Marriott Courtyard",
        descEn: "Meet Australian medical faculty, Vietnamese healthcare hosts, and fellow study tour delegates over refreshments and welcome canapés.",
        descVi: "Gặp gỡ ban giảng huấn y khoa Úc, đại diện lãnh đạo ngành y tế Việt Nam và các đại biểu tham dự chương trình."
      },
      {
        time: "6:00 PM",
        type: "orientation",
        badgeTextEn: "Orientation",
        badgeTextVi: "Định hướng",
        titleEn: "Welcome & Orientation: Vietnam's Healthcare Journey — Universal Coverage and Digital Momentum",
        titleVi: "Định hướng Học thuật: Hành trình Chuyển đổi Y tế Việt Nam — Bảo hiểm Toàn dân & Đột phá Số hóa",
        descEn: "Introduction to Vietnamese healthcare leaders and Australian faculty. In-depth briefing on the week's learning objectives, expectations, and AMA CPD accreditation guidelines across EA, RP, and MO domains.",
        descVi: "Giới thiệu các chuyên gia y tế Việt Nam và ban giảng huấn Úc. Phổ biến chi tiết mục tiêu học tập, yêu cầu chuyên môn và hướng dẫn tích lũy 15 giờ tín chỉ AMA CPD Home (EA, RP, MO)."
      },
      {
        time: "6:30 PM",
        type: "keynote",
        badgeTextEn: "Opening Keynote",
        badgeTextVi: "Khóa chính Khai mạc",
        titleEn: "Opening Keynote: Vietnam's Universal Health Journey — Laying Digital Foundations for Equitable Care",
        titleVi: "Báo cáo Khai mạc: Hành trình Y tế Toàn dân tại Việt Nam — Đặt Nền tảng Số hóa cho Tiếp cận Y tế Công bằng",
        descEn: "National health reform roadmap, social health insurance expansion, and macro digital health directives across primary and tertiary healthcare tiers.",
        descVi: "Chiến lược cải cách y tế quốc gia, lộ trình mở rộng bảo hiểm y tế toàn dân và định hướng chuyển đổi số y tế từ cơ sở đến tuyến trung ương."
      },
      {
        time: "7:00 PM",
        type: "dining",
        badgeTextEn: "Welcome Dinner",
        badgeTextVi: "Tiệc tối Chào mừng",
        titleEn: "Welcome Dinner at The Landmark",
        titleVi: "Tiệc tối Chào mừng tại The Landmark",
        location: "The Landmark, Marriott Courtyard, Danang",
        descEn: "Vietnamese-fusion welcome dinner providing an informal setting to establish peer relationships for the week.",
        descVi: "Thưởng thức ẩm thực giao thoa Việt Nam trong không gian ấm cúng, kết nối giao lưu giữa các đại biểu."
      }
    ]
  },
  {
    dayNumber: 2,
    dateStringEn: "Monday 30 November 2026",
    dateStringVi: "Thứ hai 30 Tháng 11 2026",
    shortTitleEn: "Hospital Frontlines",
    shortTitleVi: "Tuyến đầu Bệnh viện",
    venueEn: "The East Room & Public Tertiary Hospital",
    venueVi: "The East Room & Bệnh viện Đa khoa Tuyến cuối",
    badgeEn: "CPD Intensive #1 & Clinical Site Tour",
    badgeVi: "Tập huấn CPD #1 & Khảo sát Lâm sàng",
    sessions: [
      {
        time: "9:00 AM",
        type: "keynote",
        badgeTextEn: "Session 1",
        badgeTextVi: "Phiên 1",
        titleEn: "Keynote Session 1: Universal Health Coverage on the Front Lines — Lessons from Public Tertiary Hospital Transformation",
        titleVi: "Khóa chính 1: Bảo hiểm Y tế Toàn dân Tuyến đầu — Bài học từ Hành trình Đổi mới Bệnh viện Tuyến cuối",
        descEn: "Operational realities of managing high-volume acute inpatient flow under universal health insurance.",
        descVi: "Thực tiễn điều hành luồng bệnh nhân cấp cứu và điều trị nội trú quy mô lớn dưới chính sách BHYT toàn dân."
      },
      {
        time: "10:00 AM",
        type: "break",
        badgeTextEn: "Networking Break",
        badgeTextVi: "Nghỉ giải lao",
        titleEn: "Morning Tea & Networking Break",
        titleVi: "Tiệc trà Sáng & Giao lưu",
        descEn: "Refreshments at the Foyer Ballroom, Marriott Courtyard.",
        descVi: "Tiệc trà và kết nối tại Foyer Ballroom, khách sạn Marriott Courtyard."
      },
      {
        time: "10:30 AM",
        type: "keynote",
        badgeTextEn: "Session 2",
        badgeTextVi: "Phiên 2",
        titleEn: "Keynote Session 2: Financing Universal Health — Building Sustainable Models for Equitable Access in Vietnam",
        titleVi: "Khóa chính 2: Tài chính Y tế Toàn dân — Xây dựng Mô hình Bền vững cho Tiếp cận Công bằng tại Việt Nam",
        descEn: "Sustainable financing architectures, social health insurance solvency, and public hospital financial autonomy.",
        descVi: "Cơ cấu tài chính bền vững, quỹ bảo hiểm y tế và cơ chế tự chủ tài chính tại các bệnh viện công lập."
      },
      {
        time: "11:15 AM",
        type: "panel",
        badgeTextEn: "Panel Discussion",
        badgeTextVi: "Tọa đàm",
        titleEn: "Panel Discussion & Interactive Q&A: Public Hospital Triage and Funding Realities",
        titleVi: "Tọa đàm Đối thoại: Phân luồng Bệnh viện Công & Thực tiễn Nguồn vốn",
        descEn: "Structured discussion with Dr. Le Duc Nhan and Dr. Nguyen Truong Son comparing emergency department triage, clinical governance, and funding challenges between Australian public health and Vietnamese tertiary hospitals.",
        descVi: "Tọa đàm chuyên sâu cùng TS. Lê Đức Nhân và PGS. Nguyễn Trường Sơn, so sánh phân luồng cấp cứu, quản trị lâm sàng giữa hệ thống y tế công lập Úc và Việt Nam."
      },
      {
        time: "12:00 PM",
        type: "dining",
        badgeTextEn: "Lunch",
        badgeTextVi: "Ăn trưa",
        titleEn: "Lunch & Networking Break at The Landmark",
        titleVi: "Ăn trưa & Giao lưu tại The Landmark",
        descEn: "Buffet lunch and peer discussions.",
        descVi: "Tiệc trưa buffet và thảo luận nhóm."
      },
      {
        time: "1:00 PM",
        type: "transfer",
        badgeTextEn: "Transfer",
        badgeTextVi: "Di chuyển",
        titleEn: "Transfer to Public Tertiary Hospital",
        titleVi: "Di chuyển tới Bệnh viện Đa khoa Tuyến cuối",
        descEn: "Air-conditioned executive coach transfer.",
        descVi: "Di chuyển bằng xe du lịch cao cấp."
      },
      {
        time: "2:00 PM",
        type: "site-visit",
        badgeTextEn: "Site Visit",
        badgeTextVi: "Khảo sát thực tế",
        titleEn: "Guided Hospital Clinical Tour & Behind-the-Scenes Inspection",
        titleVi: "Khảo sát Lâm sàng Thực tế & Tham quan Bệnh viện Tuyến cuối",
        descEn: "Comprehensive walk-through of emergency resuscitation, ICU, inpatient ward management, and high-throughput diagnostic imaging.",
        descVi: "Khảo sát trực tiếp khu vực hồi sức cấp cứu, khoa ICU, quy trình điều trị nội trú và trung tâm chẩn đoán hình ảnh kỹ thuật cao."
      },
      {
        time: "7:00 PM",
        type: "dining",
        badgeTextEn: "Summit Dinner",
        badgeTextVi: "Tiệc tối Summit",
        titleEn: "Dinner & Featured Keynote: Danang's Vision for Smart & Healthy City",
        titleVi: "Tiệc tối & Bài nói Đặc biệt: Tầm nhìn Đô thị Y tế Thông minh Đà Nẵng",
        location: "The Summit Room, Marriott Courtyard",
        descEn: "Official address on Danang's strategic transition into an international innovation, smart city, and premier medical wellness tourism hub.",
        descVi: "Bài phát biểu chính thức về định hướng đưa Đà Nẵng thành đô thị thông minh, đổi mới sáng tạo và trung tâm du lịch chăm sóc sức khỏe quốc tế."
      }
    ]
  },
  {
    dayNumber: 3,
    dateStringEn: "Tuesday 1 December 2026",
    dateStringVi: "Thứ ba 1 Tháng 12 2026",
    shortTitleEn: "Digital Health & Tech",
    shortTitleVi: "Y tế Số & Công nghệ",
    venueEn: "The East Room & Danang City Excursion",
    venueVi: "The East Room & Khám phá Đà Nẵng",
    badgeEn: "CPD Intensive #2 & Cultural Immersion",
    badgeVi: "Tập huấn CPD #2 & Trải nghiệm Văn hóa",
    sessions: [
      {
        time: "9:00 AM",
        type: "keynote",
        badgeTextEn: "Session 3",
        badgeTextVi: "Phiên 3",
        titleEn: "Keynote Session 3: Bridging the Gap — How Digital Health and Telemedicine are Transforming Tertiary Patient Care",
        titleVi: "Khóa chính 3: Rút ngắn Khoảng cách — Y tế Số & Telemedicine Chuyển đổi Điều trị tại Bệnh viện Tuyến cuối",
        descEn: "Examining digital hospital operations, patient-facing apps, electronic health records, and remote specialist consults.",
        descVi: "Tìm hiểu quy trình vận hành bệnh viện số, ứng dụng sức khỏe cho người bệnh, bệnh án điện tử và hội chẩn chuyên gia từ xa."
      },
      {
        time: "10:30 AM",
        type: "keynote",
        badgeTextEn: "Session 4",
        badgeTextVi: "Phiên 4",
        titleEn: "Keynote Session 4: Beyond Boundaries — Public-Private Collaboration and Digital Innovation in Vietnam's Health Sector",
        titleVi: "Khóa chính 4: Vượt qua Ranh giới — Hợp tác Công - Tư & Đổi mới Số hóa trong Ngành Y tế Việt Nam",
        descEn: "Cross-sector integrations, cloud medical platforms, AI imaging tools, and telemedicine links between private hospital networks and public community clinics.",
        descVi: "Tích hợp nền tảng đám mây y tế, ứng dụng AI trong chẩn đoán hình ảnh và mạng lưới telemedicine kết nối bệnh viện tư nhân với y tế cơ sở."
      },
      {
        time: "11:15 AM",
        type: "panel",
        badgeTextEn: "Panel Discussion",
        badgeTextVi: "Tọa đàm",
        titleEn: "Panel Discussion & Q&A: Digital Health Interoperability and Clinical Adoption",
        titleVi: "Tọa đàm: Khả năng Tương thích Y tế Số & Ứng dụng Thực hành Lâm sàng",
        descEn: "Bilateral panel dissecting technology implementation hurdles, electronic health record interoperability, patient cybersecurity, and clinical staff adoption.",
        descVi: "Đối thoại chuyên sâu về các rào cản triển khai công nghệ số, bảo mật dữ liệu y tế và đào tạo đội ngũ y bác sĩ thích ứng với kỷ nguyên số."
      },
      {
        time: "2:00 PM",
        type: "excursion",
        badgeTextEn: "Excursion",
        badgeTextVi: "Tham quan",
        titleEn: "Half-Day Danang Cultural Tour: Han Market & Marble Mountain",
        titleVi: "Tham quan Văn hóa Đà Nẵng: Chợ Hàn & Danh thắng Ngũ Hành Sơn",
        descEn: "Experience vibrant local daily life at historic Han Market followed by an excursion to Marble Mountain (Ngu Hanh Son).",
        descVi: "Trải nghiệm đời sống địa phương tại Chợ Hàn truyền thống và khám phá vẻ đẹp danh thắng Ngũ Hành Sơn."
      },
      {
        time: "6:00 PM",
        type: "dining",
        badgeTextEn: "Seafood Dinner",
        badgeTextVi: "Tiệc hải sản",
        titleEn: "Seafood Feast at My Hanh Seafood Restaurant",
        titleVi: "Tiệc Hải sản tại Nhà hàng Mỹ Hạnh",
        location: "My Khe Beachfront, Danang",
        descEn: "Beachfront dining featuring fresh coastal seafood overlooking My Khe Beach.",
        descVi: "Thưởng thức hải sản tươi ngon ngay bên bờ biển Mỹ Khê tuyệt đẹp."
      }
    ]
  },
  {
    dayNumber: 4,
    dateStringEn: "Wednesday 2 December 2026",
    dateStringVi: "Thứ tư 2 Tháng 12 2026",
    shortTitleEn: "UNESCO Hoi An Immersion",
    shortTitleVi: "Khám phá Hội An UNESCO",
    venueEn: "Hoi An Ancient Town & Thu Bon River",
    venueVi: "Phố cổ Hội An & Dòng sông Thu Bồn",
    badgeEn: "Full Day Cultural Immersion & Wellness",
    badgeVi: "Trọn ngày Văn hóa & Chăm sóc Sức khỏe",
    sessions: [
      {
        time: "9:00 AM",
        type: "excursion",
        badgeTextEn: "Eco-Tour",
        badgeTextVi: "Du lịch sinh thái",
        titleEn: "Cam Thanh Coconut Forest Basket Boat Adventure",
        titleVi: "Trải nghiệm Thuyền thúng Rừng dừa Bảy Mẫu Cẩm Thanh",
        descEn: "Traditional round bamboo basket boat navigation through tranquil water coconut groves, guided by local villagers.",
        descVi: "Khám phá rừng dừa nước bạt ngàn bằng thuyền thúng truyền thống dưới sự hướng dẫn của người dân bản xứ."
      },
      {
        time: "11:45 AM",
        type: "wellness",
        badgeTextEn: "Wellness",
        badgeTextVi: "Chăm sóc sức khỏe",
        titleEn: "Traditional Vietnamese Herbal Foot Reflexology & Relaxation",
        titleVi: "Ngâm chân Thảo dược Truyền thống & Thư giãn",
        descEn: "Restorative herbal foot bath and reflexology treatment incorporating native medicinal herbs.",
        descVi: "Trải nghiệm ngâm chân thảo dược trị liệu cổ truyền giúp phục hồi thể chất và tinh thần."
      },
      {
        time: "12:30 PM",
        type: "dining",
        badgeTextEn: "Lunch",
        badgeTextVi: "Ăn trưa",
        titleEn: "Artisanal Vietnamese Lunch at Reu Restaurant, Hoi An",
        titleVi: "Thưởng thức Ẩm thực tại Nhà hàng Rêu Hội An",
        descEn: "Curated farm-to-table lunch highlighting organic regional ingredients.",
        descVi: "Bữa trưa ẩm thực hữu cơ tinh túy theo phong vị miền Trung."
      },
      {
        time: "3:30 PM",
        type: "excursion",
        badgeTextEn: "Walking Tour",
        badgeTextVi: "Đi bộ di sản",
        titleEn: "Guided Heritage Walking Tour of UNESCO Hoi An Ancient Town",
        titleVi: "Tản bộ Khám phá Di sản Thế giới Phố cổ Hội An",
        descEn: "Exclusive private walking tour exploring the Japanese Covered Bridge, Cantonese Assembly Hall, and historic merchant trading houses.",
        descVi: "Tham quan Chùa Cầu, Hội quán Quảng Đông và những ngôi nhà cổ hàng trăm năm tuổi."
      },
      {
        time: "6:15 PM",
        type: "excursion",
        badgeTextEn: "River Cruise",
        badgeTextVi: "Du thuyền sông",
        titleEn: "Sunset Wooden Boat Cruise on Thu Bon River & Lantern Release Ceremony",
        titleVi: "Du thuyền Hoàng hôn trên Sông Thu Bồn & Thả hoa đăng",
        descEn: "Cruise along the lantern-lit waters of the Thu Bon River, participating in the traditional paper lantern blessing ritual.",
        descVi: "Ngắm hoàng hôn lung linh trên dòng sông Hoài và thả đèn hoa đăng cầu an."
      },
      {
        time: "7:00 PM",
        type: "dining",
        badgeTextEn: "Heritage Dinner",
        badgeTextVi: "Tiệc tối Di sản",
        titleEn: "Dinner at Vy Market (Morning Glory Signature, 3rd Floor)",
        titleVi: "Tiệc tối tại Vy Market (Morning Glory Signature)",
        descEn: "Exquisite culinary showcase curated by Ms. Vy, celebrated master chef of authentic Hoi An gastronomy.",
        descVi: "Thưởng thức các món ăn đặc sắc nổi tiếng của Hội An trong không gian sang trọng."
      }
    ]
  },
  {
    dayNumber: 5,
    dateStringEn: "Thursday 3 December 2026",
    dateStringVi: "Thứ năm 3 Tháng 12 2026",
    shortTitleEn: "Primary Care & InterCon",
    shortTitleVi: "Y tế Cơ sở & InterContinental",
    venueEn: "The East Room & InterContinental Son Tra",
    venueVi: "The East Room & InterContinental Sơn Trà",
    badgeEn: "CPD Intensive #3 & Executive Gala",
    badgeVi: "Tập huấn CPD #3 & Gala Executive",
    sessions: [
      {
        time: "9:00 AM",
        type: "keynote",
        badgeTextEn: "Session 5",
        badgeTextVi: "Phiên 5",
        titleEn: "Keynote Session 5: Integrating Public and Private Care — Building Sustainable Primary Health Models in Vietnam",
        titleVi: "Khóa chính 5: Kết hợp Y tế Công - Tư: Xây dựng Mô hình Y tế Cơ sở Bền vững tại Việt Nam",
        descEn: "Thirty years of lessons developing private international primary care, ambulance dispatch networks, and preventative wellness.",
        descVi: "Ba thập kỷ kinh nghiệm xây dựng hệ thống phòng khám đa khoa quốc tế, mạng lưới điều phối cấp cứu và chăm sóc sức khỏe dự phòng."
      },
      {
        time: "10:30 AM",
        type: "keynote",
        badgeTextEn: "Session 6",
        badgeTextVi: "Phiên 6",
        titleEn: "Keynote Session 6: Scaling Quality Care — Private Sector Innovations and Community Impact at Pasteur General Clinic",
        titleVi: "Khóa chính 6: Mở rộng Chăm sóc Chất lượng: Đổi mới Khu vực Tư nhân tại Phòng khám Pasteur",
        descEn: "Private clinical entrepreneurship, diagnostic lab automation, patient-centered care, and sustainable outpatient billing.",
        descVi: "Khởi nghiệp kinh doanh y khoa, tự động hóa xét nghiệm chẩn đoán, lấy người bệnh làm trung tâm và tính bền vững phòng khám tư."
      },
      {
        time: "11:15 AM",
        type: "panel",
        badgeTextEn: "Panel Discussion",
        badgeTextVi: "Tọa đàm",
        titleEn: "Panel Discussion: Primary Care Practice Models — Australia vs. Vietnam",
        titleVi: "Tọa đàm: Mô hình Quản trị Phòng khám Đa khoa — So sánh Úc & Việt Nam",
        descEn: "Comparing private billing vs. bulk billing, Medicare compliance, corporate healthcare consolidations, and GP business profitability.",
        descVi: "So sánh cơ chế thu phí phòng khám, quản lý rủi ro pháp lý, xu hướng hợp nhất doanh nghiệp y tế và tối ưu hiệu quả phòng khám bác sĩ gia đình."
      },
      {
        time: "6:00 PM",
        type: "reception",
        badgeTextEn: "VIP Reception",
        badgeTextVi: "Tiệc đón tiếp VIP",
        titleEn: "Sunset Welcome Drinks & Diplomatic Reception",
        titleVi: "Tiệc Rượu Hoàng hôn & Giao lưu Ngoại giao",
        location: "Terra Mare, InterContinental Danang Sun Peninsula Resort",
        descEn: "Exclusive cocktail reception hosted at the Bill Bensley-designed InterContinental Resort on the Son Tra Peninsula.",
        descVi: "Tiệc cocktail đón hoàng hôn tuyệt đẹp tại khu nghỉ dưỡng siêu sang InterContinental Bán đảo Sơn Trà."
      },
      {
        time: "7:00 PM",
        type: "dining",
        badgeTextEn: "Gala Dinner",
        badgeTextVi: "Gala Dinner",
        titleEn: "Executive Study Tour Gala Dinner",
        titleVi: "Gala Dinner Phái đoàn Y khoa Quốc tế",
        location: "Terra Mare Restaurant, InterContinental Resort",
        descEn: "Black-tie executive gala celebration welcoming bilateral leaders and Australian diplomatic corps representatives.",
        descVi: "Đêm tiệc trang trọng kỷ niệm chuyến khảo sát với sự tham dự của các đại diện ngoại giao và đối tác chiến lược."
      }
    ]
  },
  {
    dayNumber: 6,
    dateStringEn: "Friday 4 December 2026",
    dateStringVi: "Thứ sáu 4 Tháng 12 2026",
    shortTitleEn: "Hospital Site Visit & Ba Na Hills",
    shortTitleVi: "Khảo sát Bệnh viện & Bà Nà",
    venueEn: "Accredited Medical Center & Ba Na Hills",
    venueVi: "Bệnh viện Quốc tế & Bà Nà Hills",
    badgeEn: "Hospital Tech Inspection & Capstone",
    badgeVi: "Khảo sát Công nghệ & Hội thảo Tổng kết",
    sessions: [
      {
        time: "9:00 AM",
        type: "site-visit",
        badgeTextEn: "Hospital Inspection",
        badgeTextVi: "Khảo sát Bệnh viện",
        titleEn: "Hospital Site Visit: Advanced Medical Technology & Digital Health Center",
        titleVi: "Khảo sát Thực tế: Trung tâm Y tế Kỹ thuật cao & Chuyển đổi số",
        descEn: "Behind-the-scenes walkthrough of cutting-edge robotic surgery suites, AI diagnostic suites, telemetry monitoring, and oncology treatment planning facilities.",
        descVi: "Tham quan thực tế hệ thống phẫu thuật robot, trung tâm chẩn đoán hình ảnh AI, phòng giám sát từ xa và trung tâm điều trị ung bướu kỹ thuật cao."
      },
      {
        time: "10:30 AM",
        type: "workshop",
        badgeTextEn: "Capstone Workshop",
        badgeTextVi: "Hội thảo Tổng kết",
        titleEn: "Workshop: Translating Lessons to Australian Practice — System, Business, and Clinical Takeaways",
        titleVi: "Hội thảo: Ứng dụng Bài học Thực tiễn vào Y tế Úc — Quản trị, Kinh doanh & Lâm sàng",
        descEn: "Structured peer capstone workshop facilitating action planning for Australian practice owners: applying digital workflow, clinical delegation, and business scalability models.",
        descVi: "Hội thảo tổng hợp đúc kết các bài học cốt lõi, xây dựng kế hoạch hành động cụ thể cho các chủ phòng khám y khoa tại Úc."
      },
      {
        time: "1:00 PM",
        type: "excursion",
        badgeTextEn: "Ba Na Hills",
        badgeTextVi: "Bà Nà Hills",
        titleEn: "Excursion to Sun World Ba Na Hills & Iconic Golden Bridge",
        titleVi: "Khám phá Sun World Bà Nà Hills & Cầu Vàng",
        descEn: "Ascend via world-record cable car to Ba Na Hills. Walk across the globally acclaimed Golden Bridge (Cau Vang) held by giant mossy hands, and explore the French Village.",
        descVi: "Trải nghiệm cáp treo kỷ lục thế giới lên đỉnh Bà Nà, sải bước trên Cầu Vàng nổi tiếng thế giới và khám phá Làng Pháp thơ mộng."
      },
      {
        time: "7:15 PM",
        type: "closing",
        badgeTextEn: "Closing Ceremony",
        badgeTextVi: "Lễ Bế mạc",
        titleEn: "Closing Remarks & 2027 Study Tour Announcement",
        titleVi: "Bế mạc Khóa học & Công bố Chương trình Khảo sát 2027",
        descEn: "Summary of Vietnam Study Tour key learnings, presentation of CPD certificates of completion, and preview of ADBA's 2027 international medical destination.",
        descVi: "Tổng kết kết quả học tập chuyến khảo sát, trao chứng nhận hoàn thành 15 giờ tín chỉ CPD và công bố điểm đến học thuật quốc tế năm 2027."
      }
    ]
  },
  {
    dayNumber: 7,
    dateStringEn: "Saturday 5 December 2026",
    dateStringVi: "Thứ bảy 5 Tháng 12 2026",
    shortTitleEn: "Departure & Farewells",
    shortTitleVi: "Khởi hành về nước",
    venueEn: "Courtyard by Marriott & Airport",
    venueVi: "Khách sạn Marriott & Sân bay",
    badgeEn: "Check-out & Flight Departures",
    badgeVi: "Trả phòng & Khởi hành",
    sessions: [
      {
        time: "Morning",
        type: "dining",
        badgeTextEn: "Breakfast",
        badgeTextVi: "Bữa sáng",
        titleEn: "Buffet Breakfast & Leisurely Check-out",
        titleVi: "Bữa sáng Buffet & Trả phòng Khách sạn",
        descEn: "Enjoy your final morning riverside buffet breakfast at Marriott Courtyard. Check-out assistance provided by our dedicated concierge desk.",
        descVi: "Thưởng thức bữa sáng buffet ngắm sông Hàn và chuẩn bị thủ tục trả phòng với sự hỗ trợ của đội ngũ lễ tân."
      },
      {
        time: "All Day",
        type: "transfer",
        badgeTextEn: "Airport Transfers",
        badgeTextVi: "Đưa đón Sân bay",
        titleEn: "Scheduled Group Airport Transfers & Onward Journeys",
        titleVi: "Xe Tiễn Sân bay & Tiếp tục Hành trình Nghỉ dưỡng",
        descEn: "Coordinated private airport drop-offs to Da Nang International Airport (DAD) aligned with flight departure times. For delegates joining extended post-tour travel arranged by Flight Centre, ground teams will coordinate connections.",
        descVi: "Xe riêng đưa tiễn đại biểu ra Sân bay Quốc tế Đà Nẵng theo giờ bay. Hỗ trợ kết nối chuyển tuyến cho đại biểu tham gia các tour nối dài do Flight Centre sắp xếp."
      }
    ]
  }
];

let activeAgendaDay = 1;

function initAgendaTabs() {
  renderAgendaTabs(currentLang);
}

function renderAgendaTabs(lang) {
  const tabsNav = document.getElementById('agenda-tabs-nav');
  if (!tabsNav) return;

  const isVi = lang === 'vi';
  tabsNav.innerHTML = '';
  AGENDA_DATA.forEach(day => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `agenda-tab-btn ${day.dayNumber === activeAgendaDay ? 'active' : ''}`;
    btn.setAttribute('data-day', day.dayNumber);

    const dayText = isVi ? `Ngày ${day.dayNumber}` : `Day 0${day.dayNumber}`;
    const titleText = isVi ? day.shortTitleVi : day.shortTitleEn;
    const dateText = isVi ? day.dateStringVi : day.dateStringEn;

    btn.innerHTML = `
      <div class="tab-badge-note">${dayText}</div>
      <div class="tab-title">${titleText}</div>
      <div class="tab-date" style="font-size: 0.6875rem; color: #64748b;">${dateText}</div>
    `;

    btn.addEventListener('click', () => {
      activeAgendaDay = day.dayNumber;
      document.querySelectorAll('.agenda-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAgenda(currentLang);
    });

    tabsNav.appendChild(btn);
  });
}

function renderAgenda(lang) {
  const isVi = lang === 'vi';
  const day = AGENDA_DATA.find(d => d.dayNumber === activeAgendaDay) || AGENDA_DATA[0];

  const venueEl = document.getElementById('agenda-active-day-venue');
  const listEl = document.getElementById('agenda-sessions-list');

  if (venueEl) {
    const venueText = isVi ? day.venueVi : day.venueEn;
    venueEl.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
      <span>${venueText}</span>
    `;
  }

  if (listEl) {
    listEl.innerHTML = '';
    day.sessions.forEach(session => {
      const card = document.createElement('div');
      card.className = 'session-card';

      const badgeText = isVi ? (session.badgeTextVi || session.badgeTextEn) : session.badgeTextEn;
      const title = isVi ? (session.titleVi || session.titleEn) : session.titleEn;
      const desc = isVi ? (session.descVi || session.descEn) : session.descEn;

      let speakerHtml = '';
      if (session.speaker) {
        const cleanName = session.speaker.replace(/\(TBC\)/i, '').trim().toLowerCase();
        let matchedSpeaker = null;
        if (typeof SPEAKERS_DATA !== 'undefined') {
          matchedSpeaker = SPEAKERS_DATA.find(s => {
            const sName = s.name.replace(/\(TBC\)/i, '').trim().toLowerCase();
            return sName.includes(cleanName) || cleanName.includes(sName);
          });
        }

        const photoSrc = (matchedSpeaker && matchedSpeaker.photo) ? matchedSpeaker.photo : 'assets/images/speakers/placeholder.svg';
        const speakerRole = isVi ? ((matchedSpeaker && matchedSpeaker.roleVi) || session.role || '') : (session.role || '');
        const speakerOrg = isVi ? ((matchedSpeaker && matchedSpeaker.orgVi) || session.org || '') : (session.org || '');
        const subtitleText = [speakerRole, speakerOrg].filter(Boolean).join(' • ');

        speakerHtml = `
          <div class="session-speakers-wrap">
            <div class="agenda-speaker-pill" ${matchedSpeaker ? `data-speaker-id="${matchedSpeaker.id}" style="cursor: pointer;" title="View speaker biography"` : ''}>
              <img src="${photoSrc}" alt="${session.speaker}" class="agenda-speaker-avatar" onerror="this.onerror=null;this.src='assets/images/speakers/placeholder.svg';">
              <div class="agenda-speaker-info">
                <span class="agenda-speaker-name">${session.speaker}</span>
                ${subtitleText ? `<span class="agenda-speaker-role">${subtitleText}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="session-time-col">
          <div class="session-time">${session.time}</div>
          <span class="session-type-badge badge-${session.type}">${badgeText}</span>
        </div>
        <div class="session-content-col">
          <h4 class="session-title">${title}</h4>
          ${speakerHtml}
          <p class="session-desc">${desc}</p>
        </div>
      `;

      listEl.appendChild(card);
    });

    // Bind modal click for speakers
    listEl.querySelectorAll('.agenda-speaker-pill[data-speaker-id]').forEach(pill => {
      pill.addEventListener('click', () => {
        const speakerId = pill.getAttribute('data-speaker-id');
        if (typeof SPEAKERS_DATA !== 'undefined') {
          const spk = SPEAKERS_DATA.find(s => s.id === speakerId);
          if (spk) {
            openSpeakerDetailsModal(spk, currentLang);
          }
        }
      });
    });
  }
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. MODAL POPUPS & INLINE REGISTRATION FORMS
   ========================================================================== */
function initModalAndForms() {
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const bookingModal = document.getElementById('booking-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookingModal) {
        bookingModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (bookingModal) {
        bookingModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Handle Inline Form
  const inlineForm = document.getElementById('inline-registration-form');
  const inlineAlert = document.getElementById('form-success-alert');
  if (inlineForm) {
    inlineForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isVi = currentLang === 'vi';
      const successMsg = isVi 
        ? "Cảm ơn Quý Bác sĩ đã gửi hồ sơ đăng ký! Ban Thư ký Học viện ADBA sẽ gửi tài liệu xác nhận và hóa đơn tài chính tới email của Quý Bác sĩ trong vòng 24 giờ."
        : "Thank you for your registration expression of interest! The ADBA Academy Desk will issue your formal itinerary packet and tax invoice within 24 hours.";
      
      if (inlineAlert) {
        inlineAlert.textContent = successMsg;
        inlineAlert.style.display = 'block';
      }
      inlineForm.reset();
    });
  }

  // Handle Modal Form
  const modalForm = document.getElementById('modal-registration-form');
  const modalAlert = document.getElementById('modal-form-success-alert');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isVi = currentLang === 'vi';
      const successMsg = isVi 
        ? "Đăng ký thành công! Chúng tôi đã bảo lưu vị trí của Quý Bác sĩ và sẽ liên hệ trong 24 giờ."
        : "Reservation request received! We have tentatively held your seat and will contact you within 24 hours.";
      
      if (modalAlert) {
        modalAlert.textContent = successMsg;
        modalAlert.style.display = 'block';
      }
      modalForm.reset();
    });
  }
}
