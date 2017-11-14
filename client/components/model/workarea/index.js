import { jsPlumb } from 'jsplumb';

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

export default Workarea;
