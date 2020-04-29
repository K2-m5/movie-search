const header = () => {
  const headerRoot = document.createElement('div');
  const headerTitle = document.createElement('h1');

  headerTitle.classList.add('header', 'title');
  headerTitle.innerText = 'Movie search';

  headerRoot.classList.add('header');
  headerRoot.appendChild(headerTitle);

  return headerRoot;
};

export { header as default };
