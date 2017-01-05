var Dictionary = (function () {
    function Dictionary() {
        this._items = new Array();
    }
    Dictionary.prototype.getItem = function (TKey) {
        var foundItems = this._items.filter(function (item) { return item[0] == TKey; });
        if (foundItems.length != 1) {
            throw new Error("Item with key does not exist");
        }
        return foundItems[0][1]; // Grab the tuple ([0]) and then the value ([1])
    };
    Dictionary.prototype.add = function (key, value) {
        var keyExists = this._items.filter(function (item) { return item[0] == key; }).length > 0;
        if (keyExists) {
            throw new Error("Key exists already");
        }
        this._items.push([key, value]);
    };
    return Dictionary;
}());
var dict = new Dictionary();
dict.add(1, "Thomas");
dict.add(2, "Julia");
dict.add(3, "Anna");
var firstName = dict.getItem(2);
console.log(firstName);
