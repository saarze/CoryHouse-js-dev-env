"use strict";

var _chalk = require("chalk");

var port = 1998; //change it in package.json localTunnel script and startMessage

console.log((0, _chalk.green)("Your localhost port"), _chalk.black.bgGreen(" ".concat(port, " ")), (0, _chalk.green)("has been opened on the"), _chalk.underline.green(" given URL "), (0, _chalk.green)("at public net"));
console.log((0, _chalk.green)("Now share your Work in Progress to the world"), (0, _chalk.cyan)("(=_=)"));
