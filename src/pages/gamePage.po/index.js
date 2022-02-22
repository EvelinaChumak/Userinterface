const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class GamePage extends BaseForm {

  constructor() {
    super(elements.btnHelp, 'Game page');
  }

  /**
  * Get text from error message
  * @param {string} text text for searching
  * @returns {Promise<any>} result
  */
  async closeHelpBox() {
    return elements.btnHelp.click();
  }

  async isHelpBoxHidden() {
    return elements.btnHelp.state().isDisplayed();
  }

  async acceptCookies() {
    return elements.btnAcceptCoolies.click();
  }

  async isCokkiesInvisibility() {
    return elements.btnAcceptCoolies.state().isExisting();
  }

  async getTime() {
    return elements.txbTime.getText();
  }

}

module.exports = new GamePage();