import controllerTypes from '../../../config/controllerTypes';
import { getStyleString } from '../../../util';

function getSwitchControllerHtml({ uuid, position, size, value }) {
  const style = getStyleString({ position, size });
  return `
    <div class="controller controller-switch" style="${style}">
      <label>+
        <input type="checkbox" name="controller-${uuid}" ${value ? 'checked' : ''}/>
      </label>
      <label>-
        <input type="checkbox" name="controller-${uuid}" ${!value ? 'checked' : ''}/>
      </label>
    </div>
  `;
}

function getRangeControllerHtml({ uuid, position, size, value, limits }) {
  const style = getStyleString({ position, size });
  return `
    <div class="controller controller-range" style="${style}" data-uuid="${uuid}">
      ${value}
      ${limits}
    </div>
  `;
}

const Controller = {
  getHtml(controller) {
    switch (controller.type) {
      case controllerTypes.SWITCH:
        return getSwitchControllerHtml(controller);
      case controllerTypes.RANGE:
        return getRangeControllerHtml(controller);
      default:
        throw new Error(`Error: Wrong controller type: ${controller.type}`);
    }
  }
};

export default Controller;
