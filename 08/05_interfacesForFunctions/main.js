var DataLoader = (function () {
    function DataLoader() {
    }
    DataLoader.prototype.LoadAdminName = function (callback) {
        callback("Thomas");
    };
    return DataLoader;
}());
var loader = new DataLoader();
loader.LoadAdminName(function (loadedName) {
    console.log(loadedName);
});
