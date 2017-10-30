import { arrToMap } from '../util';

class Device {
  constructor(data) {
    const { name, uuid, parameters } = data;
    this.name = name;
    this.uuid = uuid;
    this.parameters = arrToMap(parameters, 'uuid');
  }
}

export default Device;
