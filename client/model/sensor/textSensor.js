import Sensor from './sensor';

class TextSensor extends Sensor {
  constructor({ name, uuid }) {
    super({ name, uuid });
  }
}

export default TextSensor;
