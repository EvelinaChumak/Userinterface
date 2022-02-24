const BaseForm = require("../../framework/baseForm");
const elements = require("./elements");

class MainPage extends BaseForm {
  constructor() {
    super(elements.btnHelp, "main page");
  }

  async getPageNumber() {
    return elements.lblPage.getText();
  }

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
    return elements.lblTime.getText();
  }
}

module.exports = new MainPage();
