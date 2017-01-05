function logToConsole<T>(item: T): T {
  console.log(item);
  return item;
}

let firstname: string = logToConsole("Thomas");
let luckyNumber: number = logToConsole(13);