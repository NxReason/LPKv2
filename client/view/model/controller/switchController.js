import Component from 'view/model/component';
import { getPositionString } from 'helpers';

const template = (id, style, name) => `
<div class="controller" style="${style}" id="${id}">
  <span class="controller-name">${name}</span>
  <label class="controller-switch">
    <input ref="switch" type="checkbox" />
    <div class="controller-switch__slider"></div>
  </label>
</div>
`;

class SwitchController extends Component {
  constructor(parent, id, { position, name, value }) {
    super(parent, id);
    const style = getPositionString(position);
    this.template = template(id, style, name);

    this.value = value;
  }

  render() {
    super.render();
    this.refs.switch.isChecked = this.value;
  }

  setValue(value) {
    this.value = value;
    this.refs.switch.isChecked = value;
  }

  setListeners() {
  }
}

export default SwitchController;
