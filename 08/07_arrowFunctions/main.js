var DataLoader = (function () {
    function DataLoader() {
    }
    DataLoader.prototype.loadAdminName = function (callback) {
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
        var _this = this;
        // Use arrow function, and this points to the AdminController-instance
        this.dataLoader.loadAdminName(function (loadedName) {
            _this._adminName = loadedName;
        });
    };
    return AdminController;
}());
var ac = new AdminController(new DataLoader());
ac.loadName();
console.log(ac.adminName); // Logs "Thomas"
