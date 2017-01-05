var Friend = (function () {
    function Friend(id, firstName) {
        this.id = id;
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
    GenericRepo.prototype.GetById = function (id) {
        return this._items.filter(function (item) { return item.id === id; })[0];
    };
    GenericRepo.prototype.Insert = function (item) {
        this._items.push(item);
    };
    return GenericRepo;
}());
var repo = new GenericRepo();
repo.Insert(new Friend(1, "Thomas"));
repo.Insert(new Friend(2, "Julia"));
repo.Insert(new Friend(3, "Anna"));
var friend = repo.GetById(2);
console.log(friend.firstName); // Logs "Julia";
