import { arrToMap } from 'helpers';

class Device {
  constructor({ name, uuid, parameters, state }) {
    this.name = name;
    this.uuid = uuid;

    this.parameters = {};
    this.parameters.public = arrToMap(parameters.public, 'uuid');
    this.parameters.private = arrToMap(parameters.private, 'uuid');

    this.state = state;
  }
}

export default Device;
