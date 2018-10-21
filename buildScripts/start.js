"use strict";

var _chalk = require("chalk");

var port = 1998; //change it in webpack.config.js also

console.log(_chalk.white.bgRed('\t\t This is a Dev Server ONLY \n'));
console.log((0, _chalk.green)("Server is running at ".concat(port, " ...")));
