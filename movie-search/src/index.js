import './style.css';

// Import Swiper and modules
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm';

import header from './components/header/header';
import formSearch from './components/formSearch/formSearch';
import swiper from './components/swiper/swiper';
import footer from './components/footer/footer';

// Install modules
Swiper.use([Navigation, Pagination, Scrollbar]);

function initializeMarkup() {
  const headerEl = header();
  const containerEl = document.createElement('div');
  const formSearchEl = formSearch();
  const swiperEl = swiper();
  const footerEl = footer();

  containerEl.classList.add('container');
  containerEl.appendChild(formSearchEl);
  containerEl.appendChild(swiperEl);

  document.body.appendChild(headerEl);
  document.body.appendChild(containerEl);
  document.body.appendChild(footerEl);
}

initializeMarkup();

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  // init: false,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});

// mySwiper.init();
