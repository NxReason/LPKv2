/**
 * Application entry point
 */

import './style.scss';

import EventEmitter, { Events } from 'helpers/eventEmitter';
import Header from './view/header';
import MessageBox from './view/messageBox';
import View from './view/model';
import Model from './model';

/**
 * Provides app initialization logic
 */
async function initApp() {
  try {
    await Header.init();
  }
  catch (e) {
    console.error('Не удалось получить данные о доступных моделях');
    console.error(e);
  }


  EventEmitter.on(Events.MODEL_LOADED, (data) => {
    View.init(data).render();
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
    MessageBox.showDevice(info);
  });

  /**
   * Model events listeners
   */
  EventEmitter.on(Events.MODEL_PARAMETER_CHANGED, (payload) => {
    MessageBox.updateDevice(payload);
    // TODO check dependencies with other devices
    // TODO check dependencies with sensors
  });
}

/**
 * Initialize application on window load
 */
window.addEventListener('load', initApp);
