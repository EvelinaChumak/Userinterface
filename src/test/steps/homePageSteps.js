const { Given, When, Then } = require('cucumber');
const expectChai = require('chai').expect;
const { homePage } = require('../../pages');

/**
 * Check that home page is opened
 */
Given(/^the user is on the home page$/, async () => {
  return expectChai(await homePage.waitForFormIsOpened(), `Page "${homePage.getFormName()}" is not opened`).to.be.true;
});

/**
 * Log in
 */
When(/^the user types '(.*)' in search input$/, async (text) => {
  return homePage.typeTextForSearch(text);
});
