class DataLoader {
    loadAdminName(callback: (adminName: string) => void) {
        callback("Thomas");
    }
}

let loader = new DataLoader();
loader.loadAdminName(function (loadedName: string) {
    console.log(loadedName);
})
