const wdioParallel = require('wdio-cucumber-parallel-execution');
const fs = require('fs');
const moment = require('moment');
const reporter = require('cucumber-html-reporter');
const { removeSync } = require('fs-extra');
const { type } = require('os');
const timeouts = require('../src/environment/timeouts');
const { ENVIRONMENT } = require('../src/environment/envConfig');

const jsonReportDirectory = 'reports/json/';
const screenshotsDirectory = 'reports/screenshots/';
const tempDirectory = 'temp/';

const BROWSER_REGEX = /^.*wdio\.(.*)\.conf.*$/;

exports.config = {
  runner: 'local',
  specs: [
    './src/test/features/**/*.feature'
  ],
  exclude: [],
  maxInstances: 3,
  logLevel: 'warn',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: timeouts.explicit,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: [
    'spec',
    [
      'cucumberjs-json', {
        jsonFolder: jsonReportDirectory,
        language: 'en',
      },
    ],
  ],
  cucumberOpts: {
    require: ['./src/test/steps/**/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '@automated',
    timeout: timeouts.cucumberStep,
    ignoreUndefinedDefinitions: false
  },

  onPrepare: () => {
    if (!fs.existsSync(jsonReportDirectory)) {
      fs.mkdirSync(jsonReportDirectory);
    } else {
      removeSync(jsonReportDirectory);
    }
    removeSync(screenshotsDirectory);
    fs.mkdirSync(screenshotsDirectory);
    removeSync(tempDirectory);
    fs.mkdirSync(tempDirectory);
  },

  onComplete: () => {
    try {
      const consolidatedJsonArray = wdioParallel.getConsolidatedData({
        parallelExecutionReportDirectory: jsonReportDirectory
      });

      const jsonFile = `${jsonReportDirectory}report.json`;
      fs.writeFileSync(jsonFile, JSON.stringify(consolidatedJsonArray));

      const date = moment().format('DD_MM_YY');
      const browserName = process.env.npm_lifecycle_script.match(BROWSER_REGEX)[1];

      const options = {
        theme: 'bootstrap',
        jsonFile: jsonFile,
        output: `reports/html/test_project_${ENVIRONMENT}_${browserName}_${date}.html`,
        name: 'a1qa',
        brandTitle: 'a1qa L2 Automation',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        ignoreBadJsonFile: true,
        metadata: {
          'App Version': '0.1.0',
          'Environment': ENVIRONMENT,
          Platform: `${type()}`,
          Browser: browserName,
          Parallel: 'Scenarios',
          Executed: 'Remote',
        },
      };
      reporter.generate(options);
    } catch (err) {
      console.log('err', err);
    }
  },
};