function msgHtml(msg, level) {
  return `
    <p class="message-box-text">
      <i class="icon icon-${level}"></i>
      <span>${msg}</span>
    </p>
  `;
}

function propFormat(name, value) {
  let valueStr = 'Неизвестно';
  if (typeof value === 'number') {
    valueStr = value.toFixed(2);
  } else if (typeof value === 'boolean') {
    valueStr = value ? 'ON' : 'OFF';
  }
  return `${name}: <b>${valueStr}</b>`;
}

function deviceHtml(name, props, state) {
  const propsList = Object.values(props).map(p => `<li data-uuid="${p.uuid}">${propFormat(p.name, p.value)}</li>`).join('');
  return `
    <h2 class="message-box-subheader">${name}</h2>

    <p class="message-box-text">Свойства устройства:</p>
    <ul class="message-box-props">
      ${propsList}
    </ul>

    <p class="message-box-state">${state}</p>
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

  showDevice({ uuid, name, parameters, state }) {
    MessageBox.show();
    this.currentDevice = uuid;
    $boxInfo.innerHTML = deviceHtml(name, parameters, state);
  },

  updateDevice({ device, parameter: { uuid, name, value } }) {
    // Ничего не делать, если устройство не показано в данный момент
    if (this.hidden || (this.currentDevice !== device)) { return; }

    const $li = $boxInfo.querySelector(`li[data-uuid='${uuid}']`);

    if (!$li) { return; }

    $li.innerHTML = propFormat(name, value);
  },
};

const $close = $box.querySelector('.icon-close');
$close.addEventListener('click', () => {
  MessageBox.hide();
});

export default MessageBox;
