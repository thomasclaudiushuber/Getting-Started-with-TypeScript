export class Friend {
    constructor(public firstName: string) { }
}
export default class Developer extends Friend {
    knowsTypeScript: boolean;
}