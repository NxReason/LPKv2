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

    console.log(this);
  }

  getPublicInfo() {
    return {
      uuid: this.uuid,
      name: this.name,
      state: this.state,
      parameters: this.publicParameters
    }
  }

  setParam(p, val) {

  }

  changeParam(p, val) {
    this.parameters[p].value += val;
  }
}

export default Device;
