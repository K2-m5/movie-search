import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar
} from '../../../node_modules/swiper/js/swiper.esm';
import '../../../node_modules/swiper/css/swiper.min.css';
import { createElement } from '../Component/Component';
import Card from '../card/card';

Swiper.use([Navigation, Pagination, Scrollbar]);

export default class FilmPanel {
  constructor(data) {
    this.data = data;
    this.swiper = null;
    this.cardsRoot = null;
  }

  updateData(data) {
    if (this.swiper === null) {
      return;
    }

    this.data = data;

    for (let i = this.cardsRoot.children.length - 1; i >= 0; i -= 1) {
      this.cardsRoot.children[i].remove();
    }

    this.createSlides();

    this.swiper.update();
  }

  createSlides() {
    if (this.cardsRoot === null) {
      this.cardsRoot = createElement('div', 'swiper-wrapper');
    }

    for (let i = 0; i < this.data.length; i += 1) {
      const card = this.data[i];
      this.cardsRoot.append(
        Card.createCardMarkup(card)
      );
    }
  }

  createMarkup() {
    this.createSlides();

    const outerSwiper = createElement('div', 'swiper-outer');
    const rootContainer = createElement('div', 'swiper-container');
    const pagination = createElement('div', 'swiper-pagination');
    const btnNext = createElement('div', 'swiper-btn-next', 'swiper-btn');
    const btnPrevious = createElement('div', 'swiper-btn-prev', 'swiper-btn');

    rootContainer.append(this.cardsRoot);
    rootContainer.append(pagination);

    outerSwiper.append(
      rootContainer,
      btnNext,
      btnPrevious
    );

    return outerSwiper;
  }

  init() {
    this.swiper = new Swiper('.swiper-container', {
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
}
