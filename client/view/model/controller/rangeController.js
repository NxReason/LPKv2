import Component from 'view/model/component';
import { getPositionString } from 'helpers';

const template = (id, style, name, min, max) => `
<div id="${id}" class="controller" style="${style}">
  <span class="controller-name">${name}</span>
  <div class="controller-range">
    <span>${min}</span>
    <input ref="range" type="range" min="${min}" max="${max}" />
    <span>${max}</span>
  </div>
  <div class="controller-range__current-value">
    <span ref="current"></span>
  </div>
</div>
`;

class RangeController extends Component {
  constructor(parent, id, { position, name, limits: { min, max }, value }) {
    super(parent, id);
    const style = getPositionString(position);
    this.refs = null;
    this.template = template(id, style, name, min, max);

    this.value = value;
  }

  render() {
    super.render();

    this.refs.range.value = this.value;
    this.refs.current.textContent = this.value;

    this.refs.range.addEventListener('click', () => { console.log('clicked'); });
  }

  setValue(value) {
    this.value = value;
    this.refs.range.value = value;
  }

  setListeners() {
    console.log(this.refs);
    this.refs.current.textContent = 52;
  }
}

export default RangeController;
