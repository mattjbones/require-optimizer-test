define(function (require) {
    var alerter = require("./alerter");

    function get(url, data) {
        alerter.writeLog("data.get for url: " + url);
    }

    return {
        get: get
    };
});
