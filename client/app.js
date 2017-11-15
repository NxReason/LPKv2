/**
 * Application entry point
 */

import './style.scss';

import Header from './components/header';
import EventEmitter from './util/eventEmitter';
import Model from './model';
import ModelView from './components/model';
import MessageBox from './components/model/messageBox';

let model;
/**
 * Provides app initialization logic
 */
function initApp() {
  Header.init();

  EventEmitter.on('MODEL_LOADED', (data) => {
    model = new Model(data);
    ModelView.render(data);
  });

  EventEmitter.on('DVC_CLICKED', ({ uuid }) => {
    const device = model.getDevice(uuid);
    MessageBox.showDevice(device);
  });

  EventEmitter.on('CTR_SWITCH_CLICKED', (data) => {
    console.log(data);
  });

  EventEmitter.on('CTR_RANGE_CLICKED', (data) => {
    model.setControllerValue(data);
    ModelView.setRangeValue(data);
  });
}

/**
 * Initialize application on window load
 */
window.addEventListener('load', initApp);
