import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { join } from 'lodash';
import './style2.css';
import { calc } from './calc.js';
// import "./assets/test.jpg";   same can be done with url('./assets/test.jpg') and <img src="./assets/test.jpg" />

const test = () => {
  console.log(join(['Hello', 'WebPack'], ' '));
};

test();
calc();
