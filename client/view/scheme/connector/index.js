import { jsPlumb } from 'jsplumb';

export default function createConnection({ color: stroke = '#555', width: strokeWidth = 2, elements: [fst, snd] }) {
  jsPlumb.connect({
    source: `device-${fst.uuid}`,
    target: `device-${snd.uuid}`,
    endpoint: 'Blank',
    anchors: [fst.position, snd.position],
    connector: ['Flowchart', { cornerRadius: 5, gap: 10 }],
    paintStyle: { stroke, strokeWidth }
  });
}
