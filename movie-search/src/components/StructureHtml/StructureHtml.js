import { createElement } from '../Component/Component';
import SearchPanel from '../SearchPanel/SearchPanel';
import FilmPanel from '../FilmPanel/FilmPanel';
import Fetch from '../Fetch/Fetch';

export default class StructureHtml {
  constructor(rootElement, data) {
    this.rootElement = rootElement;
    this.data = data;
    this.filmPanel = null;
    this.fetchObj = new Fetch();
  }

  createHeader() {
    const headerRoot = createElement('div', 'header');
    const headerTitle = createElement('h1', 'header', 'title');

    headerTitle.innerText = 'Movie search';

    headerRoot.append(
      headerTitle
    );

    this.rootElement.append(headerRoot);
  }

  createBody() {
    const bodyRoot = createElement('div', 'container');
    const formSearch = new SearchPanel(async (searchString) => {
      const data = await this.fetchObj.searchMovie(searchString);

      this.filmPanel.updateData(data);
    });
    this.filmPanel = new FilmPanel(this.data, async (page, searchString) => {
      const data = await this.fetchObj.searchMovie(searchString, page);

      this.filmPanel.saveNewPage(data.moviesList);
    });

    bodyRoot.append(
      formSearch.create(),
      this.filmPanel.createMarkup()
    );

    this.rootElement.append(bodyRoot);
  }

  creatFooter() {
    const footerRoot = createElement('div', 'footer');
    const footerContainer = createElement('div', 'footer-container');
    const footerLinkRSS = createElement('a', 'rss');
    const footerLinkGithub = createElement('a', 'github');
    footerContainer.append(footerLinkRSS);
    footerContainer.append(footerLinkGithub);

    footerLinkRSS.setAttribute('href', 'https://rs.school/');
    footerLinkGithub.setAttribute('href', 'https://github.com/K2-m5');

    footerLinkRSS.innerText = ('rs School 2020q1');
    footerLinkGithub.innerText = ('K2-m5');

    footerRoot.append(
      footerContainer
    );

    this.rootElement.append(footerRoot);
  }

  createMarkup() {
    this.createHeader();
    this.createBody();
    this.creatFooter();

    this.filmPanel.init();
  }
}
