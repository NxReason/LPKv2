import controllerTypes from 'config/controllerTypes';
import SwitchController from './switchController';
import RangeController from './rangeController';

const ControllerFactory = {
  init(parent, payload) {
    switch (payload.type) {
      case controllerTypes.SWITCH:
        return new SwitchController(parent, payload);
      case controllerTypes.RANGE:
        return new RangeController(parent, payload);
      default:
        throw new Error(`[Error] Wrong controller type: ${payload.type}`);
    }
  },
};

export default ControllerFactory;
