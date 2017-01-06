namespace Friends {
    export class Friend {
        constructor(public firstName: string) { }
    }
    export class Developer extends Friend {
        knowsTypeScript: boolean;
    }
}