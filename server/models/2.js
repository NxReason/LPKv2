module.exports = {
  uuid: 'model1',
  name: 'model2',
  devices: [
    {
      img: '1.png',
      position: { x: 20, y: 20 },
      size: { w: 30, h: 100 },

      name: 'Шнековый транспортер с воздушным шлюзом',
      uuid: 'device20',
      parameters: [
        { uuid: '0', name: 'Масса щепы', value: 0, type: 'public' },
        { uuid: '1', name: 'Уровень выхода газов', value: 0.15, type: 'public' },
        { uuid: '2', name: 'Разряжение', value: 0.60, type: 'public' },
        { uuid: '3', name: 'Число оборотов', value: 400, type: 'public' },
      ],
      states: [
        {
          uuid: 'state01',
          desc: 'Отсутствует подача щепы',
          conditions: [
            { parameter: '0', rel: 'eq', value: 0 },
          ]
        },

        {
          uuid: 'state02',
          desc: 'Нехватка мощности для обработки поступающей щепы',
          conditions: [
            { parameter: '0', rel: 'gte', value: 80 },
            { parameter: '3', rel: 'lt', value: 600 },
          ]
        }
      ],
    },

    {
      img: '2.png',
      position: { x: 295, y: 220 },
      size: { w: 40, h: 120 },

      name: 'Бункер для щепы Diamondback',
      uuid: 'device21',
      parameters: [
        { uuid: '0', name: 'Температура щепы', value: 90, type: 'public' },
        { uuid: '1', name: 'Время пребывания пара в бункере', value: 4, type: 'public' },
        { uuid: '2', name: 'Расход пара', value: 15, type: 'public' },
        { uuid: '3', name: 'Уровень щепы', value: 25, type: 'private' },
        { uuid: '4', name: 'Уровень колебаний', value: 0.15, type: 'public' },
        { uuid: '5', name: 'Температура в бункере', value: 68, type: 'private' },
        { uuid: '6', name: 'Давление пара', value: 350, type: 'private' },
      ],
      states: [
        {
          uuid: 'state11',
          desc: 'Повышенный расход пара для текущей температуры',
          conditions: [
            { parameter: '5', rel: 'gte', value: 80 },
            { parameter: '2', rel: 'gte', value: 10 }
          ]
        }
      ],
    },

    {
      img: '3.png',
      position: { x: 300, y: 20 },
      size: { w: 30, h: 100 },

      name: 'Вытяжное устройство',
      uuid: 'device22',
      parameters: [
        { uuid: '0', name: 'Температура газов', value: 40, type: 'public' },
        { uuid: '1', name: 'Высота водяного столба (уровень вакуума)', value: 35, type: 'public' },
        { uuid: '2', name: 'Степень разбавления сернистых газов', value: 0.25, type: 'public' },
        { uuid: '3', name: 'Наличие газов в конвеере щепы', value: false, type: 'public' }
      ],
      states: [
        {
          uuid: 'state21',
          desc: 'Уровень вакууа ниже нормы',
          conditions: [
            { parameter: '1', rel: 'lt', value: 20 }
          ]
        },

        {
          uuid: 'state22',
          desc: 'Уровень вакуума выше нормы',
          conditions: [
            { parameter: '1', rel: 'gt', value: 55 }
          ]
        }
      ],
    },

    {
      img: '1.png',
      position: { x: 575, y: 220 },
      size: { w: 40, h: 120 },

      name: 'Шнековый дозатор щепы',
      uuid: 'device23',
      parameters: [
        { uuid: '0', name: 'Уровень щепы', value: 0.8, type: 'public' },
        { uuid: '1', name: 'Частота вращения дозатора', value: 250, type: 'public' }
      ],
      states: [],
    },

    {
      img: '2.png',
      position: { x: 580, y: 420 },
      size: { w: 30, h: 100 },

      name: 'Труба для щепы',
      uuid: 'device24',
      parameters: [
        { uuid: '0', name: 'Уровень щепы', value: 40, type: 'public' },
        { uuid: '1', name: 'Уровень щелока', value: 60, type: 'private' },
        { uuid: '2', name: 'Наличие неисправностей/засорения', value: false, type: 'public' },
        { uuid: '3', name: 'Сливной клапан открыт', value: 0, type: 'private' },
      ],
      states: [
        {
          uuid: 'state41',
          desc: 'Аварийный режим работы трубы',
          conditions: [
            { parameter: '2', rel: 'eq', value: true },
            { parameter: '1', rel: 'gt', value: 50 },
          ]
        }
      ],
    },

    {
      img: '3.png',
      position: { x: 295, y: 410 },
      size: { w: 40, h: 120 },

      name: 'Насос для щепы',
      uuid: 'device25',
      parameters: [
        { uuid: '0', name: 'Частота вращения', value: 800, type: 'public' },
        { uuid: '1', name: 'Уровень расхода', value: 70, type: 'public' },
        { uuid: '2', name: 'Температура щепы', value: 90, type: 'public' },
        { uuid: '3', name: 'Температура щелока', value: 50, type: 'public' },
        { uuid: '4', name: 'Давление щелока', value: 150, type: 'public' }
      ],
      states: [
        {
          uuid: 'state51',
          desc: 'Недостаточное давление щелока',
          conditions: [
            { parameter: '4', rel: 'lte', value: 100 }
          ]
        }
      ],
    },

    {
      img: '1.png',
      position: { x: 20, y: 410 },
      size: { w: 40, h: 120 },

      name: 'Линия загрузочной циркуляции и обратный верхний сепаратор',
      uuid: 'device26',
      parameters: [
        { uuid: '0', name: 'Давление', value: 550, type: 'public' }
      ],
      states: [],
    },
  ],
  connections: [
    { color: '#888', width: 5, elements: [{ uuid: 'device20', position: 'Bottom' }, { uuid: 'device21', position: 'Left'}] },
    { color: '#888', width: 5, elements: [{ uuid: 'device21', position: 'Top' }, { uuid: 'device22', position: 'Bottom'}] },
    { color: '#888', width: 5, elements: [{ uuid: 'device21', position: 'Right' }, { uuid: 'device23', position: 'Left'}] },
    { color: '#888', width: 5, elements: [{ uuid: 'device23', position: 'Bottom' }, { uuid: 'device24', position: 'Top'}] },
    { color: '#888', width: 5, elements: [{ uuid: 'device24', position: 'Left' }, { uuid: 'device25', position: 'Right'}] },
    { color: '#888', width: 5, elements: [{ uuid: 'device25', position: 'Left' }, { uuid: 'device26', position: 'Right'}] },
  ],
  sensors: [
    {
      uuid: 'sensor0',
      name: 'Уровень щепы',
      position: { x: 340, y: 220 },
      size: { w: 50, h: 25 },
      type: 'TEXT',

      props: {
        value: 25,
        ext: '%'
      }
    },

    {
      uuid: 'sensor1',
      name: 'Температура в бункере',
      position: { x: 340, y: 290 },
      size: { w: 60, h: 25 },
      type: 'TEXT',

      props: {
        value: 68,
        ext: '&#8451',
      }
    },

    {
      uuid: 'sensor2',
      name: 'Давление пара',
      position: { x: 340, y: 160 },
      size: { w: 60, h: 25 },
      type: 'TEXT',

      props: {
        value: 150,
        ext: 'p'
      }
    },

    {
      uuid: 'sensor3',
      name: 'LC-3026',
      position: { x: 500, y: 400 },
      size: { w: 60, h: 25 },
      type: 'TEXT',

      props: {
        value: 60,
        ext: '%'
      }
    },

    {
      uuid: 'sensor4',
      name: 'PI-3054',
      position: { x: 220, y: 410 },
      size: { w: 60, h: 25 },
      type: 'TEXT',

      props: {
        value: 150,
        ext: 'p'
      }
    },
  ],
  controllers: [
    {
      uuid: 'ctr0',
      name: 'SS-3010',
      position: { x: 60, y: 20 },
      type: 'RANGE',
      value: 400,
      limits: { min: 0, max: 1200 }
    },

    {
      uuid: 'ctr1',
      name: 'Подача щепы',
      position: { x: 60, y: 120 },
      type: 'SWITCH',
      value: false,
    },

    {
      uuid: 'ctr2',
      name: 'Клапан 1',
      position: { x: 140, y: 290 },
      type: 'SWITCH',
      value: true,
    },

    {
      uuid: 'ctr3',
      name: 'Клапан 2',
      position: { x: 210, y: 290 },
      type: 'SWITCH',
      value: true,
    },

    {
      uuid: 'ctr4',
      name: 'Регулировка давления',
      position: { x: 150, y: 200 },
      type: 'RANGE',
      value: 150,
      limits: { min: 0, max: 400 },
    },

    {
      uuid: 'ctr5',
      name: '1 Контур',
      position: { x: 350, y: 20 },
      type: 'RANGE',
      value: 35,
      limits: { min: 0, max: 80 },
    },

    {
      uuid: 'ctr6',
      name: 'SI-3019',
      position: { x: 650, y: 200 },
      type: 'RANGE',
      value: 100,
      limits: { min: 0, max: 300 },
    },

    {
      uuid: 'ctr7',
      name: 'SI-3020',
      position: { x: 650, y: 285 },
      type: 'RANGE',
      value: 150,
      limits: { min: 0, max: 300 },
    },

    {
      uuid: 'ctr8',
      name: 'Регулятор щелока',
      position: { x: 630, y: 400 },
      type: 'RANGE',
      value: 60,
      limits: { min: 0, max: 100 },
    },

    {
      uuid: 'ctr9',
      name: 'Сливной клапан',
      position: { x: 630, y: 490 },
      type: 'SWITCH',
      value: false
    },

    {
      uuid: 'ctr10',
      name: 'Привод вращения',
      position: { x: 340, y: 390 },
      type: 'RANGE',
      value: 800,
      limits: { min: 0, max: 1500 },
    },

    {
      uuid: 'ctr11',
      name: 'Регулятор давления',
      position: { x: 140, y: 480 },
      type: 'RANGE',
      value: 150,
      limits: { min: 50, max: 300 },
    },
  ],
  dependencies: [
    {
      type: 'CD',
      controller: 'ctr0',
      device: {
        uuid: 'device20',
        parameters: [
          { uuid: '3', fn: 'LINEAR' }
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr1',
      device: {
        uuid: 'device20',
        parameters: [
          { uuid: '0', fn: 'DIFF', value: 50 }
        ]
      }
    },

    {
      // устройство - датчик
      type: 'DS',
      device: 'device21',
      parameter: '3',
      sensor: 'sensor0',
    },

    {
      type: 'DS',
      device: 'device21',
      parameter: '5',
      sensor: 'sensor1',
    },

    {
      type: 'CD',
      controller: 'ctr2',
      device: {
        uuid: 'device21',
        parameters: [
          { uuid: '2', fn: 'DIFF', value: 7.5 }
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr3',
      device: {
        uuid: 'device21',
        parameters: [
          { uuid: '2', fn: 'DIFF', value: 7.5 }
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr4',
      device: {
        uuid: 'device21',
        parameters: [
          { uuid: '6', fn: 'LINEAR' }
        ]
      }
    },

    {
      type: 'DS',
      device: 'device21',
      parameter: '6',
      sensor: 'sensor2'
    },

    {
      type: 'CD',
      controller: 'ctr5',
      device: {
        uuid: 'device22',
        parameters: [
          { uuid: '1', fn: 'LINEAR' },
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr6',
      device: {
        uuid: 'device23',
        parameters: [
          { uuid: '1', fn: 'LINEAR' },
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr7',
      device: {
        uuid: 'device23',
        parameters: [
          { uuid: '1', fn: 'LINEAR' }
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr8',
      device: {
        uuid: 'device24',
        parameters: [
          { uuid: '1', fn: 'LINEAR' },
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr9',
      device: {
        uuid: 'device24',
        parameters: [
          { uuid: '3', fn: 'DIFF', value: 1 },
        ]
      }
    },

    {
      type: 'DS',
      device: 'device24',
      parameter: '1',
      sensor: 'sensor3'
    },

    {
      type: 'DS',
      device: 'device25',
      parameter: '4',
      sensor: 'sensor4'
    },

    {
      type: 'CD',
      controller: 'ctr10',
      device: {
        uuid: 'device25',
        parameters: [
          { uuid: '0', fn: 'LINEAR' }
        ]
      }
    },

    {
      type: 'CD',
      controller: 'ctr11',
      device: {
        uuid: 'device25',
        parameters: [
          { uuid: '4', fn: 'LINEAR' }
        ]
      }
    },
  ],
  events: [
    {
      uuid: 'event0',
      name: 'Разгерметизация бункера',
      type: 'warn',
      time: 5000,
      effects: [
        { device: 'device22', parameter: '1', type: 'change', value: 30 }
      ],
    },

    {
      uuid: 'event1',
      name: 'Накопление массы щепы на шнековом транспортере',
      type: 'info',
      time: 10000,
      effects: [
        { device: 'device20', parameter: '0', type: 'change', value: 85 }
      ],
    },

    {
      uuid: 'event2',
      name: 'Повышение температуры в бункере для щепы',
      type: 'warn',
      time: 15000,
      effects: [
        { device: 'device21', parameter: '5', type: 'set', value: 90 }
      ],
    },

    {
      uuid: 'event3',
      name: 'Засорение трубы для щепы',
      type: 'warn',
      time: 20000,
      effects: [
        { device: 'device24', parameter: '2', type: 'set', value: true }
      ],
    },

    {
      uuid: 'event4',
      name: 'Понижение давления щелока в насосе для щепы',
      type: 'info',
      time: 25000,
      effects: [
        { device: 'device25', parameter: '4', type: 'change', value: -100 },
      ],
    }
  ]
};
