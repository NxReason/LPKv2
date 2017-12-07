/**
 * Application entry point
 */

import './style.scss';

import Header from './view/header';
import EventEmitter from 'helpers/eventEmitter';
import Dispatcher from './dispatcher';
import ModelView from './view/model';
import MessageBox from './view/messageBox';

/**
 * Provides app initialization logic
 */
function initApp() {
  Header.init();

  EventEmitter.on('MODEL_LOADED', (data) => {
    ModelView.init(data).render();
    Dispatcher.init(data);
  });

  EventEmitter.on('DVC_CLICKED', ({ uuid }) => {
    const device = Dispatcher.getDevice(uuid);
    MessageBox.showDevice(device);
  });

  EventEmitter.on('CTR_SWITCH_CLICKED', (data) => {
    Dispatcher.switchControllerChange(data);
  });

  EventEmitter.on('CTR_RANGE_CLICKED', (data) => {
    Dispatcher.rangeControllerChange(data);
    ModelView.setRangeValue(data);
  });

  EventEmitter.on('DVC_PARAM_CHANGED', (data) => {
    Dispatcher.deviceParamChange(data);
  });
}

/**
 * Initialize application on window load
 */
window.addEventListener('load', initApp);
