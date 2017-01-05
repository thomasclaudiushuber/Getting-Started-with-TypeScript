interface IRepository<T> {
  getAll(): T[];
  insert(item: T): void;
}

class Friend {
  constructor(public firstName: string) { }
}

class FriendRepo implements IRepository<Friend> {
  private _items = new Array<Friend>();
  getAll() {
    return this._items;
  }
  insert(item: Friend): void {
    this._items.push(item);
  }
}

let repo = new FriendRepo();
repo.insert(new Friend("Thomas"));
repo.insert(new Friend("Julia"));
repo.insert(new Friend("Anna"));

for(let friend of repo.getAll())
{
  console.log(friend.firstName);
}