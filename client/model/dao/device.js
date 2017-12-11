import EventEmitter, { Events } from 'helpers/eventEmitter';

class Device {
  constructor({ uuid, name, state, states, parameters }) {
    this.uuid = uuid;
    this.name = name;
    this.states = states;
    this.activeStates = []; // todo: implement method for evaluating states
    this.publicParameters = [];
    this.parameters = parameters.reduce((map, p) => {
      map[p.uuid] = p;
      if (p.type === 'public') { this.publicParameters.push(map[p.uuid]); }
      return map;
    }, {});
  }

  getPublicInfo() {
    const states = this.activeStates
      .map(as => this.states[as].desc);
    return {
      uuid: this.uuid,
      name: this.name,
      states: ['msg1', 'msg2'],
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
