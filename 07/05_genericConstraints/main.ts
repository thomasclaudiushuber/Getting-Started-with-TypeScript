class Friend {
  constructor(public readonly id: number,
    public firstName: string) { }
}
interface IHaveId {
  id: number;
}

class GenericRepo<T extends IHaveId> {
  private _items = new Array<T>();
  getById(id: number) {
    return this._items.filter(item => item.id === id)[0];
  }
  insert(item: T): void {
    this._items.push(item);
  }
}

let repo = new GenericRepo<Friend>();
repo.insert(new Friend(1, "Thomas"));
repo.insert(new Friend(2, "Julia"));
repo.insert(new Friend(3, "Anna"));

var friend = repo.getById(2);
console.log(friend.firstName); // Logs "Julia";