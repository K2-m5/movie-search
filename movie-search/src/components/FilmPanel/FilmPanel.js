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
  constructor(data, nextPageHandler) {
    this.nextPageHandler = nextPageHandler;
    this.page = 1;
    this.data = data;
    this.newItems = [];
    this.swiper = null;
    this.cardsRoot = null;
    this.isDataFetchInProgress = false;
    this.isEndReached = false;
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

  saveNewPage(newMovieList) {
    this.isDataFetchInProgress = false;
    this.newItems = newMovieList;

    if (this.isEndReached) {
      this.drawCards(newMovieList);

      this.swiper.update();

      this.isEndReached = false;
    }
  }

  drawCards(cardData) {
    for (let i = 0; i < cardData.length; i += 1) {
      this.cardsRoot.append(Card.createCardMarkup(cardData[i]));
    }
  }

  createSlides() {
    if (this.cardsRoot === null) {
      this.cardsRoot = createElement('div', 'swiper-wrapper');
    }

    this.drawCards(this.data.moviesList);
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
      },
      on: {
        progress: (currentProgress) => {
          if (currentProgress >= 0.7
            && !this.isDataFetchInProgress
            && !(this.page * 10 > parseInt(this.data.totalResults, 0))) {
            this.isDataFetchInProgress = true;
            this.page += 1;

            this.nextPageHandler(this.page, this.data.searchString);
          }

          if (currentProgress === 1) {
            if (this.newItems.length > 0) {
              this.drawCards(this.newItems);

              this.swiper.update();

              this.newItems = [];

              return;
            }

            this.isEndReached = true && this.isDataFetchInProgress;
          }
        }
      }
    });
  }
}
