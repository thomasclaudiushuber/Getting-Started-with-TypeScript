import { Coder } from './friends';

var dev = new Coder("Thomas");
dev.knowsTypeScript = true;

console.log(dev.firstName);
console.log("Knows TypeScript: " + dev.knowsTypeScript);