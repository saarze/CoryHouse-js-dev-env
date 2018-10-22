import { join } from 'lodash';

export function calc() {
  console.log(join(['Hello', 'World'], ' '));
}

export function calc2() {
  console.log(Math.random()*10);
}

export function calc3() {
  console.log(Math.random()*30);
}

export function calc4() {
  console.log(Math.random()*40);
}

export function calc5() {
  console.log(Math.random()*50);
}
