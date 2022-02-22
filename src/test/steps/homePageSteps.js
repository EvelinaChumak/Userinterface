const { assert } = require('console');
const { Given, When, Then } = require('cucumber');
const expectChai = require('chai').expect;
const { gamePage } = require('../../pages');


Given(/^the user is on the game page$/, async () => {
  return expectChai(await gamePage.waitForFormIsOpened(), `Page "${gamePage.getFormName()}" is not opened`).to.be.true;
});

When(/^the user types close help$/, async () => {
  await gamePage.closeHelpBox();

});

Then(/^help box is hidden$/, async () => {
  return expectChai(await gamePage.isHelpBoxHidden(), 'Help box is not hidden').to.be.true
});


When(/^the user accept cookies$/, async () => {
  await gamePage.acceptCookies();
});


Then(/^cookies invisiable$/, async () => {
  return expectChai(await gamePage.isCokkiesInvisibility(), 'Cookies is not accepted').to.be.true
});
