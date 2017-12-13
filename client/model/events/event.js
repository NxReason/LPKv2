import EventEmitter, { Events } from 'helpers/eventEmitter';

class Event {
  constructor({ uuid, name, type, time, effects }) {
    this.uuid = uuid;
    this.name = name;
    this.type = type;
    this.time = time;
    this.effects = effects;

    this.timer = null;
  }

  launch() {
    this.timer = setTimeout(() => {
      EventEmitter.emit(Events.EVENT_TRIGGERED, {
        name: this.name,
        type: this.type,
        effects: this.effects,
      });
    }, this.time);
  }

  abort() {
    clearTimeout(this.timer);
  }
}

export default Event;
