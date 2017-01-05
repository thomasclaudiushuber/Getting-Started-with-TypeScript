interface AdminNameCallback {
    (adminName: string): void
}

class DataLoader {
    LoadAdminName(callback:AdminNameCallback) {
        callback("Thomas");
    }
}

var loader = new DataLoader();
loader.LoadAdminName(function (loadedName: string) {
    console.log(loadedName);
})
