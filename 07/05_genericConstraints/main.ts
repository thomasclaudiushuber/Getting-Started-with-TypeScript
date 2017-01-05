class Friend {
  constructor(public readonly id: number,
    public firstName: string) { }
}
interface IHaveId {
  id: number;
}

class GenericRepo<T extends IHaveId> {
  private _items = new Array<T>();
  GetById(id: number) {
    return this._items.filter(item => item.id === id)[0];
  }
  Insert(item: T): void {
    this._items.push(item);
  }
}

let repo = new GenericRepo<Friend>();
repo.Insert(new Friend(1, "Thomas"));
repo.Insert(new Friend(2, "Julia"));
repo.Insert(new Friend(3, "Anna"));

var friend = repo.GetById(2);
console.log(friend.firstName); // Logs "Julia";