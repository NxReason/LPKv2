class Component {
  constructor(parent, { className, uuid, style }) {
    this.parent = parent;
    this.uuid = uuid;

    this.wrapper = document.createElement('div');
    if (className) { this.wrapper.classList.add(className); }
    if (className && uuid) { this.wrapper.id = `${className}-${uuid}`; }
    if (style) { this.wrapper.setAttribute('style', style); }

    this.template = null;

    this.parent.appendChild(this.wrapper);
  }

  render() {
    if (this.template === null) {
      console.warn(`Element has no template: ${this.id}`);
      return;
    }

    this.wrapper.innerHTML += this.template;
    this.refs = Array.from(this.wrapper
      .querySelectorAll('[ref]'))
      .reduce((acc, refNode) => {
        acc[refNode.getAttribute('ref')] = refNode;
        return acc;
      }, {});
    this.setListeners();
  }

  setListeners() {}
}

export default Component;
