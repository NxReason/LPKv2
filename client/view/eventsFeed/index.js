import { getCurrentTimeString } from 'helpers';

function template(msg, type, showTime = false) {
  const $li = document.createElement('li');
  $li.classList.add('event-desc');

  let tmpl = `
    <p>
      <i class="icon icon-${type}"></i>
      ${msg}
    </p>
  `;

  if (showTime) {
    tmpl += `<p class="event-desc__time">${getCurrentTimeString()}</p>`;
  }

  $li.innerHTML = tmpl;

  return $li;
}

const $feed = document.getElementById('events-feed');

const EventsFeed = {
  $firstElement: null,

  showEvent({ msg, type = 'info' }) {
    const $newElement = template(msg, type, true);
    $feed.insertBefore($newElement , this.$firstElement);
    this.$firstElement = $newElement;
  },

  clear() {
    $feed.innerHTML = '';
  },
};

export default EventsFeed;
