import controllerTypes from '../../../config/controllerTypes';
import { getPositionString } from '../../../util';

function getSwitchControllerHtml({ uuid, name, position, value }) {
  const style = getPositionString(position);
  return `
    <div class="controller" style="${style} data-uuid="${uuid}">
      <span class="controller-name">${name}</span>
      <label class="controller-switch">
        <input name="ctr-${uuid}" type="checkbox" ${value ? 'checked' : ''} data-type="ctr-switch" data-uuid="${uuid}" />
        <div class="controller-switch__slider"></div>
      </label>
    </div>
  `;
}

function getRangeControllerHtml({ uuid, name, position, value, limits: { min, max } }) {
  const style = getPositionString(position);
  return 'template';
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
  },

  setRangeValue({ uuid, value }) {
    const $ctr = document.getElementById(`ctr-${uuid}`);
    const $value = $ctr.querySelector('.controller-range__current-value > span');
    $value.textContent = value;
  }
};

export default Controller;
