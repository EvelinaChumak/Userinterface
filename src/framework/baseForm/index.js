const timeouts = require('../../environment/timeouts');
const Logger = require('../logger');

module.exports = class BaseForm {

  constructor(element, name) {
    this.name = name;
    this.element = element;
  }

  getFormName = () => this.name;

  async isFormOpened() {
    const isOpened = await this.element.state().isExisting();
    Logger.info(`Form "${this.name}" is opened - "${isOpened}"`);
    return isOpened;
  }

  async waitForFormIsOpened() {
    Logger.info(`Waiting for form "${this.name}" to load`);
    const isOpened = await this.element.state().waitForExist(timeouts.pageLoadTime);
    Logger.info(`Form "${this.name}" is opened - "${isOpened}"`);
    return isOpened;
  }
};