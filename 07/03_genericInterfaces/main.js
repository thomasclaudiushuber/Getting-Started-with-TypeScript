var Friend = (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
var FriendRepo = (function () {
    function FriendRepo() {
        this._items = new Array();
    }
    FriendRepo.prototype.GetAll = function () {
        return this._items;
    };
    FriendRepo.prototype.Insert = function (item) {
        this._items.push(item);
    };
    return FriendRepo;
}());
var repo = new FriendRepo();
repo.Insert(new Friend("Thomas"));
repo.Insert(new Friend("Julia"));
repo.Insert(new Friend("Anna"));
for (var _i = 0, _a = repo.GetAll(); _i < _a.length; _i++) {
    var friend = _a[_i];
    console.log(friend.firstName);
}
