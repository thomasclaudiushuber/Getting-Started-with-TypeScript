class Friend {
    constructor(public firstName: string) { }
}
export class Developer extends Friend {
    knowsTypeScript: boolean;
}
export class Skateboarder extends Friend {
    makeKickflip() {
        console.log(this.firstName + " made a kickflip");
    }
}