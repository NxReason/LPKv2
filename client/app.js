/**
 * Application entry point
 */

import './style.scss';

import EventEmitter from 'helpers/eventEmitter';
import Header from './view/header';
import MessageBox from './view/messageBox';
import View from './view/model';
import Model from './model';

/**
 * Provides app initialization logic
 */
function initApp() {
  Header.init();

  EventEmitter.on('MODEL_LOADED', (data) => {
    View.init(data).render();
    Model.init(data);
  });

  /**
   * User action listeners
   */
  EventEmitter.on('CONTROLLER_VALUE_CHANGED', (payload) => {
    Model.handleControllerChange(payload);
  });

  EventEmitter.on('DEVICE_COMPONENT_CLICKED', ({ uuid }) => {
    const info = Model.getDeviceById(uuid).getPublicInfo();
    MessageBox.showDevice(info);
  });

  /**
   * Model events listeners
   */
  EventEmitter.on('MODEL_PAREMETER_CHANGED', (payload) => {
    MessageBox.updateDevice(payload);
  });
}

/**
 * Initialize application on window load
 */
window.addEventListener('load', initApp);
