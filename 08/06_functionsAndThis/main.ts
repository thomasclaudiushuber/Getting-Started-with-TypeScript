interface AdminNameCallback {
    (adminName: string): void
}
class DataLoader {
    loadAdminName(callback: AdminNameCallback) {
        callback("Thomas");
    }
}

class AdminController {

    private _adminName: string;

    get adminName(): string { return this._adminName; }

    constructor(private dataLoader: DataLoader) { }

    loadName() {
        this.dataLoader.loadAdminName(function (loadedName) {
            // this does not refer to the AdminController-instance, as it is used inside of a function
            this._adminName = loadedName;
        })
    }

    // Storing this solves the issue, but arrow function like shown in the next chapter are even better
    // loadName() {
    //     let _this = this;
    //     this.dataLoader.loadAdminName(function (loadedName) {
    //         _this._adminName = loadedName;
    //     })
    // }
}

let ac = new AdminController(new DataLoader());
ac.loadName();
console.log(ac.adminName);