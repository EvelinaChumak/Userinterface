const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class HomePage extends BaseForm {

  constructor() {
    super(elements.tbxSearch, 'Home page');
  }

  /**
  * Get text from error message
  * @param {string} text text for searching
  * @returns {Promise<any>} result
  */
  async typeTextForSearch(text) {
    return elements.tbxSearch.type(text);
  }
}

module.exports = new HomePage();