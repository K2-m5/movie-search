import Components from '../Component/Component';


export default class StructureHtml extends Components {
  constructor() {
    super();
  }

  createHeader() {
    this.headerRoot = this.createElement('div', 'header');
    this.headerTitle = this.createElement('h1', 'header', 'title');

    this.headerTitle.innerText = 'Movie search';

    this.headerRoot.append(
      this.headerTitle
    );

    return this.headerRoot;
  }

  createFormSearch() {
    this.formSearchRoot = this.createElement('form', 'search');
    this.inputSearch = this.createElement('input', 'search-input');
    this.buttonSearch = this.createElement('button', 'search-btn');
    this.clearSearch = this.createElement('span', 'search-clear');
    this.keyboardSearch = this.createElement('span', 'search-tia');

    this.formSearchRoot.setAttribute('name', 'search');
    this.formSearchRoot.setAttribute('action', ' ');
    this.formSearchRoot.setAttribute('method', 'post');
    this.inputSearch.setAttribute('name', 'nameFilm');
    this.inputSearch.setAttribute('type', 'text');
    this.inputSearch.setAttribute('placeholder', 'Search movie');
    this.inputSearch.setAttribute('autofocus', 'true');
    this.inputSearch.setAttribute('autocomplete', 'off');
    this.buttonSearch.setAttribute('type', 'submit');
    this.clearSearch.setAttribute('data-name', 'Clear');
    this.keyboardSearch.setAttribute('data-name', 'Keyboard');

    this.buttonSearch.innerText = ('Search');

    this.formSearchRoot.append(
      this.inputSearch,
      this.buttonSearch,
      this.clearSearch,
      this.keyboardSearch
    );

    return this.formSearchRoot;
  }

  createSwiper() {
    this.outerSwiper = this.createElement('div', 'swiper-outer');
    this.rootContainer = this.createElement('div', 'swiper-container');
    this.wrapper = this.createElement('div', 'swiper-wrapper');
    this.pagination = this.createElement('div', 'swiper-pagination');
    this.rootContainer.append(this.wrapper);
    this.rootContainer.append(this.pagination);
    this.btnNext = this.createElement('div', 'swiper-btn-next', 'swiper-btn');
    this.btnPrevious = this.createElement('div', 'swiper-btn-prev', 'swiper-btn');

    this.outerSwiper.append(
      this.rootContainer,
      this.btnNext,
      this.btnPrevious
    );

    return this.outerSwiper;
  }

  createBody() {
    this.bodyRoot = this.createElement('div', 'container');
    const formSearch = this.createFormSearch();
    const swiper = this.createSwiper();

    this.bodyRoot.append(
      formSearch,
      swiper
    );

    return this.bodyRoot;
  }

  creatFooter() {
    this.footerRoot = this.createElement('div', 'footer');
    this.footerContainer = this.createElement('div', 'footer-container');
    this.footerContainer.append(this.footerLinkRSS = this.createElement('a', 'rss'));
    this.footerContainer.append(this.footerLinkGithub = this.createElement('a', 'github'));

    this.footerLinkRSS.setAttribute('href', 'https://rs.school/');
    this.footerLinkGithub.setAttribute('href', 'https://github.com/K2-m5');

    this.footerLinkRSS.innerText = ('rs School 2020q1');
    this.footerLinkGithub.innerText = ('K2-m5');

    this.footerRoot.append(
      this.footerContainer
    );

    return this.footerRoot;
  }
}
