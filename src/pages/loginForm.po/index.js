const BaseForm = require("../../framework/baseForm");
const elements = require("./elements");
const { TextBox, Button, Label } = require("../../framework/element");
const { btnDomain } = require("./elements");

class LoginForm extends BaseForm {
  constructor() {
    super(elements.lblLoginForm, "Login form");
  }

  async inputPassword(password) {
    return elements.txtPass.clearAndType(password);
  }

  async inputEmail(email) {
    return elements.txtEmail.clearAndTypeSecret(email);
  }

  async inputDOmain(domain) {
    return elements.txtDomain.clearAndType(domain);
  }

  async clickDomainChoose() {
    return elements.btnDomainChoose.click();
  }

  async scrollAndChooseDomain(number) {
    let btnDomainLoc = elements.btnDomainLoc + `[ ${number}]`;
    let btnDomain = new Button(btnDomainLoc, "Domain second choose");
    await btnDomain.scrollIntoView();
    return btnDomain.click();
  }

  async acceptTerms() {
    return elements.btnAccept.click();
  }

  async clickNext() {
    return elements.btnNext.click();
  }
}

module.exports = new LoginForm();
