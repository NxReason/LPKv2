import sensorTypes from '../../../config/sensorTypes';
import { getStyleString } from '../../../util';


function getTextSensorHtml({ uuid, position, size }) {
  const style = getStyleString({ position, size });

  return `
    <div class="sensor sensor-text" style="${style}" data-uuid=${uuid}>
      
    </div>
  `;
}

const Sensor = {
  getHtml(sensor) {
    switch (sensor.type) {
      case sensorTypes.TEXT:
        return getTextSensorHtml(sensor);
      default:
        throw new Error(`Error: Invalid sensor type: ${sensor.type}`);
    }
  }
};

export default Sensor;
