export default class Component {
  createElement(tag, ...classNames) {
    const element = document.createElement(tag);
    this.k = 0;

    if (!!classNames && classNames.length > 0) {
      element.classList.add(...classNames);
    }

    return element;
  }

  getElementByClass(selector) {
    const element = this.querySelector(selector);
    return element;
  }
}
