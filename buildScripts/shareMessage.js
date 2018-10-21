import { green, black, underline, cyan } from 'chalk';

const port = 1998;  //change it in package.json localTunnel script and startMessage
console.log(green(`Your localhost port`),black.bgGreen( ` ${port} `), green(`has been opened on the`), underline.green(` given URL `), green(`at public net`));
console.log(green(`Now share your Work in Progress to the world`), cyan(`(=_=)`));
