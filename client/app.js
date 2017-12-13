/**
 * Application entry point
 */

import './view/style.scss';

import EventEmitter, { Events } from 'helpers/eventEmitter';
import View from './view';
import Model from './model';

async function initApp() {
  try {
    await View.Header.init();
  }
  catch (e) {
    console.error('Не удалось получить данные о доступных моделях');
    console.error(e);
  }

  EventEmitter.on(Events.MODEL_LOADED, (data) => {
    View.clear();
    View.Scheme.init(data).render();
    Model.init(data);
  });

  /**
   * User action listeners
   */
  EventEmitter.on(Events.CONTROLLER_VALUE_CHANGED, (payload) => {
    Model.handleControllerChange(payload);
  });

  EventEmitter.on(Events.DEVICE_COMPONENT_CLICKED, ({ uuid }) => {
    const info = Model.getDeviceById(uuid).getPublicInfo();
    View.MessageBox.showDevice(info);
  });

  /**
   * Scheme events listeners
   */
  EventEmitter.on(Events.MODEL_PARAMETER_CHANGED, (payload) => {
    View.MessageBox.updateDeviceParameter(payload);
    const sensorsUpdate = Model.getSensorsUpdate(payload);
    View.Scheme.updateSensors(sensorsUpdate);
    Model.handleDeviceInterrelations(payload);
  });

  EventEmitter.on(Events.DEVICE_ACTIVE_STATES_CHANGED, (payload) => {
    View.MessageBox.updateDeviceStates(payload);
    View.EventsFeed.showDeviceStatesDiff(payload);
  });

  EventEmitter.on(Events.EVENT_TRIGGERED, (payload) => {
    console.log(payload);
  });
}

window.addEventListener('load', initApp);
