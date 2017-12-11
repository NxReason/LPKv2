import Component from 'view/scheme/component';
import EventEmitter, { Events } from 'helpers/eventEmitter';
import { getStyleString, getSizeString } from 'helpers';

const template = (size, img) => `
<img class="device-img" src="img/${img}" alt="" ref="image" style="${size}" />
`;

class Device extends Component {
  constructor(parent, { uuid, position, size, img }) {
    super(parent, { uuid, className: 'device' });
    const styleStr = getStyleString({ position, size });
    const sizeStr = getSizeString(size);
    this.wrapper.setAttribute('style', styleStr);
    this.template = template(sizeStr, img);
  }

  setListeners() {
    this.wrapper.addEventListener('click', () => {
      EventEmitter.emit(Events.DEVICE_COMPONENT_CLICKED, { uuid: this.uuid });
    })
  }
}

export default Device;
