import Coder, { Friend } from './friends'; // The  is the default import

var prog = new Coder("Thomas");
prog.knowsTypeScript = true;

console.log(prog.firstName);
console.log("Knows TypeScript: " + prog.knowsTypeScript);

var friend = new Friend("Julia");
console.log(friend.firstName);