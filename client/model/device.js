import { arrToMap } from '../util';

class Device {
  constructor(data) {
    const { name, uuid, parameters } = data;
    this.name = name;
    this.uuid = uuid;

    this.parameters = {};
    this.parameters.public = arrToMap(parameters.public, 'uuid');
    this.parameters.private = arrToMap(parameters.private, 'uuid');
  }
}

export default Device;
