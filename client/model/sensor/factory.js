import sensorTypes from '../../config/sensorTypes';
import TextSensor from './textSensor';

function SensorFactory(sensorData) {
  const { type } = sensorData;
  switch (type) {
    case sensorTypes.TEXT:
      return new TextSensor(sensorData);
    default:
      throw new Error(`Wrong sensor type: ${type}`);
  }
}

export default SensorFactory;
