import Controller from './controller';

class RangeController extends Controller {
  constructor({ uuid, name, value, limits }) {
    super({ uuid, name });
    this._checkLimits(limits);
    this.limits = limits;
    this.setValue(value);
  }

  /**
   * Check if minimum value less or equal to maximum
   * @param {Object} limits
   */
  _checkLimits({ min, max }) {
    if (min > max) { throw new Error(`Error: Minimal value of controller ${this.uuid} greater than maximum`); }
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    const { min, max } = this.limits;
    if (value < min || value > max) {
      throw new Error(`Error: Trying to set invalid value at controller ${this.uuid}. Value: ${value}. Limits: ${min}-${max}`);
    }
    this.value = value;
  }
}

export default RangeController;
