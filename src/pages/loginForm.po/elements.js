const { TextBox, Button, Label } = require("../../framework/element");

module.exports = {
  lblLoginForm: new Label(
    '//*[@class = "login-form__container"]',
    "Login form"
  ),
  txtPass: new TextBox(
    '//*[@class = "login-form__field-row"]/input',
    "Password input"
  ),
  txtEmail: new TextBox('//*[@class = "align__cell"][1]/input', "Email input"),
  txtDomain: new TextBox(
    '//*[@class = "align__cell"][3]/input',
    "Domain input"
  ),
  btnDomainChoose: new Button(
    '//*[@class = "dropdown__opener"]',
    "Domain choose"
  ),
  btnDomainLoc: new String('//*[@class = "dropdown__list-item"]'),
  btnDomain: new Button(this.btnDomainLoc, "Domain second choose"),
  btnAccept: new Button('//*[@class = "checkbox__box"]', "Accept terms"),
  btnNext: new Button('//*[@class = "button--secondary"]', "Next"),
};
