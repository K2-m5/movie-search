const footer = () => {
  const footerRoot = document.createElement('div');
  const footerContainer = document.createElement('div');
  const footerLinkRSS = document.createElement('a');
  const footerLinkGithub = document.createElement('a');

  footerRoot.classList.add('footer');
  footerContainer.classList.add('footer-container');
  footerLinkRSS.classList.add('footer__link_rss');
  footerLinkGithub.classList.add('footer__link_github');

  footerLinkRSS.setAttribute('href', 'https://rs.school/');
  footerLinkGithub.setAttribute('href', 'https://github.com/K2-m5');

  footerLinkRSS.innerText = ('rs School 2020q1');
  footerLinkGithub.innerText = ('K2-m5');

  document.body.appendChild(footerRoot);
  footerRoot.appendChild(footerContainer);
  footerContainer.appendChild(footerLinkRSS);
  footerContainer.appendChild(footerLinkGithub);

  return footerRoot;
};

export { footer as default };
