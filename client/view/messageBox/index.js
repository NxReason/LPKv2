function msgHtml(msg, level) {
  return `
    <p class="message-box-text">
      <i class="icon icon-${level}"></i>
      <span>${msg}</span>
    </p>
  `;
}

function formatProp(name, value) {
  let valueStr = 'Неизвестно';
  if (typeof value === 'number') {
    valueStr = value.toFixed(2);
  } else if (typeof value === 'boolean') {
    valueStr = value ? '+' : '-';
  }
  return `${name}: <b>${valueStr}</b>`;
}

function formatStates(states) {
  if (!states || states.length === 0) {
    return '-';
  }

  return states.map(s => `<li>${s}</li>`).join('');
}

function deviceHtml(name, props, states) {
  const propsList = Object.values(props).map(p => `<li data-uuid="${p.uuid}">${formatProp(p.name, p.value)}</li>`).join('');
  return `
    <h2 class="message-box-subheader">${name}</h2>

    <p class="message-box-text">Свойства устройства:</p>
    <ul class="message-box-props">
      ${propsList}
    </ul>

    <p class="message-box-text">Активные состояния устройства:</p>
    <ul class="message-box-state">${formatStates(states)}</ul>
  `;
}

const $box = document.getElementById('message-box');
const $boxInfo = $box.querySelector('.message-box__info');

const MessageBox = {
  // props
  hidden: true,
  currentDevice: null,

  // methods
  show() {
    $box.style.display = 'block';
    this.hidden = false;
  },

  hide() {
    $box.style.display = 'none';
    this.hidden = true;
  },

  _plainMessage(msg, className) {
    this.currentDevice = null;
    MessageBox.show();
    $boxInfo.innerHTML = msgHtml(msg, className);
  },

  warn(msg) {
    this._plainMessage(msg, 'warn');
  },

  info(msg) {
    this._plainMessage(msg, 'info');
  },

  showDevice({ uuid, name, parameters, states }) {
    MessageBox.show();
    this.currentDevice = uuid;
    $boxInfo.innerHTML = deviceHtml(name, parameters, states);
  },

  updateDeviceParameter({ device, parameter: { uuid, name, value } }) {
    // Ничего не делать, если устройство не показано в данный момент
    if (!this._shouldUpdateDevice(device)) { return; }

    const $li = $boxInfo.querySelector(`li[data-uuid='${uuid}']`);

    if (!$li) { return; }

    $li.innerHTML = formatProp(name, value);
  },

  updateDeviceStates({ device, states, statesDiff }) {
    if(!this._shouldUpdateDevice(device)) { return; }
    const $boxState = $box.querySelector('.message-box-state');
    $boxState.innerHTML = formatStates(states.map(s => s.desc));
  },

  _shouldUpdateDevice(device) {
    return (!this.hidden && this.currentDevice === device);
  }
};

const $close = $box.querySelector('.icon-close');
$close.addEventListener('click', () => {
  MessageBox.hide();
});

export default MessageBox;
