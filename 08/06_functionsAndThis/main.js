var DataLoader = (function () {
    function DataLoader() {
    }
    DataLoader.prototype.LoadAdminName = function (callback) {
        callback("Thomas");
    };
    return DataLoader;
}());
var AdminController = (function () {
    function AdminController(dataLoader) {
        this.dataLoader = dataLoader;
    }
    Object.defineProperty(AdminController.prototype, "adminName", {
        get: function () { return this._adminName; },
        enumerable: true,
        configurable: true
    });
    AdminController.prototype.loadName = function () {
        this.dataLoader.LoadAdminName(function (loadedName) {
            // this does not refer to the AdminController-instance, as it is used inside of a function
            this._adminName = loadedName;
        });
    };
    return AdminController;
}());
var ac = new AdminController(new DataLoader());
ac.loadName();
console.log(ac.adminName);
