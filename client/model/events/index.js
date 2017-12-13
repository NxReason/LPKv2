import Event from './event';
import { arrToMap } from "helpers/index";

class EventsManager {
  constructor(events) {
    this.events = events.map(e => new Event(e));
    console.log(this.events);
  }

  start() {
    this.events.forEach(e => e.launch());
  }
}

export default EventsManager;
