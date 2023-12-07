const menuIcon = $("#menu-icon");
const linksPopper = $("#top-bar-links-popper");
const logoIcon = $("#logo-icon");

//variables
let isOpenLinksPopper = false;

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

$(window).click((e) => {
  if (e.target.id === "menu-icon-i" || e.target.id === "top-bar-links-popper") {
    e.preventDefault();
  } else {
    closeLinksPopper();
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
