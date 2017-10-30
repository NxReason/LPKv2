class Device {
  constructor(data) {
    const {
      name,
      uuid,
      parameters,
      img,
      position,
      size
    } = data;
    this.name = name;
    this.uuid = uuid;
    this.parameters = parameters;
    this.img = img;
    this.position = position;
    this.size = size;
  }

  setParameter(name, value) {
    if (this.parameters[name] === undefined) {
      console.warn('Trying to set undefined device parameter');
      return this;
    }
    this.parameters[name] = value;
    return this;
  }

  addParameter(name, initalValue = null) {
    this.parameters[name] = initalValue;
    return this;
  }
}

export default Device;
