class Dictionary<TKey, TValue> {
  private _items = new Array<[TKey, TValue]>();
  getItem(TKey): TValue {
    let foundItems  = this._items.filter(item => item[0] == TKey);
    if(foundItems.length!=1)
    {
      throw new Error("Item with key does not exist");
    }
    return foundItems[0][1]; // Grab the tuple ([0]) and then the value ([1])
  }
  add(key: TKey, value: TValue): void {
    let keyExists
      = this._items.filter(item => item[0] == key).length > 0;
    if (keyExists) {
      throw new Error("Key exists already");
    }
    this._items.push([key, value]);
  }
}

var dict = new Dictionary<number,string>();
dict.add(1,"Thomas");
dict.add(2,"Julia");
dict.add(3,"Anna");

let firstName:string= dict.getItem(2);
console.log(firstName);