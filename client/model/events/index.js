import Event from './event';

class EventsManager {
  constructor(events) {
    this.events = events.map(e => new Event(e));
  }

  start() {
    this.events.forEach(e => e.launch());
  }
}

export default EventsManager;
