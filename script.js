"use strict";

/* DOCUMENT ELEMENTS */
const btnToScrollTop = document.querySelector(".scroll-to-top-fixed-btn");

/*MOBILE ELEMENTS*/
/* nav elements */
const mobileNav = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
/* hero section */
const mobileHeroSection = document.querySelector(".hero-section");
const mobileHeroBtn = document.querySelector(".hero-section--btn");
/* knowledge section */
const mobileKnowledgeSection = document.querySelector(
  ".mobile-knowledge--container"
);
const mobileKnowledgeHeaderTxt = document.querySelector(
  ".mobile-knowledge--title"
);
/* works section */
const mobileWorkSection = document.querySelector(
  ".mobile-section-works-full-container"
);
/* footer section */
const mobileFooterSection = document.querySelector(
  ".footer-section-full-container"
);

/*LAPTOP ELEMENTS*/
const lgScreenNav = document.querySelector(".lg-screen-nav");
const lgScreenKnowledge = document.querySelector(
  ".large-screen-knowledge-section"
);

/* PAGE FIXED FUNCTIONALITY */

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? btnToScrollTop.classList.remove("hidden")
    : btnToScrollTop.classList.add("hidden");
};

window.addEventListener("scroll", scrollBtnDisplay);

const scrollToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

btnToScrollTop.addEventListener("click", scrollToTop);

/*MOBILE FUNCTIONALITY */
hamburger.addEventListener("click", function () {
  mobileMenu();
  hideUI();
});

navLink.forEach((n) =>
  n.addEventListener("click", function () {
    closeMenu();
    showUI();
  })
);

// nav menu navigation show
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
// nav menu navigation hide
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// show UI
const showUI = function () {
  mobileKnowledgeSection.classList.remove("hidden");
  mobileKnowledgeHeaderTxt.classList.remove("hidden");
  mobileWorkSection.classList.remove("hidden");
  mobileFooterSection.classList.remove("hidden");
  mobileHeroBtn.classList.remove("hidden");
};

// hide UI
const hideUI = function () {
  mobileKnowledgeSection.classList.toggle("hidden");
  mobileKnowledgeHeaderTxt.classList.toggle("hidden");
  mobileWorkSection.classList.toggle("hidden");
  mobileFooterSection.classList.toggle("hidden");
  mobileHeroBtn.classList.toggle("hidden");
};

// navbar fixed on scroll down
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) mobileNav.classList.toggle("nav-fixed");
  else mobileNav.classList.remove("nav-fixed");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
});

headerObserver.observe(mobileHeroSection);

/*LARGE SCREEN FUNCTIONALITY*/
lgScreenNav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("lg-screen_nav_link")) {
    const link = e.target;
    const siblings = link
      .closest(".lg-screen_nav_links")
      .querySelectorAll(".lg-screen_nav_link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
  }
});

lgScreenNav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("lg-screen_nav_link")) {
    const link = e.target;
    const siblings = link
      .closest(".lg-screen_nav_links")
      .querySelectorAll(".lg-screen_nav_link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
  }
});
