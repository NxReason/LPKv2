import controllerTypes from 'config/controllerTypes';
import SwitchController from './switchController';
import RangeController from './rangeController';

const ControllerFactory = {
  init(parent, id, payload) {
    switch (payload.type) {
      case controllerTypes.SWITCH:
        return new SwitchController(parent, id, payload);
      case controllerTypes.RANGE:
        return new RangeController(parent, id, payload);
      default:
        throw new Error(`Error: Wrong controller type: ${controller.type}`);
    }
  },
};

export default ControllerFactory;
