const EventEmitter = (function EventEmitter() {
  const events = {};

  return {
    on(event, listener) {
      if (!events[event]) events[event] = { queue: [] };

      const index = events[event].queue.push(listener) - 1;
      // function to delete topic
      return {
        remove() {
          delete events[event].queue[index];
        }
      };
    },

    emit(event, info) {
      // no theme or no listeners
      if (!events[event] || !events[event].queue.length) return;

      const listeners = events[event].queue;
      listeners.forEach((l) => {
        l(info || {});
      });
    }
  };
}());

const Events = {
  // External events (i.e. server responses)
  MODEL_LOADED: 'model_loaded',

  // User actions
  CONTROLLER_VALUE_CHANGED: 'controller_value_changed',
  DEVICE_COMPONENT_CLICKED: 'device_component_clicked',

  // Scheme events
  MODEL_PARAMETER_CHANGED: 'model_parameter_changed',
  DEVICE_ACTIVE_STATES_CHANGED: 'device_active_states_changed',
  EVENT_TRIGGERED: 'event_triggered',
};

export default EventEmitter;
export { Events };
