const { assert } = require("console");
const { Given, When, Then } = require("cucumber");
const { domain } = require("process");
const expectChai = require("chai").expect;
const { mainPage, welcomePage, loginForm } = require("../../pages");
const Data = require("../../testData/infoOnPage");
const Random = require("../utils/random");

let time;

Given(/^the user is on the main page$/, async () => {
  expectChai(
    await welcomePage.waitForFormIsOpened(),
    `Page "${welcomePage.getFormName()}" is not opened`
  ).to.be.true;
  await welcomePage.followTheLink();
  number = await mainPage.getPageNumber();
  return expectChai(number, `Page number is ${number}`).equal(Data.FIRST_PAGE);
});

When(/^the user types close help$/, async () => {
  await mainPage.closeHelpBox();
});

Then(/^help box is hidden$/, async () => {
  return expectChai(await mainPage.isHelpBoxHidden(), "Help box is not hidden")
    .to.be.true;
});

When(/^the user accept cookies$/, async () => {
  await mainPage.acceptCookies();
});

Then(/^cookies invisiable$/, async () => {
  return expectChai(
    await mainPage.isCokkiesInvisibility(),
    "Cookies is not accepted"
  ).to.be.true;
});

When(/^user watch on time$/, async () => {
  time = await mainPage.getTime();
});

Then(/^time is 00:00:00$/, async () => {
  return expectChai(time, `Time not is ${Data.TIME_START}`).equal(
    Data.TIME_START
  );
});

When(/^the user filled in the field$/, async () => {
  let lengthEmail = Math.floor(
    Math.random() * (Data.MAX_EMAIL_SYMBOLS - Data.MIN_EMAIL_SYMBOLS) +
      Data.MIN_EMAIL_SYMBOLS
  );
  let lengthPass = Math.floor(
    Math.random() * (Data.MAX_PASS_SYMBOLS - Data.MIN_PASS_SYMBOLS) +
      Data.MIN_PASS_SYMBOLS
  );
  let email = Random.getString(lengthEmail);
  let pass = Random.createPassword(lengthPass);
  let domain = Random.getDomian();
  let domainNumber = Math.floor(
    Math.random() * (Data.FIRST_INDEX_IN_DOOM - Data.NUMBER_OF_DOMAINS) +
      Data.NUMBER_OF_DOMAINS
  );
  await loginForm.inputPassword(pass);
  await loginForm.inputEmail(email);
  await loginForm.inputDOmain(domain);
  await loginForm.clickDomainChoose();
  await loginForm.scrollAndChooseDomain(domainNumber);
  await loginForm.acceptTerms();
  await loginForm.clickNext();
});

Then(/^the user on the 2 page$/, async () => {
  number = await mainPage.getPageNumber();
  return expectChai(number, `Page number is ${number}`).equal(Data.SECOND_PAGE);
});
