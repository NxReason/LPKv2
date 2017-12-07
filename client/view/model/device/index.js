import { getStyleString, getSizeString } from 'helpers';
import Component from 'view/model/component';

const template = (id, style, size, img) => `
<div class="device" id="${id}" style="${style}">
  <img class="device-img" src="img/${img}" alt="" data-type="dvc" ref="image" style="${size}" />
</div>
`;

class Device extends Component {
  constructor(parent, id, { uuid, position, size, img }) {
    super(parent, id);
    const styleStr = getStyleString({ position, size });
    const sizeStr = getSizeString(size);
    this.template = template(id, styleStr, sizeStr, img);
  }

  setListeners() {
    console.log('setting listener for device');
  }
}

export default Device;
