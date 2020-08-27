"use strict";

var _configure = require("./configureExpress/configure");

var message = "Begin with configure babel in node.js :)";
console.info(message);

var port = _configure.app.get('port');

_configure.app.listen(port);

console.log('http://localhost:' + port);