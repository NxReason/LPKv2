import EventEmitter, { Events } from 'helpers/eventEmitter';
import RelationTypes from 'config/relationTypes';
import { arrToMap } from 'helpers';

class Device {
  constructor({ uuid, name, state, states, parameters }) {
    this.uuid = uuid;
    this.name = name;

    this.publicParameters = [];
    this.parameters = parameters.reduce((map, p) => {
      map[p.uuid] = p;
      if (p.type === 'public') { this.publicParameters.push(map[p.uuid]); }
      return map;
    }, {});

    this.states = arrToMap(states, 'uuid');
    this.activeStates = [];
    this._calcActiveStates();
  }

  getPublicInfo() {
    const states = this.activeStates
      .map(as => this.states[as].desc);
    return {
      uuid: this.uuid,
      name: this.name,
      states,
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

  _calcActiveStates() {
    this.activeStates = Object.values(this.states)
      .filter(s => this._isStateActive(s))
      .map(s => s.uuid);
  }

  _isStateActive(state) {
    return state.conditions.every(cond => {
      if (cond.state !== undefined) { return this._checkCondDependantState(cond); }
      else if (cond.parameter !== undefined) { return this._checkCondParameter(cond); }
      return false;
    });
  }

  _checkCondDependantState({ state, value }) {
    const stateInActive = this.activeStates.indexOf(state);
    return (value ? stateInActive >= 0 : stateInActive < 0);
  }

  _checkCondParameter({ parameter, rel, value }) {
    const checkParam = this.parameters[parameter].value;
    switch (rel) {
      case RelationTypes.GTE:
        return checkParam >= value;
        break;
      case RelationTypes.GT:
        return checkParam > value;
        break;
      case RelationTypes.EQ:
        return checkParam === value;
        break;
      case RelationTypes.LTE:
        return checkParam <= value;
        break;
      case RelationTypes.LT:
        return checkParam < value;
        break;
      default:
        throw new Error(`[Error] Invalid relation type in state condtion: ${rel}`);
    }
  }
}

export default Device;
