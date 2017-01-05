interface IRepository<T> {
  GetAll(): T[];
  Insert(item: T): void;
}

class Friend {
  constructor(public firstName: string) { }
}

class GenericRepo<T> implements IRepository<T> {
  private _items = new Array<T>();
  GetAll() {
    return this._items;
  }
  Insert(item: T): void {
    this._items.push(item);
  }
}

let repo = new GenericRepo<Friend>();
repo.Insert(new Friend("Thomas"));
repo.Insert(new Friend("Julia"));
repo.Insert(new Friend("Anna"));

for(let friend of repo.GetAll())
{
  console.log(friend.firstName);
}