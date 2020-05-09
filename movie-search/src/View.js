// Import Swiper and modules
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar
} from '../node_modules/swiper/js/swiper.esm';
import '../node_modules/swiper/css/swiper.min.css';

import StructureHtml from './components/StructureHtml/StructureHtml';
import Fetch from './components/Fetch/Fetch';
import Card from './components/card/card';

Swiper.use([Navigation, Pagination, Scrollbar]);

async function initializeMarkup() {
  const fetchObj = new Fetch();
  const data = await fetchObj.searchMovie('Transformers');
  console.log(data);

  const structureHTML = new StructureHtml();
  document.body.appendChild(structureHTML.createHeader());
  document.body.appendChild(structureHTML.createBody());
  document.body.appendChild(structureHTML.creatFooter());

  const cards = [];
  for (let i = 0; i < data.length; i += 1) {
    cards.push(new Card(data[i]));
  }

  const wrapper = document.querySelector('.swiper-wrapper');

  function render() {
    for (let i = 0; i < cards.length; i += 1) {
      wrapper.appendChild(cards[i].createCard());
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

export { initializeMarkup, initSwiper };
