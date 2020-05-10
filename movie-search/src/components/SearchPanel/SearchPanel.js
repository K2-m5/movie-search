import { createElement } from '../Component/Component';

const labels = {
  buttonLabel: 'Search',
  placeholderText: 'Search movie'
};

export default class SearchPanel {
  constructor(searchHandler) {
    this.searchHandler = searchHandler;
    this.searchString = '';
  }

  create() {
    const formSearchRoot = createElement('form', 'search');
    const inputSearch = createElement('input', 'search-input');
    const buttonSearch = createElement('button', 'search-btn');
    const clearSearch = createElement('span', 'search-clear');
    const keyboardSearch = createElement('span', 'search-keyboard');

    formSearchRoot.setAttribute('name', 'search');
    formSearchRoot.addEventListener('submit', (e) => {
      e.preventDefault();

      this.searchHandler(inputSearch.value);
    });

    inputSearch.setAttribute('name', 'nameFilm');
    inputSearch.setAttribute('type', 'text');
    inputSearch.setAttribute('placeholder', labels.placeholderText);
    inputSearch.setAttribute('autofocus', 'true');
    inputSearch.setAttribute('autocomplete', 'off');
    buttonSearch.setAttribute('type', 'submit');
    clearSearch.addEventListener('click', () => {
      inputSearch.value = '';
    });

    buttonSearch.innerText = labels.buttonLabel;

    formSearchRoot.append(
      inputSearch,
      buttonSearch,
      clearSearch,
      keyboardSearch
    );

    return formSearchRoot;
  }
}
