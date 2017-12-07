import { getPositionString } from '../../../util/';
import sensorTypes from '../../../config/sensorTypes';

import Component from 'view/model/component';

// function getTextSensorHtml({ uuid, position, props }) {
//   const style = getPositionString(position);
//   return `
//     <div class="sensor sensor-text" style="${style}" data-uuid=${uuid}>
//       <div>
//         <span class="sensor-text__value">${props.value}</span>
//         <span>${props.ext}</span>
//       </div>
//     </div>
//   `;
// }

// const Sensor = {
//   getHtml(sensor) {
//     switch (sensor.type) {
//       case sensorTypes.TEXT:
//         return getTextSensorHtml(sensor);
//       default:
//         throw new Error(`Error: Invalid sensor type: ${sensor.type}`);
//     }
//   }
// };

class Sensor extends Component {
  constructor(parent, id, payload) {
    super(parent, id);
  }
}

class TextSensor extends Sensor {
  constructor(parent, id, payload) {

  }
}

export default Sensor;
