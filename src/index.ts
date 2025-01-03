import { sum } from './sum';

console.log(`Hello world!`);

const root = document.getElementById(`root`);

const a = 1;
const b = 2;

root!.textContent = `Sum ${a} + ${b} = ${sum(1, 2)}`;
