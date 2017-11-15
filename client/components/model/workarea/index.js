import { jsPlumb } from 'jsplumb';
import EventEmitter from '../../../util/eventEmitter';

const $area = document.getElementById('workarea');

function addComponent(component) {
  $area.innerHTML += component;
}

function createConnection({ color: stroke = '#555', width: strokeWidth = 2, elements: [fst, snd] }) {
  jsPlumb.connect({
    source: `device-${fst.uuid}`,
    target: `device-${snd.uuid}`,
    endpoint: 'Blank',
    anchors: [fst.position, snd.position],
    connector: ['Flowchart', { cornerRadius: 5, gap: 10 }],
    paintStyle: { stroke, strokeWidth }
  });
}

/**
 * Add model elements to DOM
 * Manage connections (via jsPlumb)
 */
const Workarea = {
  clear() {
    $area.innerHTML = '';
  },

  fill({ devices, connections, sensors, controllers }) {
    [devices, sensors, controllers].forEach((group) => {
      group.forEach((el) => {
        addComponent(el);
      });
    });

    connections.forEach((conn) => {
      createConnection(conn);
    });
  }
};

$area.addEventListener('click', (e) => {
  const { type } = e.target.dataset;

  if (!type) {
    return;
  }

  const { uuid } = e.target.dataset;

  switch (type) {
    case 'dvc':
      EventEmitter.emit('DVC_CLICKED', { uuid });
      break;
    case 'ctr-switch':
      const { checked } = e.target;
      EventEmitter.emit('CTR_SWITCH_CLICKED', { uuid, checked });
      break;
    case 'ctr-range':
      const { value } = e.target;
      EventEmitter.emit('CTR_RANGE_CLICKED', { uuid, value: parseInt(value, 10) });
      break;
    default:
      break;
  }
});

export default Workarea;
