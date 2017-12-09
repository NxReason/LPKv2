import Component from 'view/model/component';
import EventEmitter from 'helpers/eventEmitter';
import { getPositionString } from 'helpers';

const template = (name) => `
<span class="controller-name">${name}</span>
<label class="controller-switch">
  <input ref="switch" type="checkbox" />
  <div class="controller-switch__slider"></div>
</label>
`;

class SwitchController extends Component {
  constructor(parent, { uuid, position, name, value }) {
    super(parent, { uuid, className: 'controller' });

    this.refs = null;
    this.template = template(name);

    const style = getPositionString(position);
    this.wrapper.setAttribute('style', style);

    this.value = value;
  }

  render() {
    super.render();

    this.refs.switch.checked = this.value;
  }

  setValue(value) {
    this.value = value;
    this.refs.switch.checked = value;
  }

  setListeners() {
    this.refs.switch.addEventListener('click', () => {
      const value = this.refs.switch.checked;
      this.value = value;
      EventEmitter.emit('CONTROLLER_VALUE_CHANGED', { uuid: this.uuid, value, oldValue: !value });
    })
  }
}

export default SwitchController;
