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
    console.log(`Device: ${name}`);
    console.log('Properties');
    props.forEach((p) => {
      console.log(`\t${p.name}: ${p.value}`);
    });
    console.log(`State: ${state}`);
  }
};

const $close = $box.querySelector('.icon-close');
$close.addEventListener('click', () => {
  MessageBox.hide();
});

export default MessageBox;
