import Model from '../model';
import Channels from '../channels';


const Dispatcher = {
  init(data) {
    this.model = new Model(data);
    Channels.init(data.channels);
  },

  getDevice(uuid) {
    return this.model.getDevice(uuid);
  },

  deviceParamChange(data) {
    this.model.setDeviceParam(data);
  },

  rangeControllerChange({ uuid, value }) {
    if (Channels.cd.isSource(uuid)) {
      const oldValue = this.model.getController(uuid).value;
      Channels.cd.updateDevices({ uuid, oldValue, newValue: value });
    }
    this.model.setControllerValue({ uuid, value });
  },

  switchControllerChange() {}
};

export default Dispatcher;
