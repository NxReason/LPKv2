import Controller from './controller';

class SwitchController extends Controller {
  constructor({ uuid, name, value }) {
    super({ uuid, name });
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}

export default SwitchController;
