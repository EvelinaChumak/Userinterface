const { TextBox, Button, Label } = require("../../framework/element");

module.exports = {
  btnHelp: new Button(
    '//*[contains(@class,"help-form__send-to-bottom-button")]',
    "Help box"
  ),
  btnAcceptCoolies: new Button('//*[@class = "cookies"]', "Accept cookies"),
  lblTime: new Label('//*[contains(@class,"timer timer--white")]', "Time"),
  lblPage: new Label('//*[@class = "page-indicator"]', "Page indicator"),
};
