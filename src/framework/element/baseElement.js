const Logger = require('../logger');
const ElementStateProvider = require('./elementStateProvider');

module.exports = class Element {

  constructor(locator, name) {
    this.locator = locator;
    this.name = name;
  }

  state = () => new ElementStateProvider(this.locator, this.name);

  async click() {
    await this.state().assertIsClickable();
    Logger.info(`Click at "${this.name}"`);
    return (await $(this.locator)).click();
  }

  async moveTo() {
    await this.state().assertIsExist();
    Logger.info(`Move to "${this.name}"`);
    return (await $(this.locator)).moveTo();
  }

  async clickByOffset(x, y) {
    Logger.info(`Click by offset {x: ${x}, y:${y}} at "${this.name}"`);
    await this.state().assertIsClickable();
    await (await $(this.locator)).click({x, y});
  }

  async getText() {
    await this.state().assertIsExist();
    Logger.info(`Get text from element "${this.name}"`);
    const text = await (await $(this.locator)).getText();
    Logger.info(`Received text "${text}"`);
    return text;
  }

  async getTextFromElements() {
    Logger.info(`Get text from elements "${this.name}"`);
    await this.state().assertIsExist();
    const elements = await (await $$(this.locator));
    return Promise.all(elements.map(async (el) => el.getText()));
  }

  async getAttribute(attribute) {
    Logger.info(`Get attribute "${attribute}" from element "${this.name}"`);
    await this.state().assertIsExist();
    const attr = await (await $(this.locator)).getAttribute(attribute);
    Logger.info(`Received attribute "${attr}"`);
    return attr;
  }

  async getAttributeFromElements(attribute) {
    Logger.info(`Get attribute "${attribute}" from elements "${this.name}"`);
    await this.state().assertIsExist();
    const elements = await (await $$(this.locator));
    return Promise.all(elements.map(async (el) => el.getAttribute(attribute)));
  }

  async selectDropdownOptionByValue(value) {
    Logger.info(`Set option "${value}" in "${this.name}"`);
    await this.state().assertIsDisplayed();
    await (await $(this.locator)).selectByAttribute('value', value);
  }

  async getPlaceholder() {
    await this.state().assertIsExist();
    Logger.info(`Get placeholder from element "${this.name}"`);
    const text = await (await $(this.locator)).getAttribute('placeholder');
    Logger.info(`Received placeholder "${text}"`);
    return text;
  }

  async getElementsCount() {
    Logger.info(`Get count of elements "${this.name}"`);
    await this.state().assertIsExist();
    const elements = await (await $$(this.locator));
    return elements.length;
  }

  async scrollIntoView() {
    Logger.info(`Scroll element "${this.name}" into viewport`);
    await this.state().assertIsExist();
    const elem = await (await $(this.locator));
    return elem.scrollIntoView();
  }

  async setElementStyleDisplay(value) {
    Logger.info(`Set style "${value}" in "${this.name}"`);
    return browser.execute(`arguments[0].style.display = '${value}';`, await $(this.locator));
  }

  async getValue() {
    Logger.info(`Get value from element "${this.name}"`);
    await this.state().assertIsExist();
    const elem = await (await $(this.locator));
    return elem.getValue();
  }

  async clickViaJS() {
    Logger.info(`Click via JS on element "${this.name}"`);
    await this.state().assertIsExist();
    const elem = await (await $(this.locator));
    return browser.execute("arguments[0].click();", elem);
  }

  async switchToFrame() {
    Logger.info(`Switch "${this.name}" to new frame `);
    await this.state().assertIsExist();
    const elem = await (await $(this.locator));
    return browser.switchToFrame(elem);
  }
};