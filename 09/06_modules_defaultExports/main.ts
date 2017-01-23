import Coder from './friends';

var prog = new Coder("Thomas");
prog.knowsTypeScript = true;

console.log(prog.firstName);
console.log("Knows TypeScript: " + prog.knowsTypeScript);