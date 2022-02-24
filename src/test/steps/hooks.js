const { After, Before, Status, AfterAll, BeforeAll } = require('cucumber');
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
const fs = require('fs');
const timeouts = require('../../environment/timeouts');
const setupBrowser = require('../../framework/browserActions');
const { ENVIRONMENT } = require('../../environment/envConfig');
const env = require(`../../environment/${ENVIRONMENT}Environment`);
const Logger = require('../../framework/logger');

const pathToTemp = `${process.cwd()}/temp/`;
  
BeforeAll(async () => {
});
  
Before(async (testCase) => {
  //Logger.info(`Run test "${testCase.pickle.name}" (${testCase.pickle.tags.filter((tag) => tag.name.startsWith('@tc'))[0].name})`);
  await setupBrowser();
  await browser.setTimeout({ 'implicit': timeouts.implicit, 'pageLoad': timeouts.pageLoadTime });
  await browser.setWindowSize(1920, 1080);
  return browser.url(env.startUrl);
});
  
After(async (testCase) => {
  try{
    if (testCase.result.status === Status.FAILED) {
      const name = `${testCase.pickle.name}_${new Date().getTime()}.png`;
      const screen = await browser.takeScreenshot();
      const path = `./reports/screenshots/${name}`;
      fs.writeFileSync(path, screen, 'base64', (err) => {
        Logger.error(err);
      });
      cucumberJson.attach(screen, 'image/png');
    }
  } catch (err) {
    Logger.error(err);
  }
  await browser.reloadSession();
  const fileNames = fs.readdirSync(pathToTemp);
  for(fName of fileNames) {
    fs.unlinkSync(`${pathToTemp}${fName}`);
  }
});
  
AfterAll(async () => {
});