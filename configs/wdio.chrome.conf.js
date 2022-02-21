const path = require('path');
const { config } = require('./wdio.shared.conf');

const downloadDir = path.join(process.cwd(), 'temp');

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        maxInstances: 3,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: [
            '--incognito',
            '--no-sandbox',
            '--disable-dev-shm-usage',
          ],
          prefs: {
            'directory_upgrade': true,
            'prompt_for_download': false,
            'download.default_directory': downloadDir
          }
        },
      },
    ],
    services: ['selenium-standalone'], // chromedriver
  }
};
