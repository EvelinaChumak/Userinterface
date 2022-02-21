const Logger = require('../logger');
const BaseElement = require('./baseElement');

const maskedValue = '********';

class TextBox extends BaseElement {
  constructor(locator, name) {
    super(locator, name);
  }

  async type(value) {
    await this._setText(value, false);
  }

  async typeSecret(value) {
    await this._setText(value, true);
  }

  async clearAndType(value) {
    await this._clearAndSetText(value, false);
  }

  async clearAndTypeSecret(value) {
    await this._clearAndSetText(value, true);
  }

  async _setText(value, maskValueInLog) {
    await this.state().assertIsExist();
    Logger.info(`Type text "${maskValueInLog ? maskedValue : value}" into element "${this.name}"`);
    return (await $(this.locator)).setValue(value);
  }

  async _clearAndSetText(value, maskValueInLog) {
    await this.state().assertIsExist();
    Logger.info(`Clear and type text "${maskValueInLog ? maskedValue : value}" into element "${this.name}"`);
    const elem = await $(this.locator);
    await elem.clearValue();
    return elem.setValue(value);
  }
}

module.exports = TextBox