/**
 * Application entry point
 */

import './style.scss';

import Header from './components/header';
import EventEmitter from './util/eventEmitter';
import Dispatcher from './dispatcher';
import ModelView from './components/model';
import MessageBox from './components/model/messageBox';

/**
 * Provides app initialization logic
 */
function initApp() {
  Header.init();

  EventEmitter.on('MODEL_LOADED', (data) => {
    Dispatcher.init(data);
    ModelView.render(data);
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
