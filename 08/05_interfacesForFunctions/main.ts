interface AdminNameCallback {
    (adminName: string): void
}

class DataLoader {
    loadAdminName(callback:AdminNameCallback) {
        callback("Thomas");
    }
}

let loader = new DataLoader();
loader.loadAdminName(function (loadedName: string) {
    console.log(loadedName);
})
