class Component {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
    this.template = null;
  }

  render() {
    if (this.template === null) {
      console.warn(`Element has no template: ${this}`);
      return;
    }

    this.parent.innerHTML += this.template;
    this.wrapper = this.parent.querySelector(`#${this.id}`);
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
