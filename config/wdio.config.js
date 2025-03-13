require('dotenv').config();

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            break;
        case 'saucelabs':
            break;
    }
}

exports.config = getConfig();
