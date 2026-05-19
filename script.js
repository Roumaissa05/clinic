// ===== Translations =====
const translations = {
  en: {
    brand: "Al-Shifa Clinic",
    nav_home: "Home", nav_about: "About", nav_doctors: "Doctors",
    nav_services: "Services", nav_booking: "Booking", nav_contact: "Contact",
    hero_badge: "Trusted Healthcare Since 1998",
    hero_title: "Your Health, Our Priority",
    hero_subtitle: "Book appointments with certified specialists in cardiology, pediatrics, dermatology and more — all in one place.",
    hero_book: "Book Appointment", hero_services: "Our Services",
    stat_years: "Years", stat_doctors: "Doctors", stat_patients: "Patients",
    about_title: "About Our Clinic", about_sub: "Excellence in care, compassion in service.",
    about_h: "Care You Can Trust",
    about_p: "Al-Shifa Clinic combines advanced medical technology with a personal touch. Our team of board-certified specialists is dedicated to providing comprehensive care for the whole family.",
    about_li1: "Modern facilities & equipment", about_li2: "Certified, experienced specialists",
    about_li3: "24/7 emergency support", about_li4: "Affordable, transparent pricing",
    services_title: "Our Services", services_sub: "Comprehensive healthcare under one roof.",
    svc1: "Cardiology", svc1d: "Heart screenings, ECG and expert cardiac care.",
    svc2: "Pediatrics", svc2d: "Compassionate care for infants and children.",
    svc3: "Dentistry", svc3d: "Modern dental treatments and cosmetic care.",
    svc4: "Ophthalmology", svc4d: "Vision exams, lenses and eye surgery.",
    svc5: "Orthopedics", svc5d: "Joint, bone and sports injury treatment.",
    svc6: "Lab & Imaging", svc6d: "Blood tests, X-Ray, MRI and ultrasound.",
    doctors_title: "Meet Our Doctors", doctors_sub: "Skilled specialists committed to your wellbeing.",
    doc_cardio: "Cardiologist", doc_pedia: "Pediatrician",
    doc_derma: "Dermatologist", doc_ortho: "Orthopedic Surgeon",
    book_title: "Book an Appointment", book_sub: "Fill in the form and we'll confirm shortly.",
    f_name: "Full Name", f_phone: "Phone Number", f_email: "Email",
    f_doctor: "Select Doctor", f_choose: "-- Choose --",
    f_date: "Date", f_time: "Time", f_notes: "Notes", f_submit: "Confirm Booking",
    contact_title: "Contact Us", contact_sub: "We'd love to hear from you.",
    c_addr: "123 Health Street, Algeria, Algeria", c_hours: "Sat - Thu: 9:00 AM - 9:00 PM",
    c_msg: "Message", c_send: "Send Message",
    footer_about: "Compassionate care, modern medicine.",
    footer_links: "Quick Links", footer_follow: "Follow Us",
    footer_rights: "All rights reserved.",
    modal_title: "Appointment Confirmed!",
    modal_text: "Thank you. We've received your booking and will contact you shortly.",
    modal_close: "Close"
  },
  ar: {
    brand: "عيادة الشفاء",
    nav_home: "الرئيسية", nav_about: "من نحن", nav_doctors: "الأطباء",
    nav_services: "الخدمات", nav_booking: "الحجز", nav_contact: "اتصل بنا",
    hero_badge: "رعاية صحية موثوقة منذ 1998",
    hero_title: "صحتك أولويتنا",
    hero_subtitle: "احجز موعدك مع أفضل الأطباء المتخصصين في القلب والأطفال والجلدية وغيرها — كل ذلك في مكان واحد.",
    hero_book: "احجز موعدًا", hero_services: "خدماتنا",
    stat_years: "سنة", stat_doctors: "طبيب", stat_patients: "مريض",
    about_title: "عن عيادتنا", about_sub: "تميّز في الرعاية ورحمة في الخدمة.",
    about_h: "رعاية يمكنك الوثوق بها",
    about_p: "تجمع عيادة الشفاء بين أحدث التقنيات الطبية واللمسة الإنسانية. فريقنا من الأطباء المعتمدين مُلتزم بتقديم رعاية شاملة لجميع أفراد العائلة.",
    about_li1: "مرافق ومعدات حديثة", about_li2: "أطباء معتمدون وذوو خبرة",
    about_li3: "دعم طوارئ على مدار الساعة", about_li4: "أسعار معقولة وشفافة",
    services_title: "خدماتنا", services_sub: "رعاية صحية شاملة تحت سقف واحد.",
    svc1: "أمراض القلب", svc1d: "فحوصات القلب وتخطيط القلب ورعاية متخصصة.",
    svc2: "طب الأطفال", svc2d: "رعاية حنونة للرضع والأطفال.",
    svc3: "طب الأسنان", svc3d: "علاجات أسنان حديثة وتجميلية.",
    svc4: "طب العيون", svc4d: "فحوصات النظر والعدسات وجراحة العيون.",
    svc5: "العظام", svc5d: "علاج المفاصل والعظام وإصابات الرياضة.",
    svc6: "المختبر والأشعة", svc6d: "تحاليل دم وأشعة سينية ورنين مغناطيسي.",
    doctors_title: "تعرف على أطبائنا", doctors_sub: "أطباء متخصصون ملتزمون برعايتك.",
    doc_cardio: "طبيب قلب", doc_pedia: "طبيب أطفال",
    doc_derma: "طبيب جلدية", doc_ortho: "جراح عظام",
    book_title: "احجز موعدًا", book_sub: "املأ النموذج وسنؤكد حجزك قريبًا.",
    f_name: "الاسم الكامل", f_phone: "رقم الهاتف", f_email: "البريد الإلكتروني",
    f_doctor: "اختر الطبيب", f_choose: "-- اختر --",
    f_date: "التاريخ", f_time: "الوقت", f_notes: "ملاحظات", f_submit: "تأكيد الحجز",
    contact_title: "اتصل بنا", contact_sub: "يسعدنا تواصلك معنا.",
    c_addr: "١٢٣ شارع الصحة، الجزائر، الجزائر", c_hours: "السبت - الخميس: ٩ ص - ٩ م",
    c_msg: "الرسالة", c_send: "إرسال",
    footer_about: "رعاية حنونة وطب حديث.",
    footer_links: "روابط سريعة", footer_follow: "تابعنا",
    footer_rights: "جميع الحقوق محفوظة.",
    modal_title: "تم تأكيد الحجز!",
    modal_text: "شكرًا لك. تم استلام حجزك وسنتواصل معك قريبًا.",
    modal_close: "إغلاق"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (translations[lang][k]) el.textContent = translations[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (translations[lang][k]) el.placeholder = translations[lang][k];
  });
  document.getElementById('langToggle').textContent = lang === 'en' ? 'العربية' : 'English';
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'ar' : 'en');
});

// ===== Theme =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeToggle.innerHTML = t === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}
themeToggle.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Sticky Navbar Shadow =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== Reveal on Scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Booking Form =====
const form = document.getElementById('bookingForm');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalDetails = document.getElementById('modalDetails');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (!data.name || !data.phone || !data.email || !data.doctor || !data.date || !data.time) {
    alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
    return;
  }
  const labels = currentLang === 'ar'
    ? { name: 'الاسم', doctor: 'الطبيب', date: 'التاريخ', time: 'الوقت' }
    : { name: 'Name', doctor: 'Doctor', date: 'Date', time: 'Time' };
  modalDetails.innerHTML = `
    <div><strong>${labels.name}:</strong> ${data.name}</div>
    <div><strong>${labels.doctor}:</strong> ${data.doctor}</div>
    <div><strong>${labels.date}:</strong> ${data.date}</div>
    <div><strong>${labels.time}:</strong> ${data.time}</div>
  `;
  modal.classList.add('active');
  form.reset();
});
modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

// ===== Contact Form =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(currentLang === 'ar' ? 'تم إرسال رسالتك. شكرًا!' : 'Message sent. Thank you!');
  e.target.reset();
});

// ===== Init =====
applyTheme(savedTheme);
applyLang(currentLang);

// Min date = today
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
