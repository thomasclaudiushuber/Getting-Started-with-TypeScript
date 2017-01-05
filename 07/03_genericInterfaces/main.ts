interface IRepository<T> {
  GetAll(): T[];
  Insert(item: T): void;
}

class Friend {
  constructor(public firstName: string) { }
}

class FriendRepo implements IRepository<Friend> {
  private _items = new Array<Friend>();
  GetAll() {
    return this._items;
  }
  Insert(item: Friend): void {
    this._items.push(item);
  }
}

let repo = new FriendRepo();
repo.Insert(new Friend("Thomas"));
repo.Insert(new Friend("Julia"));
repo.Insert(new Friend("Anna"));

for(let friend of repo.GetAll())
{
  console.log(friend.firstName);
}