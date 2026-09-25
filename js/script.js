/* =========================================================
   KARTHIK PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

        });

    });

}


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("text-teal");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("text-teal");

        }

    });

});


/* =========================
   HEADER SHADOW ON SCROLL
   ========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("shadow-lg");

    } else {

        header.classList.remove("shadow-lg");

    }

});


/* =========================
   EMAIL COPY
   ========================= */

const emailLinks = document.querySelectorAll(
    'a[href^="mailto:"]'
);

emailLinks.forEach(link => {

    link.addEventListener("contextmenu", () => {

        const email = link
            .getAttribute("href")
            .replace("mailto:", "");

        if (navigator.clipboard) {

            navigator.clipboard.writeText(email);

        }

    });

});


/* =========================
   CURRENT YEAR
   ========================= */

const yearElements = document.querySelectorAll(
    "[data-current-year]"
);

yearElements.forEach(element => {

    element.textContent = new Date().getFullYear();

});