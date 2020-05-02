export default class Component {
  createElement(tag, ...className) {
    const element = document.createElement(tag);
    if (className) {
      this.className = `${className}`;
    }
    return element;
  }

  getElementByClass(selector) {
    const element = this.querySelector(selector);
    return element;
  }
}
