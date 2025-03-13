import { generalConf } from './general.conf.js'
export let sauceConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutoCompletion': true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Mobile Test EbacShop',
                deviceOrientation: 'PORTRAIT',
            },
        }
    ] : [
        {
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
        }
    ],
    ...generalConf
}