import API from '../API';
import ModelsList from './modelsList';

const Header = {
  init() {
    const $modelsListRoot = document.getElementById('models-list');
    this.modelsList = new ModelsList($modelsListRoot);
    this.loadModels();

    const $loadModelBtn = document.getElementById('load-model-btn');
    $loadModelBtn.addEventListener('click', this.loadModel.bind(this));
  },

  async loadModels() {
    const models = await API.getModels();
    this.modelsList.setModels(models);
  },

  async loadModel() {
    const uuid = this.modelsList.getSelectedModel();
    const model = await API.getModel(uuid);
    console.log(model);
  }
};

export default Header;
