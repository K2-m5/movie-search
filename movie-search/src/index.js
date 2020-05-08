import './style.css';

// Import Swiper and modules
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
} from '../node_modules/swiper/js/swiper.esm';
import '../node_modules/swiper/css/swiper.min.css';

import header from './components/header/header';
import formSearch from './components/formSearch/formSearch';
import swiper from './components/swiper/swiper';
import footer from './components/footer/footer';
import Fetch from './components/Fetch/Fetch';
import Card from './components/card/card';

Swiper.use([Navigation, Pagination, Scrollbar]);

async function initializeMarkup() {
  // async function init() {
  //   let fetchRun = new Fetch(() => {
  //  //   return fetchRun.getMovie();
  //     // return data;
  //   });
  //   let data = await fetchRun;
  //   return data;
  // }

  const fetchObj = new Fetch();
  const data = await fetchObj.searchMovie('Transformers');
  console.log(data);

  const headerEl = header();
  const containerEl = document.createElement('div');
  const formSearchEl = formSearch();
  const swiperEl = swiper();
  const footerEl = footer();
  containerEl.classList.add('container');
  containerEl.appendChild(formSearchEl);
  containerEl.appendChild(swiperEl);

  const cards = [];
  for (let i = 0; i < data.length; i += 1) {
    cards.push(new Card(data[i]));
  }

  document.body.appendChild(headerEl);
  document.body.appendChild(containerEl);
  document.body.appendChild(footerEl);
  const wrapper = document.querySelector('.swiper-wrapper');
  // const fetchRun = new Fetch();
  // const data = fetchRun.getMovie();

  function render() {
    for (let i = 0; i < cards.length; i += 1) {
      wrapper.appendChild(cards[i].render());
    }
  }

  render(data);
}

async function initSwiper() {
  await initializeMarkup();

  const mySwiper = new Swiper('.swiper-container', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
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
}

initSwiper();

// const btnSearch = document.querySelector('.search-btn')


