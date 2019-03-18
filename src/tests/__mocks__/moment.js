const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};

/* We use require because if we use the node module with import, the function is going to try to call itself creating an infinite loop */