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
  },

  handleControllerChange(data) {
    const actionsCD = this.dependencies.getActionsCD(data);
    console.log(actionsCD);
    actionsCD.forEach(({ device, type, parameter, value }) => {
      this.dao.devices[device][type](parameter, value);
    });
  },

  handleParameterChange(data) {
    // TODO
  }
};

export default Model;
