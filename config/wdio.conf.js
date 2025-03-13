import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'


import 'dotenv/config';
// import { config } from './../wdio.ios.conf';

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return localConf
        case 'saucelabs':
            return sauceConf
    }
}

export const config = getConfig();
