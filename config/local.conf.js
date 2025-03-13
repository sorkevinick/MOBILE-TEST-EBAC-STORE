import { generalConf } from './general.conf.js'
export let localConf = {
    runner: 'local',
    port: 4723,

    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'ebac-qe',
            'appium:platformVersion': '9.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': `${process.cwd()}/app/ebacshop.apks`,
            'appium:appWaitActivity': '.MainActivity',
            'appium:disableIdLocatorAutoCompletion': true
        }
    ],
    ...generalConf
}

