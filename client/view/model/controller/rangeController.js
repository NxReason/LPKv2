import Component from 'view/model/component';
import EventEmitter, { Events } from 'helpers/eventEmitter';
import { getPositionString } from 'helpers';

const template = (name, min, max) => `
<span class="controller-name">${name}</span>
<div class="controller-range">
  <span>${min}</span>
  <input ref="range" type="range" min="${min}" max="${max}" />
  <span>${max}</span>
</div>
<div class="controller-range__current-value">
  <span ref="current"></span>
</div>
`;

class RangeController extends Component {
  constructor(parent, { uuid, position, name, limits: { min, max }, value }) {
    super(parent, { uuid, className: 'controller' });

    this.refs = null;
    this.template = template(name, min, max);

    const style = getPositionString(position);
    this.wrapper.setAttribute('style', style);

    this.value = parseInt(value, 10);
  }

  render() {
    super.render();

    this.refs.range.value = this.value;
    this.refs.current.textContent = this.value;
  }

  setValue(value) {
    this.value = value;
    this.refs.range.value = value;
  }

  setListeners() {
    this.refs.range.addEventListener('change', () => {
      const value = parseInt(this.refs.range.value, 10);
      const oldValue = this.value;
      this.value = value;
      this.refs.current.textContent = value;
      EventEmitter.emit(Events.CONTROLLER_VALUE_CHANGED, { uuid: this.uuid, value, oldValue });
    });

    this.refs.range.addEventListener('input', () => {
      this.refs.current.textContent = this.refs.range.value;
    });
  }
}

export default RangeController;
