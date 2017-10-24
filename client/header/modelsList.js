function createOption(uuid, name) {
  return `<option value=${uuid}>${name}</option>`;
}

class ModelsList {
  constructor($root) {
    this.root = $root;
  }

  setModels(models) {
    if (!this.root) {
      console.warn ('root element for models menu is not defined');
      return this;
    }

    this.clear();
    models.forEach(m => {
      this.root.innerHTML += createOption(m.uuid, m.name);
    });

    return this;
  }

  getSelectedModel() {
    return this.root.value;
  }

  clear() {
    this.root.innerHTML = '';
    return this;
  }
}

export default ModelsList;
