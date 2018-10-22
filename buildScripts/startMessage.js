import { white, green } from "chalk";

const port = 1998; //change it in webpack.config.js also
console.log(white.bgRed('\t\t This is a Dev Server ONLY \n'));
console.log(green(`Server is starting at ${port} ...`));
