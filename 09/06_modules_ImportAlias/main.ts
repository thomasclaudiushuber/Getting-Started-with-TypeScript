import { Developer as Programmer } from './friends';

var prog = new Programmer("Thomas");
prog.knowsTypeScript = true;

console.log(prog.firstName);
console.log("Knows TypeScript: " + prog.knowsTypeScript);