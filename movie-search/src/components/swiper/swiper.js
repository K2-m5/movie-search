/* class Card {
  constructor() {
    this.cardRoot = this.createElement('div');
    this.headerCard = this.createElement('a');
    this.headerCard = this.createElement('div');
    this.headerCard = this.createElement('div');
    this.headerCard = this.createElement('div');
    this.headerCard = this.createElement('span');
  }
} */

// import card from '../card/card';
// import data from '..src/index';

const swiper = () => {
  const outerSwiper = document.createElement('div');

  const rootContainer = document.createElement('div');
  const wrapper = document.createElement('div');
  const pagination = document.createElement('div');
  const btnNext = document.createElement('div');
  const btnPrevious = document.createElement('div');

  outerSwiper.classList.add('swiper-outer');
  rootContainer.classList.add('swiper-container');
  wrapper.classList.add('swiper-wrapper');
  pagination.classList.add('swiper-pagination');
  btnNext.classList.add('swiper-btn-next', 'swiper-btn');
  btnPrevious.classList.add('swiper-btn-prev', 'swiper-btn');

  outerSwiper.appendChild(rootContainer);
  rootContainer.appendChild(wrapper);
  rootContainer.appendChild(pagination);
  outerSwiper.appendChild(btnNext);
  outerSwiper.appendChild(btnPrevious);

  return outerSwiper;
};

export { swiper as default };
