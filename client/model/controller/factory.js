import controllerTypes from '../../config/controllerTypes';
import SwitchController from './switchController';
import RangeController from './rangeController';

function ControllerFactory(controllerData) {
  const { type } = controllerData;
  switch (type) {
    case controllerTypes.SWITCH:
      return new SwitchController(controllerData);
    case controllerTypes.RANGE:
      return new RangeController(controllerData);
    default:
      throw new Error(`Wrong controller type: ${type}`);
  }
}

export default ControllerFactory;
