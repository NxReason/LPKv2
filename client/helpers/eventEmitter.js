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

export default EventEmitter;
