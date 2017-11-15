import { getStyleString, getSizeString } from '../../../util/';

const Device = {
  getHtml({ uuid, position, size, img }) {
    const style = getStyleString({ position, size });
    const sizeString = getSizeString(size);

    return `
      <div class="device" id="device-${uuid}" style="${style}">
        <img class="device-img" style="${sizeString}" src="img/${img}" alt="" data-type="dvc" data-uuid="${uuid}" />
      </div>
    `;
  }
};

export default Device;
