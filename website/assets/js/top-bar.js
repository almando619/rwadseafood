const menuIcon = $("#menu-icon");
const linksPopper = $("#top-bar-links-popper");
const logoIcon = $("#logo-icon");
const languageButton = $("#language-container-main");
const languagePopper = $(".lang-popper");
const langOptionEN = $("#lang-option-en");
const langOptionAR = $("#lang-option-ar");
const textSelectedLang = $(".text-lang-main");
const imageSelectedLang = $(".icon-lang-main");

//variables
let isOpenLinksPopper = false;
let isOpenLanguagePopper = false;

//listeners
menuIcon.click(() => {
  if (isOpenLinksPopper) {
    closeLinksPopper();
  } else {
    openLinksPopper();
  }
});

logoIcon.click(() => {
  if (window.location.pathname !== "/") {
    window.location.pathname = "/";
  }
});

languageButton.click(() => {
  if (isOpenLanguagePopper) {
    closeLanguagePopper();
  } else {
    openLanguagePopper();
  }
});

langOptionEN.click(() => {
  textSelectedLang.html("EN");
  imageSelectedLang.attr("src", "./assets/icons/icon_en.png");
});
langOptionAR.click(() => {
  textSelectedLang.html("AR");
  imageSelectedLang.attr("src", "./assets/icons/icon_om.png");
});

//methods
const openLinksPopper = () => {
  menuIcon.html(`<i id="menu-icon-i" class="fas fa-close"></i>`);
  linksPopper.fadeIn(500);
  isOpenLinksPopper = true;
};

const closeLinksPopper = () => {
  menuIcon.html(`<i id="menu-icon-i" class="fas fa-bars-staggered"></i>`);
  linksPopper.fadeOut(500);
  isOpenLinksPopper = false;
};

const openLanguagePopper = () => {
  languagePopper.fadeIn(500);
  isOpenLanguagePopper = true;
};

const closeLanguagePopper = () => {
  languagePopper.fadeOut(500);
  isOpenLanguagePopper = false;
};

$(window).click((e) => {
  if (e.target.id === "menu-icon-i" || e.target.id === "top-bar-links-popper") {
    e.preventDefault();
    closeLanguagePopper();
  } else if (e.target.id === "language-container-main") {
    e.preventDefault();
    closeLinksPopper();
  } else {
    closeLinksPopper();
    closeLanguagePopper();
  }
});

$(document).ready(() => {
  switch (window.location.pathname.substring(Config.HREF_START_INDEX)) {
    case "/home":
      $("#link-home").addClass("active-link");
      $("#link-home-alt").addClass("active-link");
      break;
    case "/about":
      $("#link-about").addClass("active-link");
      $("#link-about-alt").addClass("active-link");
      break;
    case "/products":
      $("#link-products").addClass("active-link");
      $("#link-products-alt").addClass("active-link");
      break;
    case "/contacts":
      $("#link-contacts").addClass("active-link");
      $("#link-contacts-alt").addClass("active-link");
      break;
    default:
      break;
  }
});
