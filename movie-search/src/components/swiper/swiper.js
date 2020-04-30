function card() {
  const cardRoot = document.createElement('div');
  const headerCard = document.createElement('a');
  const bodyCard = document.createElement('div');
  const footerCard = document.createElement('div');
  const imbdCard = document.createElement('dib');
  const rating = document.createElement('span');

  cardRoot.classList.add('card', 'swiper-slide');
  headerCard.classList.add('card-header');
  bodyCard.classList.add('card-body');
  footerCard.classList.add('card-footer');
  imbdCard.classList.add('card-imbd');

  cardRoot.appendChild(headerCard);
  cardRoot.appendChild(bodyCard);
  cardRoot.appendChild(footerCard);
  cardRoot.appendChild(imbdCard);
  imbdCard.appendChild(rating);

  return cardRoot;
}

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

  for (let i = 0; i < 10; i += 1) {
    wrapper.appendChild(card());
  }

  return outerSwiper;
};

export { swiper as default };
