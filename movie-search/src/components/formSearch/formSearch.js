const formSearch = () => {
  const formSearchRoot = document.createElement('form');
  const inputSearch = document.createElement('input');
  const buttonSearch = document.createElement('button');
  const clearSearch = document.createElement('span');
  const keyboardSearch = document.createElement('span');

  formSearchRoot.classList.add('search');
  inputSearch.classList.add('search-input');
  buttonSearch.classList.add('search-btn');
  clearSearch.classList.add('search-clear');
  keyboardSearch.classList.add('search-tia');

  inputSearch.setAttribute('type', 'text');
  inputSearch.setAttribute('placeholder', 'Search movie');
  buttonSearch.setAttribute('type', 'submit');
  clearSearch.setAttribute('data-name', 'Clear');
  keyboardSearch.setAttribute('data-name', 'Keyboard');

  buttonSearch.innerText = ('Search');

  formSearchRoot.appendChild(inputSearch);
  formSearchRoot.appendChild(buttonSearch);
  formSearchRoot.appendChild(clearSearch);
  formSearchRoot.appendChild(keyboardSearch);

  return formSearchRoot;
};

export { formSearch as default };
