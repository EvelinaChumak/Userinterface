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
}

module.exports = new GamePage();