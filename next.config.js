const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');


module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                test: 'test'
            }

        }
    } else {
        return {
            env: {
                test: 'test'
            }

        }
    }
};