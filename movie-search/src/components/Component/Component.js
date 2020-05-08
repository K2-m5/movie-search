export default class Component {
  createElement(tag, ...classNames) { //деструктуризация массива
    const element = document.createElement(tag);
    this.k = 0;

    if (!!classNames && classNames.length > 0) {
      element.classList.add(...classNames);
      // for (let i = 0; i < classNames.length; i += 1) {
      //   element.classList.add(classNames[i]);
      // }
    }

    return element;
  }

  getElementByClass(selector) {
    const element = this.querySelector(selector);
    return element;
  }
}
