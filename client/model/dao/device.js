import EventEmitter, { Events } from 'helpers/eventEmitter';

class Device {
  constructor({ uuid, name, state, parameters }) {
    this.uuid = uuid;
    this.name = name;
    this.state = state;
    this.publicParameters = [];
    this.parameters = parameters.reduce((map, p) => {
      map[p.uuid] = p;
      if (p.type === 'public') { this.publicParameters.push(map[p.uuid]); }
      return map;
    }, {});
  }

  getPublicInfo() {
    return {
      uuid: this.uuid,
      name: this.name,
      state: this.state,
      parameters: this.publicParameters
    }
  }

  setParam(p, value) {
    const { uuid, name, value: oldValue } = this.parameters[p];
    this.parameters[uuid].value = value;
    EventEmitter.emit(Events.MODEL_PARAMETER_CHANGED, {
      device: this.uuid,
      parameter: { uuid, name, value, oldValue }
    });
  }

  changeParam(p, diff) {
    const newValue = this.parameters[p].value + diff;
    this.setParam(p, newValue);
  }
}

export default Device;
