var Friend = (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
var GenericRepo = (function () {
    function GenericRepo() {
        this._items = new Array();
    }
    GenericRepo.prototype.GetAll = function () {
        return this._items;
    };
    GenericRepo.prototype.Insert = function (item) {
        this._items.push(item);
    };
    return GenericRepo;
}());
var repo = new GenericRepo();
repo.Insert(new Friend("Thomas"));
repo.Insert(new Friend("Julia"));
repo.Insert(new Friend("Anna"));
for (var _i = 0, _a = repo.GetAll(); _i < _a.length; _i++) {
    var friend = _a[_i];
    console.log(friend.firstName);
}
