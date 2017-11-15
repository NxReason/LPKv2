const $box = document.getElementById('message-box');
const $boxInfo = $box.querySelector('.message-box__info');


function msgHtml(msg, level) {
  return `
    <p class="message-box-text">
      <i class="icon icon-${level}"></i>
      <span>${msg}</span>
    </p>
  `;
}

function deviceHtml(name, props, state) {
  const propsList = Object.values(props).map(prop => `<li>${prop.name}: <b>${prop.value.toFixed(2)}</b></li>`).join('');
  return `
    <h2 class="message-box-subheader">${name}</h2>

    <p class="message-box-text">Свойства устройства:</p>
    <ul class="message-box-props">
      ${propsList}
    </ul>

    <p class="message-box-state">${state}</p>
  `;
}

const MessageBox = {
  show() {
    $box.style.display = 'block';
  },

  hide() {
    $box.style.display = 'none';
  },

  warn(msg) {
    MessageBox.show();
    $boxInfo.innerHTML = msgHtml(msg, 'warn');
  },

  info(msg) {
    MessageBox.show();
    $boxInfo.innerHTML = msgHtml(msg, 'info');
  },

  showDevice({ name, parameters: { public: props }, state }) {
    MessageBox.show();
    $boxInfo.innerHTML = deviceHtml(name, props, state);
  }
};

const $close = $box.querySelector('.icon-close');
$close.addEventListener('click', () => {
  MessageBox.hide();
});

export default MessageBox;
