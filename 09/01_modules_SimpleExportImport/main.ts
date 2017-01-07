import { Developer } from './friends';

var dev = new Developer("Thomas");
dev.knowsTypeScript = true;

console.log(dev.firstName);
console.log("knows TypeScript: " + dev.knowsTypeScript);