const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class WelcomePage extends BaseForm {

  constructor() {
    super(elements.lblStart, 'Start game');
  }

  async followTheLink() {
    return elements.lblStart.click();
  }

}

module.exports = new WelcomePage();