import DAO from './dao';
import DependenciesManager from './dependencies';
import EventsManager from './events';

const Model = {
  init({ devices, dependencies, events }) {
    this.dao = new DAO({ devices });
    this.events = new EventsManager(events);
    this.dependencies = new DependenciesManager(dependencies);
  },

  getDeviceById(uuid) {
    return this.dao.devices[uuid];
  }
};

export default Model;
