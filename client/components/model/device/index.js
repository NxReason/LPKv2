import { getStyleString } from '../../../util/';

const Device = {
  getHtml({ uuid, position, size, img }) {
    const style = getStyleString({ position, size });

    return `
      <div class="device" id="device-${uuid}" style="${style}">
        <img class="device-img" src="img/${img}" alt="" data-type="dvc" data-uuid="${uuid}" />
      </div>
    `;
  }
};

export default Device;
