interface Developer {
    knowsTypeScript: boolean;
}

// Note that the Friend-class does not implement the Developer-interface
class Friend {
    knowsTypeScript: boolean;
}

// This works due to "structural typing" of TypeScript
let dev: Developer = new Friend();
