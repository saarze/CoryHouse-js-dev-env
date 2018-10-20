const chalk = require('chalk');

const port = 1998;
console.log(chalk.green(`Your localhost port`),chalk.black.bgGreen( ` ${port} `), chalk.green(`has been opened on the`), chalk.underline.green(` given URL `), chalk.green(`at public net`));
console.log(chalk.green(`Now share your Work in Progress to the world`), chalk.cyan(`(=_=)`));
