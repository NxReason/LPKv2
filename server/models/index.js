const stubModels = [
  {
    uuid: 'model0',
    name: 'model 1',

    // устройства
    devices: [
      {
        // параметры внешнего вида
        img: '1.png',
        position: { x: 50, y: 150 },
        size: { w: 50, h: 120 },

        // характеристики устройства
        name: 'Device 1',
        uuid: 'device0',
        parameters: [
          { uuid: '0', name: 'prm11', value: 42.15, type: 'public' },
          { uuid: '1', name: 'prm12', value: 12.345, type: 'public' },
          { uuid: '2', name: 'prm13', value: 3546.35, type: 'public' },
          { uuid: '3', name: 'priv11', value: 125.15, type: 'private' },
          { uuid: '4', name: 'priv12', value: 3456.5, type: 'private' }
        ],
        state: 'regular state'
      },

      {
        img: '2.png',
        position: { x: 400, y: 200 },
        size: { w: 40, h: 200 },

        name: 'Device 2 with a very long name and some version456 numbers',
        uuid: 'device1',
        parameters: [
          { uuid: '0', name: 'prm21 with another long name and big value', value: 125125345.325, type: 'public' },
          { uuid: '1', name: 'prm22', value: 64.34, type: 'public' },
          { uuid: '2', name: 'prm23', value: 546.563, type: 'public' },
          { uuid: '3', name: 'prm24', value: 83.35, type: 'public' },
          { uuid: '4', name: 'prm25', value: 356.53, type: 'public' },
          { uuid: '5', name: 'priv21', value: 345.435, type: 'private' },
          { uuid: '6', name: 'priv22', value: 25.5, type: 'private' }
        ],
        state: 'invalid state'
      },

      {
        img: '3.png',
        position: { x: 250, y: 50 },
        size: { w: 30, h: 150 },

        name: 'Device 3',
        uuid: 'device2',
        parameters: [
          { uuid: '0', name: 'prm31', value: 345.15, type: 'public' },
          { uuid: '1', name: 'prm32', value: 345.356, type: 'public' },
          { uuid: '2', name: 'prm33', value: 3145.35, type: 'public' },
          { uuid: '3', name: 'priv31', value: 324.5, type: 'private' },
          { uuid: '4', name: 'priv32', value: 456.534, type: 'private' }
        ],
        state: 'regular state'
      }
    ],

    // соединения (визуальные связи устройств)
    connections: [
      { color: '#888', width: 5, elements: [{ uuid: 'device0', position: 'Right' }, { uuid: 'device1', position: 'Left' }] },
      { color: '#999', width: 3, elements: [{ uuid: 'device1', position: 'Top' }, { uuid: 'device2', position: 'Right' }] }
    ],

    // зависимости (для обмена информацией)
    dependencies: [
      // {
      //   type: 'DS',
      //   device: 0,
      //   parameter: 2,
      //   sensor: 0
      // },
      //
      // {
      //   type: 'DS',
      //   device: 1,
      //   parameter: 0,
      //   sensor: 1
      // },

      {
        type: 'CD',
        controller: 'ctr0',
        device: {
          uuid: 'device0',
          parameters: [
            { uuid: '0', fn: 'DIFF', value: 50 },
            { uuid: '1', fn: 'DIFF', value: 15 }
          ]
        }
      },

      {
        type: 'CD',
        controller: 'ctr1',
        device: {
          uuid: 'device1',
          parameters: [
            { uuid: '1', fn: 'LINEAR' }
          ]
        }
      }
    ],

    // события
    events: [
      {},
      {}
    ],

    // датчики (отображение данных пользователю)
    sensors: [
      {
        uuid: 'sensor0',
        name: 'sensor 1',
        position: { x: 37, y: 100 },
        size: { w: 50, h: 25 },
        type: 'TEXT',

        props: {
          value: 151515,
          ext: 'cstm'
        }
      },

      {
        uuid: 'sensor1',
        name: 'sensor 2',
        position: { x: 475, y: 250 },
        size: { w: 60, h: 35 },
        type: 'TEXT',

        props: {
          value: 42,
          ext: '&#8451'
        }
      }
    ],

    // контроллеры (устройства ввода пользователя)
    controllers: [
      {
        uuid: 'ctr0',
        name: 'medium size name',
        position: { x: 20, y: 285 },
        type: 'SWITCH',
        value: false
      },

      {
        uuid: 'ctr1',
        name: 'really long controller name which cant be placed in single line',
        position: { x: 400, y: 25 },
        type: 'RANGE',
        value: 15,
        limits: { min: 0, max: 120 }
      }
    ]
  },

  { name: 'model2', uuid: 1 }
];

function getAll() {
  return stubModels;
}

function getById(id) {
  const model = stubModels.find(m => m.uuid === id);
  return model;
}

module.exports = {
  getAll,
  getById
};
