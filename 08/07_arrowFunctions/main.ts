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
        // Use arrow function, and this points to the AdminController-instance
        this.dataLoader.loadAdminName((loadedName) => {
            this._adminName = loadedName;
        })
    }
}

let ac = new AdminController(new DataLoader());
ac.loadName();
console.log(ac.adminName); // Logs "Thomas"