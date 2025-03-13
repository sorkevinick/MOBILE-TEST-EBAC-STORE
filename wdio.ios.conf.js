export const config = {
    // runner: 'local',
    // port: 4723,


    user: 'kevin.fonseca',
    key: 'd08d9e89-a85a-4d9a-b5b1-a40bae5fd00a',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',    

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        // platformName: 'Android',
        // 'appium:deviceName': 'ebac-qe',
        // 'appium:platformVersion': '9.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        // 'appium:appWaitActivity': '.MainActivity',
        // 'appium:disableIdLocatorAutoCompletion': true
        
        // platformName: 'Android',
        // 'appium:app': 'storage:filename=ebacshop.aab',
        // 'appium:deviceName': 'Android GoogleAPI Emulator',
        // 'appium:platformVersion': '12.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:disableIdLocatorAutoCompletion': true,
        // 'sauce:options': {
        //     build: 'appium-build-teste-ebacshop',
        //     name: 'Mobile Test EbacShop',
        //     deviceOrientation: 'PORTRAIT',

        // },
        platformName: 'iOS',
        'appium:app': 'storage:filename=LojaEBAC-sim.zip',
        'appium:deviceName': 'iPhone Simulator',
        'appium:platformVersion': '17.0',
        'appium:automationName': 'XCUITest',
        'sauce:options': {
            'appiumVersion': '2.1.3',
            'build': 'Build_12345',
            'name': 'Teste_LojaEBAC_iOS',
            'deviceOrientation': 'PORTRAIT'
        }
        
        

    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
       
        await driver.takeScreenshot();
       
    },
}
