class DataLoader {
    LoadAdminName(callback: (adminName: string) => void) {
        callback("Thomas");
    }
}

let loader = new DataLoader();
loader.LoadAdminName(function (loadedName: string) {
    console.log(loadedName);
})
