if (window.location.pathname === `${Config.PATHNAME}/about`) {
  const swiperContainer = $("#about-products-swiper");

  let swiper;

  const loadSwiperImages = () => {
    let html = "";
    for (let i = 0; i < 20; i++) {
      html = `${html}
        <div class="swiper-slide">
            <img src="./assets/images/about_fish (${i + 1}).jpg" alt="img">
        </div>
        `;
    }
    swiperContainer.find(".swiper-wrapper").html(html);
  };

  const initSwiper = () => {
    var _slidesPerView = 0;
    if ($(window).width() <= 600) {
      _slidesPerView = 1;
    } else if ($(window).width() > 600 && $(window).width() <= 750) {
      _slidesPerView = 2;
    } else if ($(window).width() > 750 && $(window).width() < 1080) {
      _slidesPerView = 3;
    } else {
      _slidesPerView = 4;
    }

    swiper = new Swiper("#about-products-swiper", {
      slidesPerView: _slidesPerView,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };

  $(document).ready(() => {
    loadSwiperImages();
    initSwiper();
  });

  $(window).resize(() => {
    initSwiper();
  });
}
