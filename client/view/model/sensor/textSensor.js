import { getPositionString } from 'helpers';
import Component from 'view/model/component';

const template = () => `
<div class="sensor-text">
  <span class="sensor-text__value" ref="value"></span>
  <span ref="ext"></span>
</div>
`;

class TextSensor extends Component {
  constructor(parent, { uuid, position, props: { value, ext } }) {
    super(parent, { uuid, className: 'sensor' });
    const style = getPositionString(position);
    this.template = template();
    this.wrapper.setAttribute('style', style);

    this.value = value;
    this.ext = ext;
  }

  render() {
    super.render();

    this.refs.value.innerHTML = this.value;
    this.refs.ext.innerHTML = this.ext;
  }

  setValue(value) {
    this.value = value;
    this.refs.value.innerHTML = value.toFixed(2);
  }

  setExt(ext) {
    this.ext = ext;
    this.refs.ext.innerHTML = ext;
  }

  setListeners() {
    this.refs.value.addEventListener('click', () => { console.log('text sensor value clicked'); });
  }
}

export default TextSensor;
