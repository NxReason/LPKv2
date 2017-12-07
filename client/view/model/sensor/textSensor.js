import { getPositionString } from 'helpers';
import Component from 'view/model/component';

const template = (id, style) => `
<div class="sensor sensor-text" style="${style}" id="${id}">
  <div>
    <span class="sensor-text__value" ref="value"></span>
    <span ref="ext"></span>
  </div>
</div>
`;

class TextSensor extends Component {
  constructor(parent, id, { uuid, position, props: { value, ext } }) {
    super(parent, id);
    const style = getPositionString(position);
    this.template = template(id, style);

    this.value = value;
    this.ext = ext;
  }

  render() {
    super.render();

    this.refs.value.innerHTML = this.value;
    this.refs.ext.innerHTML = this.ext;
    this.refs.value.innerHTML = 11;
  }

  setValue(value) {
    this.value = value;
    this.refs.value.innerHTML = value;
  }

  setExt(ext) {
    this.ext = ext;
    this.refs.ext.innerHTML = ext;
  }

  setListeners() {
    console.log('sensor listener');
    console.log(this.refs.value);
    this.refs.value.addEventListener('click', () => { console.log('foo'); });
  }
}

export default TextSensor;
