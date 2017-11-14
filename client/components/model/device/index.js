import { getStyleString } from '../../../util/';

const Device = {
  getHtml({ uuid, position, size, img }) {
    const style = getStyleString({ position, size });

    return `
      <div class="device" data-uuid="${uuid}" id="device-${uuid}" style="${style}">
        <img class="device-img" src="img/${img}" alt="" />
      </div>
    `;
  }
};

export default Device;
