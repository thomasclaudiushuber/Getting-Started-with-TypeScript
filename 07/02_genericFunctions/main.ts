function LogToConsole<T>(item: T): T {
  console.log(item);
  return item;
}

let firstname: string = LogToConsole("Thomas");
let luckyNumber: number = LogToConsole(13);