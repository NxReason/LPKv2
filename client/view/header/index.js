import API from '../../api';
import EventEmitter, { Events } from 'helpers/eventEmitter';
import ModelsList from './modelsList';

const Header = (function Header() {
  async function init() {
    const $modelsListRoot = document.getElementById('models-list');
    this.modelsList = new ModelsList($modelsListRoot);
    await this.loadModels();

    const $loadModelBtn = document.getElementById('load-model-btn');
    $loadModelBtn.addEventListener('click', this.loadModel.bind(this));
  }

  async function loadModels() {
    const models = await API.getModels();
    this.modelsList.setModels(models);
  }

  async function loadModel() {
    const uuid = this.modelsList.getSelectedModel();
    const model = await API.getModel(uuid);
    EventEmitter.emit(Events.MODEL_LOADED, model);
  }

  return {
    init,
    loadModels,
    loadModel
  };
}());

export default Header;
