import sensorTypes from '../../../config/sensorTypes';

function getTextSensorHtml({ uuid, position: { y: top, x: left }, props }) {
  return `
    <div class="sensor sensor-text" style="position: absolute; top: ${top}px; left: ${left}px" data-uuid=${uuid}>
      ${props.value}
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
