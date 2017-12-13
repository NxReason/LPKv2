import { getCurrentTimeString } from 'helpers';

// Common wrapper for all nodes in events feed
function wrap(str) {
  const $li = document.createElement('li');
  $li.classList.add('event-desc');
  $li.innerHTML = str;
  return $li;
}

// Node with current time
function getTimeHtml() {
  return `<p class="event-desc__time">${getCurrentTimeString()}</p>`;
}

// Event
function eventTemplate(msg, type, showTime = true) {
  let template = `
    <p>
      <i class="icon icon-${type}"></i>
      ${msg}
    </p>
  `;

  if (showTime) { template += getTimeHtml(); }

  return wrap(template);
}

// States
function getStateHtml({ desc }) {
  return `<li>${desc}</li>`
}

function statesListTemplate(header, list) {
  return `
    <h4>${header}</h4>
    <ul>
        ${list.map(getStateHtml).join('')}
    </ul>
  `;
}

function statesTemplate(name, statesDiff, showTime = true) {
  let template = `<h4>${name}</h4>`;
  if (statesDiff.first.length !== 0) {
    template += statesListTemplate('Выход из состояний:', statesDiff.first);
  }
  if (statesDiff.second.length !== 0) {
    template += statesListTemplate('Новые активные состояния:', statesDiff.second);
  }

  if (showTime) { template += getTimeHtml(); }

  return wrap(template);
}

// Module
const $feed = document.getElementById('events-feed');

function prependElement(fn) {
  const $newElement = fn();
  $feed.insertBefore($newElement, EventsFeed.$firstElement);
  EventsFeed.$firstElement = $newElement;
}

const EventsFeed = {
  $firstElement: null,

  showEvent({ msg, type = 'info' }) {
    prependElement(() => eventTemplate(msg, type));
  },

  showDeviceStatesDiff({ name, statesDiff }) {
    if (statesDiff.first.length === 0 && statesDiff.second.length === 0) {
      return;
    }
    prependElement(() => statesTemplate(name, statesDiff));
  },

  clear() {
    $feed.innerHTML = '';
  },
};

export default EventsFeed;
