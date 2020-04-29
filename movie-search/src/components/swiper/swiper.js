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

  wrapper.innerHTML = ('<div class="card swiper-slide">Slide 1</div><div class="card swiper-slide">Slide 2</div><div class="card swiper-slide">Slide 3</div><div class="card swiper-slide">Slide 4</div><div class="card swiper-slide">Slide 5</div><div class="card swiper-slide">Slide 6</div><div class="card swiper-slide">Slide 7</div><div class="card swiper-slide">Slide 8</div><div class="card swiper-slide">Slide 9</div><div class="card swiper-slide">Slide 10</div><div class="swiper-pagination"></div>');

  outerSwiper.appendChild(rootContainer);
  rootContainer.appendChild(wrapper);
  rootContainer.appendChild(pagination);
  outerSwiper.appendChild(btnNext);
  outerSwiper.appendChild(btnPrevious);

  return outerSwiper;
};

export { swiper as default };
