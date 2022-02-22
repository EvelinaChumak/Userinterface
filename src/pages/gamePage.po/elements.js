const { TextBox, Button } = require('../../framework/element');

module.exports = {
  btnHelp: new Button('//*[contains(@class,"help-form__send-to-bottom-button")]', 'Help box'),
  btnAcceptCoolies: new Button('//*[@class = "cookies"]', 'Accept cookies')
}