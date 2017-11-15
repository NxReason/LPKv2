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
  return `
    <div class="controller" style="${style}" data-uuid="${uuid}">
      <span class="controller-name">${name}</span>
      <div class="controller-range">
        <span>${min}</span>
        <input name="ctr-${uuid}" type="range" min="${min}" max="${max}" value="${value}" data-type="ctr-range" data-uuid="${uuid}" />
        <span>${max}</span>
      </div>
      <div class="controller-range__current-value">
        <span>${value}</span>
      </div>
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
