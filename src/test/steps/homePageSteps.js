const { assert } = require('console');
const { Given, When, Then } = require('cucumber');
const expectChai = require('chai').expect;
const { gamePage } = require('../../pages');

/**
 * Check that home page is opened
 */
Given(/^the user is on the home page$/, async () => {
  return expectChai(await gamePage.waitForFormIsOpened(), `Page "${gamePage.getFormName()}" is not opened`).to.be.true;
});

/**
 * Log in
*/
When(/^the user types close help$/, async () => {
  await gamePage.closeHelpBox();
  return expectChai(await gamePage.isHelpBoxHidden(), 'Help box is not hidden').to.be.true
});
