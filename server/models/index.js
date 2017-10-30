const stubModels = [
  {
    uuid: 0,
    name: 'model 1',

    // устройства
    devices: [
      {
        // параметры внешнего вида
        img: 'dvc.png',
        position: { x: 50, y: 150 },
        size: { w: 50, h: 120 },

        // характеристики устройства
        name: 'Device 1',
        uuid: 0,
        parameters: [
          { uuid: 0, name: 'prm11', value: 42.15 },
          { uuid: 1, name: 'prm12', value: 12.345 },
          { uuid: 2, name: 'prm13', value: 3546.35 }
        ]
      },

      {
        img: 'dvc.png',
        position: { x: 200, y: 200 },
        size: { w: 80, h: 150 },

        name: 'Device 2 with a very long name and some version456 numbers',
        uuid: 1,
        parameters: [
          { uuid: 0, name: 'prm21 with another long name and big value', value: 125125345.325 },
          { uuid: 1, name: 'prm22', value: 64.34 },
          { uuid: 2, name: 'prm23', value: 546.563 },
          { uuid: 3, name: 'prm24', value: 83.35 },
          { uuid: 4, name: 'prm25', value: 356.53 }
        ]
      },

      {
        img: 'dvc.png',
        position: { x: 150, y: 150 },
        size: { w: 40, h: 90 },

        name: 'Device 3',
        uuid: 2,
        parameters: [
          { uuid: 0, name: 'prm31', value: 345.15 },
          { uuid: 1, name: 'prm32', value: 345.356 },
          { uuid: 2, name: 'prm33', value: 3145.35 }
        ]
      }
    ],

    // соединения (визуальные связи устройств)
    connections: [
      [0, 1],
      [1, 2]
    ],

    // каналы (для обмена информацией)
    channels: [
      {
        type: 'DS',
        device: 0,
        parameter: 2,
        sensor: 0
      },

      {
        type: 'DS',
        device: 1,
        parameter: 0,
        sensor: 1
      },

      {
        type: 'CD',
        controller: 0,
        device: {
          uuid: 0,
          parameters: [
            { uuid: 0, fn: 'DIFF', value: 50 },
            { uuid: 1, fn: 'DIFF', value: 15 }
          ]
        }
      },

      {
        type: 'CD',
        controller: 1,
        device: {
          uuid: 1,
          parameters: [
            { uuid: 2, fn: 'LINEAR' }
          ]
        }
      }
    ],

    // датчики (отображение данных пользователю)
    sensors: [
      {
        uuid: 0,
        name: 'sensor 1',
        position: { x: 120, y: 30 },
        size: { w: 50, h: 25 },
        type: 'TEXT'
      },

      {
        uuid: 0,
        name: 'sensor 2',
        position: { x: 250, y: 50 },
        size: { w: 60, h: 35 },
        type: 'TEXT'
      }
    ],

    // контроллеры (устройства ввода пользователя)
    controllers: [
      {
        uuid: 0,
        name: 'ctrl 1',
        position: { x: 25, y: 25 },
        size: { w: 30, h: 15 },
        type: 'SWITCH',
        value: false
      },

      {
        uuid: 0,
        name: 'ctrl 1',
        position: { x: 55, y: 25 },
        size: { w: 50, h: 15 },
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
