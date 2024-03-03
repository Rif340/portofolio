// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon'); // Ganti 'memuIcon' menjadi 'menuIcon'
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Mengganti 'fs-xmsrk' menjadi 'fa-xmark'
    navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section'); // Mengganti 'section' menjadi 'sections'
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navbar
menuIcon.classList.remove('fa-xmark'); // Mengganti 'fa-xmsrk' menjadi 'fa-xmark'
navbar.classList.remove('active');

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home h1, .about-img', { origin: 'left' }); // Mengganti 'home-contact' menjadi 'home'
ScrollReveal().reveal('.home p, .about-content', { origin: 'right' }); // Mengganti 'home-contact' menjadi 'home'

// Typing text for the first element
const dynamicText1 = document.querySelector("#typing1");
const words1 = ["Fresh Graduate", "Web Developer", "خريج حديث", "مطوّر ويب", "新卒者", "ウェブ開発者", "Lulusan Baru", "Pengembang Web"];
let wordIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;

const typeEffect1 = () => {
  const currentWord1 = words1[wordIndex1];
  const currentChar1 = currentWord1.substring(0, charIndex1);
  dynamicText1.textContent = currentChar1;
  dynamicText1.classList.add("stop-blinking");

  if (!isDeleting1 && charIndex1 < currentWord1.length) {
    charIndex1++;
    setTimeout(typeEffect1, 200);
  } else if (isDeleting1 && charIndex1 > 0) {
    charIndex1--;
    setTimeout(typeEffect1, 100);
  } else {
    isDeleting1 = !isDeleting1;
    dynamicText1.classList.remove("stop-blinking");
    wordIndex1 = !isDeleting1 ? (wordIndex1 + 1) % words1.length : wordIndex1;
    setTimeout(typeEffect1, 1200);
  }
}

// Typing text for the second element
const dynamicText2 = document.querySelector("#typing2");
const words2 = ["Touch !", "! 私に連絡して", "اتصل بي !","Hubungi saya !"];
let wordIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;

const typeEffect2 = () => {
  const currentWord2 = words2[wordIndex2];
  const currentChar2 = currentWord2.substring(0, charIndex2);
  dynamicText2.textContent = currentChar2;
  dynamicText2.classList.add("stop-blinking");

  if (!isDeleting2 && charIndex2 < currentWord2.length) {
    charIndex2++;
    setTimeout(typeEffect2, 200);
  } else if (isDeleting2 && charIndex2 > 0) {
    charIndex2--;
    setTimeout(typeEffect2, 100);
  } else {
    isDeleting2 = !isDeleting2;
    dynamicText2.classList.remove("stop-blinking");
    wordIndex2 = !isDeleting2 ? (wordIndex2 + 1) % words2.length : wordIndex2;
    setTimeout(typeEffect2, 1200);
  }
}

// Trigger both typing effects
typeEffect1();
typeEffect2();
