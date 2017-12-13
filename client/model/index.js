import DAO from './dao';
import DependenciesManager from './dependencies';
import EventsManager from './events';

const Model = {
  init({ devices, dependencies, events }) {
    this.dao = new DAO(devices);
    this.events = new EventsManager(events);
    this.events.start();
    this.dependencies = new DependenciesManager(dependencies);
  },

  getDeviceById(uuid) {
    return this.dao.devices[uuid];
  },

  handleControllerChange(ctrData) {
    const depsResponse = this.dependencies.getResponseCD(ctrData);
    depsResponse.forEach(({ device, type, parameter, value }) => {
      this.dao.devices[device][type](parameter, value);
    });
  },

  getSensorsUpdate(newParamData) {
    return this.dependencies.getResponseDS(newParamData);
  },

  handleDeviceInterrelations(newParamData) {
    const depsResponse = this.dependencies.getResponseDD(newParamData);
    depsResponse.forEach(({ device, type, parameter, value }) => {
      this.dao.devices[device][type](parameter, value);
    });
  },

  handleEvent(data) {
    this.dao.handleEvent(data);
  }
};

export default Model;
