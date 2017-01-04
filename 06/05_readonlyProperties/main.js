// class Friend{
//     firstName:string;
//     constructor(firstName:string)
//     {
//         this.firstName = firstName;
//     }
// }
// This class is equal to the one commented out above
var Friend = (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
var friend = new Friend("Thomas");
friend.firstName = "Julia";
console.log(friend.firstName);
