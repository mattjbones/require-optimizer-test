//require js config 
require.config({
    baseUrl: "/",
    urlArgs: "cachebust=" + (new Date()).getTime()
});


//main module 
define(function (require) {

    //use the simplified syntax to add dependencies 
	 var data = require("js/data");
    var alerter = require("js/alerter");

	 return [data, alerter];

    //call a function on each module    
	 alerter.writeLog("Starting app");
    data.get("getmovies", { id: 25 });

    //display logs    
	 alert(alerter.logs.join('\n'));

	 
});
