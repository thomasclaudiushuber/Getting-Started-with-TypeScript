class Friend {
    private _firstName: string;

    set firstName(value: string) {
        this._firstName = value;
    }

    get firstName(): string {
        return this._firstName;
    }
}

let friend = new Friend();
friend.firstName = "Thomas";
console.log(friend.firstName);