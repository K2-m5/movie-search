// Import Swiper and modules
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar
} from '../node_modules/swiper/js/swiper.esm';
import '../node_modules/swiper/css/swiper.min.css';

Swiper.use([Navigation, Pagination, Scrollbar]);

export default function initSwiper() {
  const mySwiper = new Swiper('.swiper-container', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 80
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 80
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    }
  });
}