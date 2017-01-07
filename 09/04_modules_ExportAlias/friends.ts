class Friend {
    constructor(public firstName: string) { }
}
class Developer extends Friend {
    knowsTypeScript: boolean;
}
export { Developer as Coder }