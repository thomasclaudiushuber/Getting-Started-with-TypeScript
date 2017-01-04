// class Friend{
//     firstName:string;

//     constructor(firstName:string)
//     {
//         this.firstName = firstName;
//     }
// }

// This class is equal to the one commented out above
class Friend {
    constructor(public firstName: string) { }
}

let friend = new Friend("Thomas");
friend.firstName = "Julia";